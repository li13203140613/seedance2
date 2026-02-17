import type { Metadata } from 'next';

import { setRequestLocale } from 'next-intl/server';

import { getManualData } from '@/shared/data/manual-data-index';
import { ManualPage } from '@/shared/blocks/manual/manual-page';

export const revalidate = 3600;

const metaMap: Record<string, { title: string; description: string; pageTitle: string; pageDesc: string }> = {
  zh: {
    title: '即梦 Seedance 2.0 使用手册 - 多模态视频创作指南',
    description: '即梦 Seedance 2.0 官方使用手册，涵盖多模态输入、@参考系统、运镜复刻、创意模版、视频延长、音乐卡点等完整功能教程与案例。',
    pageTitle: '即梦 Seedance 2.0 使用手册',
    pageDesc: '涵盖多模态输入、@参考系统、运镜复刻、创意模版、视频延长、音乐卡点等功能。',
  },
  en: {
    title: 'Seedance 2.0 User Manual - Multimodal Video Creation Guide',
    description: 'Official Seedance 2.0 user manual covering multimodal input, @reference system, camera replication, creative templates, video extension, music sync and more.',
    pageTitle: 'Seedance 2.0 User Manual',
    pageDesc: 'Multimodal input, @reference system, camera replication, creative templates, video extension, and more.',
  },
  ja: {
    title: 'Seedance 2.0 ユーザーマニュアル - マルチモーダル動画制作ガイド',
    description: 'Seedance 2.0 公式ユーザーマニュアル。マルチモーダル入力、@参照システム、カメラワーク再現、クリエイティブテンプレート、動画延長、音楽同期など。',
    pageTitle: 'Seedance 2.0 ユーザーマニュアル',
    pageDesc: 'マルチモーダル入力、@参照システム、カメラワーク再現、クリエイティブテンプレート、動画延長、音楽同期など。',
  },
  es: {
    title: 'Manual de usuario Seedance 2.0 - Guía de creación de video multimodal',
    description: 'Manual oficial de Seedance 2.0 que cubre entrada multimodal, sistema de @referencia, replicación de cámara, plantillas creativas, extensión de video, sincronización musical y más.',
    pageTitle: 'Manual de usuario Seedance 2.0',
    pageDesc: 'Entrada multimodal, sistema de @referencia, replicación de cámara, plantillas creativas, extensión de video y más.',
  },
  ru: {
    title: 'Руководство Seedance 2.0 - Мультимодальное создание видео',
    description: 'Официальное руководство Seedance 2.0: мультимодальный ввод, система @ссылок, копирование камеры, креативные шаблоны, продление видео, синхронизация музыки и другое.',
    pageTitle: 'Руководство Seedance 2.0',
    pageDesc: 'Мультимодальный ввод, система @ссылок, копирование камеры, креативные шаблоны, продление видео и другое.',
  },
  pt: {
    title: 'Manual do Seedance 2.0 - Guia de criação de vídeo multimodal',
    description: 'Manual oficial do Seedance 2.0 cobrindo entrada multimodal, sistema de @referência, replicação de câmera, templates criativos, extensão de vídeo, sincronização musical e mais.',
    pageTitle: 'Manual do Seedance 2.0',
    pageDesc: 'Entrada multimodal, sistema de @referência, replicação de câmera, templates criativos, extensão de vídeo e mais.',
  },
  ko: {
    title: 'Seedance 2.0 사용 설명서 - 멀티모달 영상 제작 가이드',
    description: 'Seedance 2.0 공식 사용 설명서. 멀티모달 입력, @참조 시스템, 카메라 워크 복제, 크리에이티브 템플릿, 영상 연장, 음악 싱크 등.',
    pageTitle: 'Seedance 2.0 사용 설명서',
    pageDesc: '멀티모달 입력, @참조 시스템, 카메라 워크 복제, 크리에이티브 템플릿, 영상 연장, 음악 싱크 등.',
  },
  de: {
    title: 'Seedance 2.0 Benutzerhandbuch - Multimodale Videoerstellung',
    description: 'Offizielles Seedance 2.0 Benutzerhandbuch: Multimodale Eingabe, @Referenzsystem, Kameraführung, kreative Vorlagen, Videoverlängerung, Musiksynchronisation und mehr.',
    pageTitle: 'Seedance 2.0 Benutzerhandbuch',
    pageDesc: 'Multimodale Eingabe, @Referenzsystem, Kameraführung, kreative Vorlagen, Videoverlängerung und mehr.',
  },
  fr: {
    title: 'Manuel Seedance 2.0 - Guide de création vidéo multimodale',
    description: 'Manuel officiel de Seedance 2.0 couvrant l\'entrée multimodale, le système de @référence, la réplication de caméra, les modèles créatifs, l\'extension vidéo, la synchronisation musicale et plus.',
    pageTitle: 'Manuel Seedance 2.0',
    pageDesc: 'Entrée multimodale, système de @référence, réplication de caméra, modèles créatifs, extension vidéo et plus.',
  },
  tr: {
    title: 'Seedance 2.0 Kullanım Kılavuzu - Çok Modlu Video Oluşturma Rehberi',
    description: 'Seedance 2.0 resmi kullanım kılavuzu: Çok modlu giriş, @referans sistemi, kamera çoğaltma, yaratıcı şablonlar, video uzatma, müzik senkronizasyonu ve daha fazlası.',
    pageTitle: 'Seedance 2.0 Kullanım Kılavuzu',
    pageDesc: 'Çok modlu giriş, @referans sistemi, kamera çoğaltma, yaratıcı şablonlar, video uzatma ve daha fazlası.',
  },
  id: {
    title: 'Panduan Pengguna Seedance 2.0 - Panduan Pembuatan Video Multimodal',
    description: 'Panduan resmi Seedance 2.0 mencakup input multimodal, sistem @referensi, replikasi kamera, template kreatif, perpanjangan video, sinkronisasi musik, dan lainnya.',
    pageTitle: 'Panduan Pengguna Seedance 2.0',
    pageDesc: 'Input multimodal, sistem @referensi, replikasi kamera, template kreatif, perpanjangan video, dan lainnya.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaMap[locale] || metaMap.en;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'article',
    },
  };
}

export default async function ManualRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const data = await getManualData(locale);
  const meta = metaMap[locale] || metaMap.en;

  return (
    <ManualPage
      data={data}
      title={meta.pageTitle}
      description={meta.pageDesc}
    />
  );
}
