import type { ReactNode } from 'react';
import type { Translations } from 'fumadocs-ui/i18n';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { RootProvider } from 'fumadocs-ui/provider';

import { source } from '@/core/docs/source';

import { baseOptions } from './layout.config';

import '@/config/style/docs.css';

const zh: Partial<Translations> = {
  search: '搜索内容',
};
const ja: Partial<Translations> = {
  search: '検索',
};
const es: Partial<Translations> = {
  search: 'Buscar',
};
const ru: Partial<Translations> = {
  search: 'Поиск',
};
const pt: Partial<Translations> = {
  search: 'Pesquisar',
};
const ko: Partial<Translations> = {
  search: '검색',
};
const de: Partial<Translations> = {
  search: 'Suchen',
};
const fr: Partial<Translations> = {
  search: 'Rechercher',
};
const tr: Partial<Translations> = {
  search: 'Ara',
};
const id: Partial<Translations> = {
  search: 'Cari',
};
// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: '简体中文',
    locale: 'zh',
  },
  {
    name: '日本語',
    locale: 'ja',
  },
  {
    name: 'Español',
    locale: 'es',
  },
  {
    name: 'Русский',
    locale: 'ru',
  },
  {
    name: 'Português',
    locale: 'pt',
  },
  {
    name: '한국어',
    locale: 'ko',
  },
  {
    name: 'Deutsch',
    locale: 'de',
  },
  {
    name: 'Français',
    locale: 'fr',
  },
  {
    name: 'Türkçe',
    locale: 'tr',
  },
  {
    name: 'Bahasa Indonesia',
    locale: 'id',
  },
];

export default async function DocsRootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params;
  const lang = locale || 'en';

  return (
    <RootProvider
      i18n={{
        locale: lang,
        locales,
        translations: { zh, ja, es, ru, pt, ko, de, fr, tr, id }[lang],
      }}
      search={{
        options: {
          api: '/api/docs/search',
        },
      }}
    >
      <DocsLayout
        {...baseOptions(lang)}
        tree={source.pageTree[lang]}
        nav={{ ...baseOptions(lang).nav, mode: 'top' }}
        sidebar={{
          tabs: [],
        }}
        tabMode="sidebar"
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
