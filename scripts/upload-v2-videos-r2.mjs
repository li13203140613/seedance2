/**
 * Upload 副本 folder videos to R2 as v2_001.mp4 - v2_097.mp4
 *
 * Usage:
 *   pnpm tsx scripts/with-env.ts node scripts/upload-v2-videos-r2.mjs
 */

import postgres from 'postgres';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { AwsClient } from 'aws4fetch';
import path from 'path';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is required');
  process.exit(1);
}

// Source: 副本 folder
const SOURCE_DIR = String.raw`C:\Users\LILI\Downloads\🎬_即梦_Seedance_2.0_使用手册（全新多模态创作体验）_副本`;

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  const sql = postgres(DATABASE_URL, { ssl: 'require' });

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

  // Get all video files from 副本 folder
  const allFiles = readdirSync(SOURCE_DIR);
  const videoFiles = allFiles
    .filter(f => /^video_\d+\.mp4$/i.test(f))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });

  console.log(`\nFound ${videoFiles.length} video files to upload\n`);

  let uploaded = 0;
  let failed = 0;

  for (const sourceFile of videoFiles) {
    const num = sourceFile.match(/\d+/)[0];
    const targetName = `v2_${num}.mp4`;
    const filePath = path.join(SOURCE_DIR, sourceFile);
    const r2Key = `manual/${targetName}`;
    const url = `${endpoint}/${bucket}/${uploadPath}/${r2Key}`;

    try {
      const fileData = readFileSync(filePath);
      const sizeMB = (fileData.length / 1024 / 1024).toFixed(2);

      process.stdout.write(`[${uploaded + failed + 1}/${videoFiles.length}] ${sourceFile} -> ${targetName} (${sizeMB} MB)... `);

      const request = new Request(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'video/mp4',
          'Content-Disposition': 'inline',
          'Content-Length': fileData.length.toString(),
        },
        body: new Uint8Array(fileData),
      });

      const response = await client.fetch(request);

      if (!response.ok) {
        const text = await response.text();
        console.log(`FAILED (${response.status}): ${text.slice(0, 200)}`);
        failed++;
        continue;
      }

      const publicUrl = domain
        ? `${domain}/${uploadPath}/${r2Key}`
        : url;

      console.log(`OK -> ${publicUrl}`);
      uploaded++;
    } catch (err) {
      console.log(`ERROR: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n=== Upload Summary ===`);
  console.log(`Uploaded: ${uploaded}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${videoFiles.length}`);

  await sql.end();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
