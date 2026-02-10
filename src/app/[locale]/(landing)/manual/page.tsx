import type { Metadata } from 'next';

import { setRequestLocale } from 'next-intl/server';

import { manualData } from '@/shared/data/manual-data';
import { ManualPage } from '@/shared/blocks/manual/manual-page';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isZh = locale === 'zh';
  const title = isZh
    ? '即梦 Seedance 2.0 使用手册 - 多模态视频创作指南'
    : 'Seedance 2.0 User Manual - Multimodal Video Creation Guide';
  const description = isZh
    ? '即梦 Seedance 2.0 官方使用手册，涵盖多模态输入、@参考系统、运镜复刻、创意模版、视频延长、音乐卡点等完整功能教程与案例。'
    : 'Official Seedance 2.0 user manual covering multimodal input, @reference system, camera replication, creative templates, video extension, music sync and more.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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

  const title =
    locale === 'zh'
      ? '即梦 Seedance 2.0 使用手册'
      : 'Seedance 2.0 User Manual';

  const description =
    locale === 'zh'
      ? '涵盖多模态输入、@参考系统、运镜复刻、创意模版、视频延长、音乐卡点等功能。'
      : 'Multimodal input, @reference system, camera replication, creative templates, video extension, and more.';

  return (
    <ManualPage
      data={manualData}
      title={title}
      description={description}
    />
  );
}
