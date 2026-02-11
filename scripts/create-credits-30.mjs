/**
 * Script to create ONLY the credits-30 ($1 starter pack) product in Stripe
 * Usage: node scripts/create-credits-30.mjs
 */

import Stripe from 'stripe';
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

async function getStripeKey(databaseUrl) {
  const sql = postgres(databaseUrl, { ssl: 'require' });
  try {
    const result = await sql`SELECT value FROM config WHERE name = 'stripe_secret_key'`;
    if (result.length > 0 && result[0].value) {
      return result[0].value;
    }
    throw new Error('stripe_secret_key not found in database');
  } finally {
    await sql.end();
  }
}

async function main() {
  try {
    const databaseUrl = getDatabaseUrl();
    if (!databaseUrl) {
      console.error('ERROR: DATABASE_URL not found');
      process.exit(1);
    }
    console.log('Database connected.');

    console.log('Reading Stripe key from database...');
    const stripeKey = await getStripeKey(databaseUrl);
    console.log(`Stripe key found: ${stripeKey.substring(0, 10)}...`);

    const stripe = new Stripe(stripeKey);

    // Create the product
    console.log('\nCreating credits-30 product...');
    const product = await stripe.products.create({
      name: 'Seedance Credits 30',
      description: '30 credits starter pack',
      metadata: {
        type: 'credits',
        credits: '30',
        seedance_product_id: 'credits-30',
      },
    });
    console.log(`[OK] Product: Seedance Credits 30 (${product.id})`);

    // Create the price
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 100, // $1
      currency: 'usd',
      metadata: {
        seedance_product_id: 'credits-30',
      },
    });
    console.log(`[OK] Price: $1 USD (one-time) (${price.id})`);

    console.log('\n========================================');
    console.log('  Result');
    console.log('========================================');
    console.log(JSON.stringify({
      'credits-30': {
        product_id: product.id,
        price_id: price.id,
        amount: 100,
        interval: null,
      }
    }, null, 2));
    console.log('\nDone! credits-30 product created successfully.');

  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
}

main();
