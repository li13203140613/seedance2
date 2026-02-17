'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { usePathname, useRouter } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { locales } from '@/config/locale';
import { cacheGet, cacheSet } from '@/shared/lib/cache';

const PREFERRED_LOCALE_KEY = 'locale';

export function LocaleDetector() {
  if (envConfigs.locale_detect_enabled !== 'true') {
    return null;
  }

  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasCheckedRef = useRef(false);

  const detectBrowserLocale = (): string | null => {
    if (typeof window === 'undefined') return null;

    const browserLang = navigator.language || (navigator as any).userLanguage;
    const langCode = browserLang.split('-')[0].toLowerCase();

    // Map to supported locale; default to 'en' if unsupported
    if (locales.includes(langCode)) {
      return langCode;
    }

    return 'en';
  };

  const switchToLocale = useCallback(
    (locale: string) => {
      const query = searchParams?.toString?.() ?? '';
      const href = query ? `${pathname}?${query}` : pathname;
      router.replace(href, { locale });
      cacheSet(PREFERRED_LOCALE_KEY, locale);
    },
    [router, pathname, searchParams]
  );

  useEffect(() => {
    // Only run once
    if (hasCheckedRef.current) {
      return;
    }
    hasCheckedRef.current = true;

    // If user has previously set a locale preference, use that
    const preferredLocale = cacheGet(PREFERRED_LOCALE_KEY);
    if (
      preferredLocale &&
      preferredLocale !== currentLocale &&
      locales.includes(preferredLocale)
    ) {
      switchToLocale(preferredLocale);
      return;
    }

    // If user already has a preference matching current locale, do nothing
    if (preferredLocale === currentLocale) {
      return;
    }

    // Auto-detect and switch based on browser language
    const detectedLocale = detectBrowserLocale();
    if (detectedLocale && detectedLocale !== currentLocale) {
      switchToLocale(detectedLocale);
    } else if (detectedLocale) {
      // Store current locale as preference to avoid re-detection
      cacheSet(PREFERRED_LOCALE_KEY, currentLocale);
    }
  }, [currentLocale, switchToLocale]);

  // No UI to render - auto-switch happens silently
  return null;
}
