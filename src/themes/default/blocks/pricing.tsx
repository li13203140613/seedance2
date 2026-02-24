'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Check, ChevronDown, Clock, Gift, Globe, Loader2, Zap } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { PaymentModal } from '@/shared/blocks/payment/payment-modal';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/shared/components/ui/card';
import { useAppContext } from '@/shared/contexts/app';
import { getCookie } from '@/shared/lib/cookie';
import { cn } from '@/shared/lib/utils';
import { Subscription } from '@/shared/models/subscription';
import {
  CreditPack,
  PricingCurrency,
  PricingItem,
  Pricing as PricingType,
} from '@/shared/types/blocks/pricing';

const COUNTDOWN_STORAGE_KEY = 'promotion_countdown_end';

function getPackUnitPrice(pack: CreditPack): number {
  if (!pack?.credits || pack.credits <= 0) return 0;
  return pack.amount / 100 / pack.credits;
}

function getPackDiscountRate(pack: CreditPack, basePack?: CreditPack): number {
  if (!basePack) return 0;

  const baseUnitPrice = getPackUnitPrice(basePack);
  const unitPrice = getPackUnitPrice(pack);
  if (baseUnitPrice <= 0 || unitPrice <= 0) return 0;

  return Math.max(0, (baseUnitPrice - unitPrice) / baseUnitPrice);
}

function inferCurrencySymbol(price?: string): string {
  if (!price) return '';
  const match = price.match(/[^\d.,\s]+/);
  return match?.[0] || '';
}

const FALLBACK_SUPPORTED_CURRENCIES = ['USD'];
const CURRENCY_CONFIG: Record<string, { symbol: string; label: string }> = {
  USD: { symbol: '$', label: 'USD ($)' },
  CNY: { symbol: '¥', label: 'CNY (¥)' },
  EUR: { symbol: '€', label: 'EUR (€)' },
  GBP: { symbol: '£', label: 'GBP (£)' },
  JPY: { symbol: '¥', label: 'JPY (¥)' },
};

const LOCALE_CURRENCY_PREFERENCES: Record<string, string> = {
  zh: 'CNY',
  ja: 'JPY',
  de: 'EUR',
  es: 'EUR',
  fr: 'EUR',
  pt: 'EUR',
};

function detectBrowserCurrency(): string {
  if (typeof window === 'undefined') return 'USD';
  try {
    const lang = navigator.language || navigator.languages?.[0] || 'en-US';
    const region = lang.split('-')[1]?.toUpperCase() || '';
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

    if (region === 'CN' || tz.includes('Shanghai') || lang.startsWith('zh')) {
      return 'CNY';
    }
    if (region === 'JP' || tz.includes('Tokyo') || lang.startsWith('ja')) {
      return 'JPY';
    }
    if (region === 'GB' || tz.includes('London')) return 'GBP';
    if (
      ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'PT', 'IE', 'FI', 'GR'].includes(region) ||
      tz.includes('Berlin') ||
      tz.includes('Paris')
    ) {
      return 'EUR';
    }
  } catch {
    // ignore
  }

  return 'USD';
}

function getLocalePreferredCurrency(locale: string): string {
  const normalized = (locale || 'en').toLowerCase();
  const baseLocale = normalized.split('-')[0];
  return (
    LOCALE_CURRENCY_PREFERENCES[normalized] ||
    LOCALE_CURRENCY_PREFERENCES[baseLocale] ||
    'USD'
  );
}

