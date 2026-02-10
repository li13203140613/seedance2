/**
 * Batch upload Seedance 2.0 User Manual assets (images + videos) to R2
 *
 * Usage:
 *   pnpm tsx scripts/with-env.ts node scripts/upload-manual-r2.mjs
 *
 * This script:
 *   1. Reads all images/videos from the Feishu export directory
 *   2. Uploads them to Cloudflare R2 under "manual/" prefix
 *   3. Saves a URL mapping JSON file for the next step
 */

import postgres from 'postgres';
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { AwsClient } from 'aws4fetch';
import path from 'path';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is required');
  process.exit(1);
}

// Source directory (Feishu export)
const SOURCE_DIR = String.raw`C:\Users\LILI\Downloads\🎬_即梦_Seedance_2.0_使用手册（全新多模态创作体验）_副本`;
const MAPPING_OUTPUT = path.resolve('scripts/manual-url-mapping.json');

function getContentType(file) {
  const ext = path.extname(file).toLowerCase();
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.mp4': 'video/mp4',
  };
  return types[ext] || 'application/octet-stream';
}

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  const sql = postgres(DATABASE_URL, { ssl: 'require' });

  // Get R2 config from database
  const configs = await sql`SELECT name, value FROM config WHERE name IN (
    'r2_access_key', 'r2_secret_key', 'r2_bucket_name', 'r2_account_id', 'r2_endpoint', 'r2_domain', 'r2_upload_path'
  )`;

  const configMap = {};
  for (const row of configs) {
    configMap[row.name] = row.value;
  }

  console.log('R2 configs found:', Object.keys(configMap));

  if (!configMap.r2_access_key || !configMap.r2_secret_key || !configMap.r2_bucket_name) {
    console.error('Missing R2 credentials!');
    await sql.end();
    process.exit(1);
  }

  const accountId = configMap.r2_account_id || '';
  const endpoint = configMap.r2_endpoint || `https://${accountId}.r2.cloudflarestorage.com`;
  const bucket = configMap.r2_bucket_name;
  let uploadPath = configMap.r2_upload_path || 'uploads';
  if (uploadPath.startsWith('/')) uploadPath = uploadPath.slice(1);
  if (uploadPath.endsWith('/')) uploadPath = uploadPath.slice(0, -1);
  const domain = configMap.r2_domain || '';

  const client = new AwsClient({
    accessKeyId: configMap.r2_access_key,
    secretAccessKey: configMap.r2_secret_key,
    region: 'auto',
  });

  // Scan source directory for images and videos
  const allFiles = readdirSync(SOURCE_DIR);
  const mediaFiles = allFiles.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.mp4'].includes(ext);
  });

  // Deduplicate: prefer files without (1) suffix
  const seen = new Map();
  for (const file of mediaFiles) {
    const base = file.replace(/ \(\d+\)/, '');
    if (!seen.has(base) || !file.includes('(')) {
      seen.set(base, file);
    }
  }

  const filesToUpload = [...seen.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  console.log(`\nFound ${filesToUpload.length} unique media files to upload\n`);

  const urlMapping = {};
  let uploaded = 0;
  let failed = 0;

  for (const [targetName, sourceFile] of filesToUpload) {
    const filePath = path.join(SOURCE_DIR, sourceFile);
    const contentType = getContentType(sourceFile);
    const r2Key = `manual/${targetName}`;
    const url = `${endpoint}/${bucket}/${uploadPath}/${r2Key}`;

    try {
      const fileData = readFileSync(filePath);
      const sizeMB = (fileData.length / 1024 / 1024).toFixed(2);

      process.stdout.write(`[${uploaded + failed + 1}/${filesToUpload.length}] ${targetName} (${sizeMB} MB)... `);

      const request = new Request(url, {
        method: 'PUT',
        headers: {
          'Content-Type': contentType,
          'Content-Disposition': 'inline',
          'Content-Length': fileData.length.toString(),
        },
        body: new Uint8Array(fileData),
      });

      const response = await client.fetch(request);

      if (!response.ok) {
        const text = await response.text();
        console.log(`FAILED (${response.status})`);
        failed++;
        continue;
      }

      const publicUrl = domain
        ? `${domain}/${uploadPath}/${r2Key}`
        : url;

      console.log(`OK -> ${publicUrl}`);

      // Map both ./filename and filename to the public URL
      urlMapping[`./${targetName}`] = publicUrl;
      urlMapping[targetName] = publicUrl;
      uploaded++;
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n=== Upload Summary ===`);
  console.log(`Uploaded: ${uploaded}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${filesToUpload.length}`);

  // Save URL mapping
  writeFileSync(MAPPING_OUTPUT, JSON.stringify(urlMapping, null, 2), 'utf-8');
  console.log(`\nURL mapping saved to: ${MAPPING_OUTPUT}`);

  await sql.end();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
