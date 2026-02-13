/**
 * Enable initial credits (2) for new users
 * Usage: pnpm tsx scripts/with-env.ts node scripts/enable-initial-credits.mjs
 */

import postgres from 'postgres';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getDatabaseUrl() {
  try {
    const envPath = join(__dirname, '..', '.env.development');
    const envContent = readFileSync(envPath, 'utf-8');
    const match = envContent.match(/DATABASE_URL\s*=\s*"([^"]+)"/);
    if (match) return match[1];
  } catch (e) {}

  try {
    const envPath = join(__dirname, '..', '.env.production');
    const envContent = readFileSync(envPath, 'utf-8');
    const match = envContent.match(/DATABASE_URL\s*=\s*"([^"]+)"/);
    if (match && match[1]) return match[1];
  } catch (e) {}

  return process.env.DATABASE_URL;
}

async function main() {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    console.error('ERROR: DATABASE_URL not found');
    process.exit(1);
  }

  const sql = postgres(databaseUrl, { ssl: 'require' });

  const configs = [
    { name: 'initial_credits_enabled', value: 'true' },
    { name: 'initial_credits_amount', value: '2' },
    { name: 'initial_credits_valid_days', value: '365' },
    { name: 'initial_credits_description', value: 'Welcome bonus for new users' },
  ];

  console.log('Setting initial credits config...\n');

  for (const cfg of configs) {
    await sql`
      INSERT INTO config (name, value)
      VALUES (${cfg.name}, ${cfg.value})
      ON CONFLICT (name) DO UPDATE SET value = ${cfg.value}
    `;
    console.log(`  [OK] ${cfg.name} = ${cfg.value}`);
  }

  // Verify
  const result = await sql`
    SELECT name, value FROM config WHERE name LIKE 'initial_credits%' ORDER BY name
  `;
  console.log('\nVerification:');
  for (const row of result) {
    console.log(`  ${row.name} = ${row.value}`);
  }

  console.log('\nDone! New users will receive 2 credits upon registration.');
  await sql.end();
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