function getCurrencyData(
  item: PricingItem,
  currency: string
): {
  price: string;
  original_price?: string;
  amount: number;
  cost_per_100?: string;
  annual_total?: string;
  annual_savings?: string;
  credit_packs?: CreditPack[];
} {
  if (currency.toUpperCase() === (item.currency || 'USD').toUpperCase()) {
    return {
      price: item.price || '',
      original_price: item.original_price,
      amount: item.amount,
      cost_per_100: item.cost_per_100,
      annual_total: item.annual_total,
      annual_savings: item.annual_savings,
      credit_packs: item.credit_packs,
    };
  }

  const selected = item.currencies?.find(
    (c: PricingCurrency) => c.currency.toUpperCase() === currency.toUpperCase()
  );
  if (selected) {
    return {
      price: selected.price,
      original_price: selected.original_price,
      amount: selected.amount,
      cost_per_100: selected.cost_per_100 || item.cost_per_100,
      annual_total: selected.annual_total || item.annual_total,
      annual_savings: selected.annual_savings || item.annual_savings,
      credit_packs: selected.credit_packs || item.credit_packs,
    };
  }

  return {
    price: item.price || '',
    original_price: item.original_price,
    amount: item.amount,
    cost_per_100: item.cost_per_100,
    annual_total: item.annual_total,
    annual_savings: item.annual_savings,
    credit_packs: item.credit_packs,
  };
}

// Countdown timer hook - uses sessionStorage for sync with TopBanner
function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      if (typeof window === 'undefined') return;

      const endTime = sessionStorage.getItem(COUNTDOWN_STORAGE_KEY);
      if (!endTime) {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }

      const diff = Math.max(0, parseInt(endTime) - Date.now());
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

