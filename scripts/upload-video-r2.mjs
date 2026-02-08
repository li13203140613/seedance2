import postgres from 'postgres';
import { readFileSync } from 'fs';
import { AwsClient } from 'aws4fetch';

const DATABASE_URL = "REDACTED_USE_ENV_VAR";

async function main() {
  // 1. Connect to database and get R2 configs
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
    console.error('Missing R2 credentials in database!');
    console.log('Available configs:', configMap);
    await sql.end();
    process.exit(1);
  }

  // 2. Read the video file
  const videoPath = process.argv[2] || 'C:\\Users\\LILI\\Downloads\\seedance-video-3.mp4';
  console.log('Reading video file:', videoPath);
  const videoData = readFileSync(videoPath);
  console.log('Video file size:', (videoData.length / 1024 / 1024).toFixed(2), 'MB');

  // 3. Upload to R2
  const accountId = configMap.r2_account_id || '';
  const endpoint = configMap.r2_endpoint || `https://${accountId}.r2.cloudflarestorage.com`;
  const bucket = configMap.r2_bucket_name;
  let uploadPath = configMap.r2_upload_path || 'uploads';
  if (uploadPath.startsWith('/')) uploadPath = uploadPath.slice(1);
  if (uploadPath.endsWith('/')) uploadPath = uploadPath.slice(0, -1);
  const domain = configMap.r2_domain || '';

  const key = process.argv[3] || 'seedance-video-3.mp4';
  const url = `${endpoint}/${bucket}/${uploadPath}/${key}`;

  console.log('Uploading to:', url);

  const client = new AwsClient({
    accessKeyId: configMap.r2_access_key,
    secretAccessKey: configMap.r2_secret_key,
    region: 'auto',
  });

  const request = new Request(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'video/mp4',
      'Content-Disposition': 'inline',
      'Content-Length': videoData.length.toString(),
    },
    body: new Uint8Array(videoData),
  });

  const response = await client.fetch(request);

  if (!response.ok) {
    const text = await response.text();
    console.error('Upload failed:', response.status, response.statusText, text);
    await sql.end();
    process.exit(1);
  }

  const publicUrl = domain
    ? `${domain}/${uploadPath}/${key}`
    : url;

  console.log('Upload successful!');
  console.log('Public URL:', publicUrl);

  await sql.end();
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
