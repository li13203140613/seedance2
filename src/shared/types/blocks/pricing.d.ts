import { Button } from '@/types/blocks/base/button';

export interface PricingGroup {
  name?: string;
  title?: string;
  description?: string;
  label?: string;
  badge?: string;
  is_featured?: boolean;
}

export interface PricingCurrency {
  currency: string; // currency code
  amount: number; // price amount
  price: string; // price text
  original_price: string; // original price text
  payment_product_id?: string;
  payment_providers?: string[];
  cost_per_100?: string; // cost per credit text
  annual_total?: string; // annual billing total text
  annual_savings?: string; // annual savings text
  credit_packs?: CreditPack[]; // currency-specific credit packs
}

export interface CreditPack {
  credits: number;
  label: string;
  price: string;
  amount: number;
  product_id: string;
  product_name?: string;
  is_default?: boolean;
}

export interface TipBox {
  title: string;
  items: string[];
}

export interface PricingItem {
  title?: string;
  description?: string;
  label?: string;

  currency: string; // default currency
  amount: number; // default price amount
  price?: string; // default price text
  original_price?: string; // default original price text
  currencies?: PricingCurrency[]; // alternative currencies with different prices

  unit?: string;
  features_title?: string;
  features?: string[];
  button?: Button;
  tip?: string;
  is_featured?: boolean;
  interval: 'one-time' | 'day' | 'week' | 'month' | 'year';
  product_id: string;
  payment_product_id?: string;
  payment_providers?: string[];
  product_name?: string;
  plan_name?: string;

  credits?: number;
  valid_days?: number;
  group?: string;

  // New fields for enhanced pricing display
  credits_summary?: string;
  cost_per_100?: string;
  value_badge?: string;
  annual_total?: string;
  annual_savings?: string;
  bonus_credits?: string;
  is_payg?: boolean;
  credit_packs?: CreditPack[];
  tip_box?: TipBox;
  annual_badge?: string;
}

export interface PricingBanner {
  title?: string;
  countdown_days?: number;
}

export interface Pricing {
  id?: string;
  disabled?: boolean;
  name?: string;
  title?: string;
  description?: string;
  items?: PricingItem[];
  groups?: PricingGroup[];
  banner?: PricingBanner;
  className?: string;
  sr_only_title?: string;
}
