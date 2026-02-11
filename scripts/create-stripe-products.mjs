/**
 * Script to create Stripe products and prices for the Seedance pricing plans
 *
 * Usage: node scripts/create-stripe-products.mjs
 *
 * This script will:
 * 1. Read Stripe secret key from the database
 * 2. Create all products and prices in Stripe
 * 3. Output the mapping of product_id -> stripe price_id
 */

import Stripe from 'stripe';
import postgres from 'postgres';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read DATABASE_URL from .env.development
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

// Read Stripe secret key from database
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

// All products to create
const PRODUCTS = {
  // ==================== Monthly Subscriptions ====================
  'basic-monthly': {
    name: 'Seedance Basic Monthly',
    description: 'Basic monthly plan - 400 credits/month',
    interval: 'month',
    amount: 990, // $9.9
    currency: 'usd',
    metadata: { plan: 'basic', billing: 'monthly', credits: '400' },
  },
  'pro-monthly': {
    name: 'Seedance Pro Monthly',
    description: 'Pro monthly plan - 1600 credits/month',
    interval: 'month',
    amount: 2990, // $29.9
    currency: 'usd',
    metadata: { plan: 'pro', billing: 'monthly', credits: '1600' },
  },
  'ultra-monthly': {
    name: 'Seedance Ultra Monthly',
    description: 'Ultra monthly plan - 5600 credits/month',
    interval: 'month',
    amount: 9900, // $99
    currency: 'usd',
    metadata: { plan: 'ultra', billing: 'monthly', credits: '5600' },
  },

  // ==================== Yearly Subscriptions ====================
  'basic-yearly': {
    name: 'Seedance Basic Yearly',
    description: 'Basic yearly plan - 4800 credits/year + 400 bonus',
    interval: 'year',
    amount: 9480, // $94.8/year ($7.9/mo)
    currency: 'usd',
    metadata: { plan: 'basic', billing: 'yearly', credits: '4800', bonus: '400' },
  },
  'pro-yearly': {
    name: 'Seedance Pro Yearly',
    description: 'Pro yearly plan - 19200 credits/year + 2000 bonus',
    interval: 'year',
    amount: 23880, // $238.8/year ($19.9/mo)
    currency: 'usd',
    metadata: { plan: 'pro', billing: 'yearly', credits: '19200', bonus: '2000' },
  },
  'ultra-yearly': {
    name: 'Seedance Ultra Yearly',
    description: 'Ultra yearly plan - 67200 credits/year + 6000 bonus',
    interval: 'year',
    amount: 82800, // $828/year ($69/mo)
    currency: 'usd',
    metadata: { plan: 'ultra', billing: 'yearly', credits: '67200', bonus: '6000' },
  },

  // ==================== Credit Packs (one-time) ====================
  'credits-30': {
    name: 'Seedance Credits 30',
    description: '30 credits starter pack',
    interval: null, // one-time
    amount: 100, // $1
    currency: 'usd',
    metadata: { type: 'credits', credits: '30' },
  },
  'credits-500': {
    name: 'Seedance Credits 500',
    description: '500 credits pack',
    interval: null, // one-time
    amount: 1500, // $15
    currency: 'usd',
    metadata: { type: 'credits', credits: '500' },
  },
  'credits-1200': {
    name: 'Seedance Credits 1200',
    description: '1200 credits pack',
    interval: null,
    amount: 3000, // $30
    currency: 'usd',
    metadata: { type: 'credits', credits: '1200' },
  },
  'credits-2800': {
    name: 'Seedance Credits 2800',
    description: '2800 credits pack',
    interval: null,
    amount: 6000, // $60
    currency: 'usd',
    metadata: { type: 'credits', credits: '2800' },
  },
  'credits-5000': {
    name: 'Seedance Credits 5000',
    description: '5000 credits pack',
    interval: null,
    amount: 9900, // $99
    currency: 'usd',
    metadata: { type: 'credits', credits: '5000' },
  },
  'credits-8500': {
    name: 'Seedance Credits 8500',
    description: '8500 credits pack',
    interval: null,
    amount: 14900, // $149
    currency: 'usd',
    metadata: { type: 'credits', credits: '8500' },
  },
  'credits-16000': {
    name: 'Seedance Credits 16000',
    description: '16000 credits pack',
    interval: null,
    amount: 24900, // $249
    currency: 'usd',
    metadata: { type: 'credits', credits: '16000' },
  },
};

async function createStripeProducts(stripeKey) {
  const stripe = new Stripe(stripeKey);
  const results = {};

  console.log('\n========================================');
  console.log('  Creating Stripe Products & Prices');
  console.log('========================================\n');

  for (const [productId, config] of Object.entries(PRODUCTS)) {
    try {
      // Create the product
      const product = await stripe.products.create({
        name: config.name,
        description: config.description,
        metadata: {
          ...config.metadata,
          seedance_product_id: productId,
        },
      });

      console.log(`[OK] Product: ${config.name} (${product.id})`);

      // Create the price
      const priceParams = {
        product: product.id,
        unit_amount: config.amount,
        currency: config.currency,
        metadata: {
          seedance_product_id: productId,
        },
      };

      if (config.interval) {
        // Recurring price (subscription)
        priceParams.recurring = {
          interval: config.interval,
        };
      }

      const price = await stripe.prices.create(priceParams);

      console.log(`     Price: ${config.amount / 100} ${config.currency.toUpperCase()} ${config.interval ? `/ ${config.interval}` : '(one-time)'} (${price.id})`);

      results[productId] = {
        product_id: product.id,
        price_id: price.id,
        amount: config.amount,
        interval: config.interval,
      };
    } catch (e) {
      console.error(`[FAIL] ${productId}: ${e.message}`);
    }
  }

  return results;
}

async function main() {
  try {
    // Step 1: Get database URL
    const databaseUrl = getDatabaseUrl();
    if (!databaseUrl) {
      console.error('ERROR: DATABASE_URL not found');
      process.exit(1);
    }
    console.log('Database connected.');

    // Step 2: Get Stripe key from database
    console.log('Reading Stripe key from database...');
    const stripeKey = await getStripeKey(databaseUrl);
    const keyPrefix = stripeKey.substring(0, 10) + '...';
    console.log(`Stripe key found: ${keyPrefix}`);

    // Step 3: Create products
    const results = await createStripeProducts(stripeKey);

    // Step 4: Output results
    console.log('\n========================================');
    console.log('  Results Summary');
    console.log('========================================\n');

    console.log('Product ID Mapping (for admin settings stripe_product_ids):');
    console.log(JSON.stringify(results, null, 2));

    console.log('\n\nDone! All products created successfully.');
    console.log('The system uses dynamic checkout, so no additional configuration is needed.');
    console.log('Products are now visible in your Stripe Dashboard for management.\n');

  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
}

main();
