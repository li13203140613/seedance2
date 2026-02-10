import { setRequestLocale } from 'next-intl/server';

import { manualData } from '@/shared/data/manual-data';
import { ManualPage } from '@/shared/blocks/manual/manual-page';

export const revalidate = 3600;

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