export function Pricing({
  section,
  className,
  currentSubscription,
}: {
  section: PricingType;
  className?: string;
  currentSubscription?: Subscription;
}) {
  const locale = useLocale();
  const t = useTranslations('pages.pricing.messages');
  const isZhLocale = locale.toLowerCase().startsWith('zh');

  const getDiscountBadgeText = useCallback(
    (pack: CreditPack, basePack?: CreditPack) => {
      const rate = getPackDiscountRate(pack, basePack);
      if (rate <= 0.001) {
        return isZhLocale ? '\u540c\u5355\u4ef7' : 'Same price';
      }
      const pct = Math.max(1, Math.round(rate * 100));
      return isZhLocale ? `\u7701 ${pct}%` : `Save ${pct}%`;
    },
    [isZhLocale]
  );

  const getUnitPriceText = useCallback(
    (pack: CreditPack) => {
      const unitPrice = getPackUnitPrice(pack);
      if (unitPrice <= 0) return isZhLocale ? '--/\u79ef\u5206' : '-- / credit';

      const symbol = inferCurrencySymbol(pack.price);
      const priceText = `${symbol}${unitPrice.toFixed(2)}`;
      return isZhLocale
        ? `${priceText}/\u79ef\u5206`
        : `${priceText} / credit`;
    },
    [isZhLocale]
  );

  const {
    user,
    setIsShowSignModal,
    setIsShowPaymentModal,
    configs,
  } = useAppContext();

  // Active group tab
  const [group, setGroup] = useState(() => {
    const currentItem = section.items?.find(
      (i) => i.product_id === currentSubscription?.productId
    );
    const featuredGroup = section.groups?.find((g) => g.is_featured);
    return (
      currentItem?.group || featuredGroup?.name || section.groups?.[0]?.name
    );
  });

  const [pricingItem, setPricingItem] = useState<PricingItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  // Currency state
  const supportedCurrencies: string[] =
    (section as any).supported_currencies || FALLBACK_SUPPORTED_CURRENCIES;
  const supportedCurrenciesKey = supportedCurrencies.join('|');
  const [selectedCurrency, setSelectedCurrency] = useState(
    supportedCurrencies[0] || 'USD'
  );
  const [currencyDropdownFor, setCurrencyDropdownFor] = useState<string | null>(
    null
  );

  // Credit pack selection for pay-as-you-go cards (keyed by base product_id)
  const [selectedPacks, setSelectedPacks] = useState<Record<string, CreditPack>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Banner countdown
  const banner = (section as any).banner;
  const countdown = useCountdown();

  // Current group info
  const currentGroup = useMemo(
    () => section.groups?.find((g) => g.name === group),
    [section.groups, group]
  );

  // Filtered items for current group
  const visibleItems = useMemo(
    () => section.items?.filter((item) => !item.group || item.group === group) ?? [],
    [section.items, group]
  );

  // Set default currency based on page locale first, then browser fallback.
  useEffect(() => {
    const localeCurrency = getLocalePreferredCurrency(locale);
    const browserCurrency = detectBrowserCurrency();

    if (supportedCurrencies.includes(localeCurrency)) {
      setSelectedCurrency(localeCurrency);
      return;
    }

    if (supportedCurrencies.includes(browserCurrency)) {
      setSelectedCurrency(browserCurrency);
      return;
    }

    setSelectedCurrency(supportedCurrencies[0] || 'USD');
  }, [locale, supportedCurrenciesKey]);

  // Initialize default credit packs
  useEffect(() => {
    const defaults: Record<string, CreditPack> = {};
    section.items?.forEach((item) => {
      if (!item.is_payg) return;

      const currencyData = getCurrencyData(item, selectedCurrency);
      const packs = currencyData.credit_packs || item.credit_packs;
      if (packs?.length) {
        const growthPack = packs.find((p) => p.credits >= 600);
        const def =
          growthPack ||
          packs.find((p) => p.is_default) ||
          packs[0];
        defaults[item.product_id] = def;
      }
    });
    setSelectedPacks(defaults);
  }, [section.items, selectedCurrency]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const handler = () => setOpenDropdown(null);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [openDropdown]);

  // Close currency dropdown on outside click
  useEffect(() => {
    if (!currencyDropdownFor) return;
    const handler = () => setCurrencyDropdownFor(null);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [currencyDropdownFor]);

  const getAffiliateMetadata = useCallback(
    ({ paymentProvider }: { paymentProvider: string }) => {
      const meta: Record<string, string> = {};
      if (configs.affonso_enabled === 'true' && ['stripe', 'creem'].includes(paymentProvider)) {
        meta.affonso_referral = getCookie('affonso_referral') || '';
      }
      if (configs.promotekit_enabled === 'true' && ['stripe'].includes(paymentProvider)) {
        meta.promotekit_referral =
          typeof window !== 'undefined' && (window as any).promotekit_referral
            ? (window as any).promotekit_referral
            : getCookie('promotekit_referral') || '';
      }
      return meta;
    },
    [configs]
  );

  const handleCheckout = async (item: PricingItem, paymentProvider?: string) => {
    try {
      if (!user) {
        setIsShowSignModal(true);
        return;
      }

      const requestedCurrency = selectedCurrency || item.currency;
      const shouldFallbackPaypalCurrency =
        paymentProvider === 'paypal' &&
        requestedCurrency.toUpperCase() === 'CNY';
      const checkoutCurrency = shouldFallbackPaypalCurrency
        ? 'USD'
        : requestedCurrency;

      if (shouldFallbackPaypalCurrency) {
        toast.info('PayPal does not support CNY in current account. Switched to USD.');
      }

      const params = {
        product_id: item.product_id,
        currency: checkoutCurrency,
        locale: locale || 'en',
        payment_provider: paymentProvider || '',
        metadata: getAffiliateMetadata({ paymentProvider: paymentProvider || '' }),
      };

      setIsLoading(true);
      setLoadingProductId(item.product_id);

      const response = await fetch('/api/payment/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });

      if (response.status === 401) {
        setIsLoading(false);
        setLoadingProductId(null);
        setPricingItem(null);
        setIsShowSignModal(true);
        return;
      }

      if (!response.ok) throw new Error(`request failed with status ${response.status}`);

      const { code, message, data } = await response.json();
      if (code !== 0) throw new Error(message);
      if (!data?.checkoutUrl) throw new Error('checkout url not found');

      window.location.href = data.checkoutUrl;
    } catch (e: any) {
      console.log('checkout failed: ', e);
      toast.error('checkout failed: ' + e.message);
      setIsLoading(false);
      setLoadingProductId(null);
    }
  };

  const handlePayment = async (item: PricingItem) => {
    if (!user) {
      setIsShowSignModal(true);
      return;
    }

    // For PAYG items, use the selected credit pack's product_id
    let checkoutItem = item;
    if (item.is_payg) {
      const currencyData = getCurrencyData(item, selectedCurrency);
      const packs = currencyData.credit_packs || item.credit_packs;
      if (!packs?.length) {
        return;
      }

      const pack = selectedPacks[item.product_id];
      if (pack) {
        checkoutItem = {
          ...item,
          product_id: pack.product_id,
          product_name: pack.product_name,
          amount: pack.amount,
          price: pack.price,
          credits: pack.credits,
        };
      }
    }

    if (configs.select_payment_enabled === 'true') {
      setPricingItem(checkoutItem);
      setIsShowPaymentModal(true);
    } else {
      handleCheckout(checkoutItem, configs.default_payment_provider);
    }
  };

  const pad = (n: number) => String(n).padStart(2, '0');

  const renderCurrencySwitcher = (key: string) => {
    if (supportedCurrencies.length <= 1) return null;

    const isOpen = currencyDropdownFor === key;

    return (
      <div className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrencyDropdownFor((prev) => (prev === key ? null : key));
          }}
          className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-muted/30 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-border hover:text-foreground"
        >
          <Globe className="size-3.5" />
          <span>{CURRENCY_CONFIG[selectedCurrency]?.label || selectedCurrency}</span>
          <ChevronDown
            className={cn('size-3.5 transition-transform', isOpen && 'rotate-180')}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 z-50 mt-1 min-w-[152px] rounded-lg border border-border/50 bg-popover shadow-xl">
            {supportedCurrencies.map((currencyCode) => (
              <button
                key={currencyCode}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCurrency(currencyCode);
                  setCurrencyDropdownFor(null);
                }}
                className={cn(
                  'flex w-full items-center gap-2 px-3 py-2 text-xs transition-colors hover:bg-muted/50',
                  selectedCurrency === currencyCode &&
                    'bg-muted/30 font-medium text-emerald-500'
                )}
              >
                <span>{CURRENCY_CONFIG[currencyCode]?.symbol || ''}</span>
                <span>{CURRENCY_CONFIG[currencyCode]?.label || currencyCode}</span>
                {selectedCurrency === currencyCode && (
                  <Check className="ml-auto size-3.5" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id={section.id}
      className={cn('py-16 md:py-24', section.className, className)}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Hidden h1 for SEO */}
        {section.sr_only_title && (
          <h1 className="sr-only">{section.sr_only_title}</h1>
        )}

        {/* Banner */}
        {banner && (
          <div className="mx-auto mb-8 flex max-w-2xl items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">{banner.title}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-mono text-emerald-700/80 dark:text-emerald-300/80">
              <Clock className="size-3.5" />
              <span>{countdown.d}d</span>
              <span className="font-bold">{pad(countdown.h)}:{pad(countdown.m)}:{pad(countdown.s)}</span>
            </div>
          </div>
        )}

        {/* Group Tabs */}
        {section.groups && section.groups.length > 0 && (
          <div className="mx-auto mb-6 flex justify-center">
            <div className="inline-flex rounded-full border border-border/50 bg-muted/30 p-1">
              {section.groups.map((g) => (
                <button
                  key={g.name}
                  onClick={() => setGroup(g.name)}
                  className={cn(
                    'relative rounded-full px-8 py-2 text-sm font-medium transition-all',
                    group === g.name
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {g.title}
                  {g.badge && (
                    <span className="absolute -right-2 -top-2 rounded-full bg-emerald-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                      {g.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Group Description */}
        {currentGroup?.description && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="rounded-lg border border-border/30 bg-muted/20 px-6 py-3 text-sm text-muted-foreground">
              {currentGroup.description}
            </p>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item, idx) => {
            const isCurrentPlan =
              currentSubscription?.productId === item.product_id;
            const isFeatured = item.is_featured;
            const isPayg = item.is_payg;
            const currencyData = getCurrencyData(item, selectedCurrency);
            const selectedPack = isPayg ? selectedPacks[item.product_id] : null;
            const packs = isPayg
              ? currencyData.credit_packs || item.credit_packs || []
              : [];
            const basePack = isPayg ? packs[0] : null;
            const activePack = isPayg ? selectedPack || packs[0] : null;
            const recommendedPack = isPayg
              ? packs.find((pack) => pack.credits >= 600) || packs[packs.length - 1]
              : null;
            const displayPacks = isPayg && recommendedPack
              ? [recommendedPack, ...packs.filter((pack) => pack.product_id !== recommendedPack.product_id)]
              : packs;

            return (
              <Card
                key={idx}
                className={cn(
                  'relative flex flex-col border-border/50 bg-card/50 backdrop-blur-sm',
                  isFeatured && 'border-emerald-500/50 shadow-lg shadow-emerald-500/5'
                )}
              >
                {/* Popular label */}
                {item.label && (
                  <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-emerald-500 px-3 text-xs font-semibold text-white">
                    {item.label}
                  </span>
                )}

                <CardHeader className="space-y-4 pb-4">
                  {/* Title row */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      {item.annual_badge && (
                        <Badge variant="outline" className="border-amber-500/50 text-amber-600 dark:text-amber-400 text-[10px] px-1.5 py-0">
                          {item.annual_badge}
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground min-h-[40px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Pay-as-you-go: Credit Pack Dropdown */}
                  {isPayg && packs.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                        {isZhLocale
                          ? '\u4e70\u5f97\u8d8a\u591a\uff0c\u4f53\u9a8c\u8d8a\u5212\u7b97'
                          : 'Buy more credits for better value'}
                      </p>

                      <div className="relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(
                              openDropdown === item.product_id ? null : item.product_id
                            );
                          }}
                          className="flex w-full items-center justify-between rounded-lg border border-border/50 bg-muted/30 px-4 py-2.5 text-left text-sm"
                        >
                          <div className="min-w-0">
                            <p className="truncate font-medium">
                              {activePack?.label || packs[0]?.label}
                            </p>
                          </div>
                          <div className="ml-2 flex shrink-0 items-center gap-2">
                            {activePack && (
                              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">
                                {getDiscountBadgeText(activePack, basePack || undefined)}
                              </span>
                            )}
                            <ChevronDown className="size-4 text-muted-foreground" />
                          </div>
                        </button>

                        {openDropdown === item.product_id && (
                          <div className="absolute z-50 mt-1 w-full rounded-lg border border-border/50 bg-popover shadow-xl">
                            {displayPacks.map((pack) => {
                              const isRecommended =
                                recommendedPack?.product_id === pack.product_id;

                              return (
                                <button
                                  key={pack.product_id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedPacks((prev) => ({
                                      ...prev,
                                      [item.product_id]: pack,
                                    }));
                                    setOpenDropdown(null);
                                  }}
                                  className={cn(
                                    'flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-muted/50',
                                    activePack?.product_id === pack.product_id &&
                                      'bg-muted/30 text-emerald-400'
                                  )}
                                >
                                  <div className="min-w-0 text-left">
                                    <div className="flex items-center gap-1.5">
                                      <span>{pack.label}</span>
                                      {isRecommended && (
                                        <span className="rounded-full bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-300">
                                          {isZhLocale ? '\u63a8\u8350' : 'Recommended'}
                                        </span>
                                      )}
                                    </div>
                                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                                      {getUnitPriceText(pack)}
                                    </p>
                                  </div>
                                  <div className="ml-2 flex shrink-0 items-center gap-2">
                                    <span className="text-muted-foreground">{pack.price}</span>
                                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-300">
                                      {getDiscountBadgeText(pack, basePack || undefined)}
                                    </span>
                                    {activePack?.product_id === pack.product_id && (
                                      <Check className="size-3.5" />
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Price display */}
                  {!isPayg ? (
                    <div className="min-h-[85px]">
                      <div className="flex flex-wrap items-center gap-2">
                        {currencyData.original_price && (
                          <span className="text-sm text-muted-foreground line-through">
                            {currencyData.original_price}
                          </span>
                        )}
                        <span className="text-3xl font-bold leading-none">
                          {currencyData.price}
                        </span>
                        {item.unit && (
                          <span className="text-sm text-muted-foreground">{item.unit}</span>
                        )}
                        {renderCurrencySwitcher(`currency-${item.product_id}`)}
                      </div>

                      {/* Annual billing info */}
                      {currencyData.annual_total && (
                        <div className="mt-2 space-y-0.5">
                          <p className="text-xs text-muted-foreground">{currencyData.annual_total}</p>
                          {currencyData.annual_savings && (
                            <p className="text-xs text-emerald-600 dark:text-emerald-400">{currencyData.annual_savings}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="min-h-[85px]">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-3xl font-bold leading-none">
                          {activePack?.price || currencyData.price}
                        </span>
                        {renderCurrencySwitcher(`currency-${item.product_id}`)}
                      </div>
                      {selectedCurrency === 'CNY' && (
                        <div className="mt-2 flex items-center gap-1.5">
                          <Image
                            src="/imgs/icons/alipay.svg"
                            alt="Alipay"
                            width={30}
                            height={30}
                            className="rounded"
                          />
                          <Image
                            src="/imgs/icons/wechat.svg"
                            alt="WeChat Pay"
                            width={30}
                            height={30}
                            className="rounded"
                          />
                        </div>
                      )}
                    </div>
                  )}

                </CardHeader>

                <CardContent className="flex-1 space-y-4 pt-0">

                  {/* Credits summary */}
                  {item.credits_summary && (
                    <div>
                      <p className="text-sm font-semibold">{item.credits_summary}</p>

                      {/* Value badge */}
                      {item.value_badge && (
                        <span className="mt-1 inline-block rounded bg-emerald-500/20 px-2 py-0.5 text-xs text-emerald-700 dark:text-emerald-400">
                          {item.value_badge}
                        </span>
                      )}

                      {/* Bonus credits */}
                      {item.bonus_credits && (
                        <div className="mt-1 flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                          <Gift className="size-3" />
                          <span>{item.bonus_credits}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Cost per credit */}
                  {currencyData.cost_per_100 && (
                    <p className="text-xs text-muted-foreground">
                      <span className="text-foreground">{currencyData.cost_per_100}</span>
                    </p>
                  )}

                  {/* Feature list */}
                  <ul className="space-y-2.5">
                    {item.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </CardContent>

                {/* CTA Button — at the bottom of the card */}
                <div className="px-6 pb-6">
                  {isCurrentPlan ? (
                    <Button variant="outline" className="w-full" disabled>
                      {t('current_plan')}
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handlePayment(item)}
                      disabled={isLoading}
                      className={cn(
                        'w-full font-semibold transition-all',
                        isFeatured
                          ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/20'
                          : 'bg-white border-2 border-emerald-100 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-200'
                      )}
                      variant={isFeatured ? 'default' : 'outline'}
                    >
                      {isLoading && loadingProductId === item.product_id ? (
                        <>
                          <Loader2 className="mr-2 size-4 animate-spin" />
                          {t('processing')}
                        </>
                      ) : (
                        item.button?.title
                      )}
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <PaymentModal
        isLoading={isLoading}
        pricingItem={pricingItem}
        selectedCurrency={selectedCurrency}
        onCheckout={(item, paymentProvider) =>
          handleCheckout(item, paymentProvider)
        }
      />
    </section>
  );
}
