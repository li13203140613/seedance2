'use client';

import { useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/core/i18n/navigation';
import { envConfigs } from '@/config';
import { locales } from '@/config/locale';

const MANUAL_LOCALE_KEY = 'locale';
const AUTO_LOCALE_KEY = 'locale-auto';

function detectBrowserLocale(): string | null {
  if (typeof window === 'undefined') return null;

  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (!browserLang) return null;

  const langCode = browserLang.split('-')[0].toLowerCase();

  // Match browser language to supported locales (e.g. zh-CN → zh, en-US → en, ja-JP → ja)
  if (locales.includes(langCode)) return langCode;

  return null;
}

export function LocaleDetector() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const hasCheckedRef = useRef(false);

  useEffect(() => {
    if (envConfigs.locale_detect_enabled !== 'true') return;
    if (hasCheckedRef.current) return;
    hasCheckedRef.current = true;

    // If user explicitly chose a locale via locale selector, respect that
    const isManualChoice = localStorage.getItem('locale-manual');
    const savedLocale = localStorage.getItem(MANUAL_LOCALE_KEY);
    if (isManualChoice && savedLocale && locales.includes(savedLocale)) {
      if (savedLocale !== currentLocale) {
        router.replace(pathname, { locale: savedLocale });
      }
      return;
    }

    // Auto-detect browser locale
    const detectedLocale = detectBrowserLocale();
    if (detectedLocale && detectedLocale !== currentLocale) {
      localStorage.setItem(AUTO_LOCALE_KEY, detectedLocale);
      router.replace(pathname, { locale: detectedLocale });
    }
  }, [currentLocale, router, pathname]);

  return null;
}
