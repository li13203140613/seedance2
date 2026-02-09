import postgres from 'postgres';
import { readFileSync, readdirSync } from 'fs';
import { AwsClient } from 'aws4fetch';
import path from 'path';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL environment variable is required');
  process.exit(1);
}

async function main() {
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

  const tmpDir = process.argv[2] || 'tmp-videos';
  const files = readdirSync(tmpDir);

  const results = [];

  for (const file of files) {
    const filePath = path.join(tmpDir, file);
    const isVideo = file.endsWith('.mp4');
    const isPoster = file.endsWith('.webp');

    if (!isVideo && !isPoster) continue;

    const contentType = isVideo ? 'video/mp4' : 'image/webp';
    const r2Key = `showcases/${file}`;
    const url = `${endpoint}/${bucket}/${uploadPath}/${r2Key}`;

    console.log(`Uploading ${file} (${contentType})...`);

    const fileData = readFileSync(filePath);
    const sizeMB = (fileData.length / 1024 / 1024).toFixed(2);

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
      console.error(`  FAILED: ${response.status} ${text}`);
      continue;
    }

    const publicUrl = domain
      ? `${domain}/${uploadPath}/${r2Key}`
      : url;

    console.log(`  OK (${sizeMB} MB) -> ${publicUrl}`);
    results.push({ file, publicUrl, size: sizeMB, type: contentType });
  }

  console.log('\n=== Upload Summary ===');
  console.log(`Total: ${results.length} files uploaded`);
  console.log('\nVideo URLs:');
  results.filter(r => r.type === 'video/mp4').forEach(r => {
    console.log(`  ${r.file}: ${r.publicUrl}`);
  });
  console.log('\nPoster URLs:');
  results.filter(r => r.type === 'image/webp').forEach(r => {
    console.log(`  ${r.file}: ${r.publicUrl}`);
  });

  await sql.end();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
