'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Check, ChevronDown, Clock, Gift, Loader2, Zap } from 'lucide-react';
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
  PricingItem,
  Pricing as PricingType,
} from '@/shared/types/blocks/pricing';

const COUNTDOWN_STORAGE_KEY = 'promotion_countdown_end';

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

  const {
    user,
    isShowPaymentModal,
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

  // Initialize default credit packs
  useEffect(() => {
    const defaults: Record<string, CreditPack> = {};
    section.items?.forEach((item) => {
      if (item.is_payg && item.credit_packs?.length) {
        const def = item.credit_packs.find((p) => p.is_default) || item.credit_packs[0];
        defaults[item.product_id] = def;
      }
    });
    setSelectedPacks(defaults);
  }, [section.items]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const handler = () => setOpenDropdown(null);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [openDropdown]);

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

      const params = {
        product_id: item.product_id,
        currency: item.currency,
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
    if (item.is_payg && item.credit_packs?.length) {
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
            const selectedPack = isPayg ? selectedPacks[item.product_id] : null;

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
                  {isPayg && item.credit_packs && (
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(
                            openDropdown === item.product_id ? null : item.product_id
                          );
                        }}
                        className="flex w-full items-center justify-between rounded-lg border border-border/50 bg-muted/30 px-4 py-2.5 text-sm"
                      >
                        <span>
                          {selectedPack
                            ? `${selectedPack.label}`
                            : item.credit_packs[0]?.label}
                        </span>
                        <ChevronDown className="size-4 text-muted-foreground" />
                      </button>

                      {openDropdown === item.product_id && (
                        <div className="absolute z-50 mt-1 w-full rounded-lg border border-border/50 bg-popover shadow-xl">
                          {item.credit_packs.map((pack) => (
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
                                'flex w-full items-center justify-between px-4 py-2.5 text-sm hover:bg-muted/50 transition-colors',
                                selectedPack?.product_id === pack.product_id &&
                                'bg-muted/30 text-emerald-400'
                              )}
                            >
                              <span>{pack.label}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">{pack.price}</span>
                                {selectedPack?.product_id === pack.product_id && (
                                  <Check className="size-3.5" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Price display */}
                  {!isPayg ? (
                    <div className="min-h-[85px]">
                      <div className="flex items-baseline gap-2">
                        {item.original_price && (
                          <span className="text-sm text-muted-foreground line-through">
                            {item.original_price}
                          </span>
                        )}
                        <span className="text-3xl font-bold">{item.price}</span>
                        {item.unit && (
                          <span className="text-sm text-muted-foreground">{item.unit}</span>
                        )}
                      </div>

                      {/* Annual billing info */}
                      {item.annual_total && (
                        <div className="mt-2 space-y-0.5">
                          <p className="text-xs text-muted-foreground">{item.annual_total}</p>
                          {item.annual_savings && (
                            <p className="text-xs text-emerald-600 dark:text-emerald-400">{item.annual_savings}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="min-h-[85px]">
                      <span className="text-3xl font-bold">
                        {selectedPack?.price || item.price}
                      </span>
                      {item.tip && (
                        <p className="mt-1 text-xs text-muted-foreground">{item.tip}</p>
                      )}
                      <div className="mt-2 flex items-center gap-1.5">
                        <Image src="/imgs/icons/alipay.svg" alt="Alipay" width={36} height={36} className="rounded" />
                      </div>
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
                  {item.cost_per_100 && (
                    <p className="text-xs text-muted-foreground">
                      <span className="text-foreground">{item.cost_per_100}</span>
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

                  {/* Tip box (for pay-as-you-go) */}
                  {item.tip_box && (
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
                      <p className="mb-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                        {item.tip_box.title}
                      </p>
                      <ul className="space-y-1">
                        {item.tip_box.items.map((tip, i) => (
                          <li key={i} className="text-xs text-muted-foreground">
                            · {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
        onCheckout={(item, paymentProvider) =>
          handleCheckout(item, paymentProvider)
        }
      />
    </section>
  );
}
