import { getTranslations, setRequestLocale } from 'next-intl/server';

import { getThemePage } from '@/core/theme';
import { getCurrentSubscription } from '@/shared/models/subscription';
import { getUserInfo } from '@/shared/models/user';
import {
  FAQPageJsonLd,
  OrganizationJsonLd,
  SoftwareApplicationJsonLd,
  WebSiteJsonLd,
} from '@/shared/lib/structured-data';
import { DynamicPage } from '@/shared/types/blocks/landing';

export const revalidate = 3600;

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // get index page data
  const t = await getTranslations('pages.index');
  const page: DynamicPage = t.raw('page');

  // get pricing data
  const pricingT = await getTranslations('pages.pricing');

  // get current subscription for pricing
  let currentSubscription;
  try {
    const user = await getUserInfo();
    if (user) {
      currentSubscription = await getCurrentSubscription(user.id);
    }
  } catch (error) {
    console.log('getting current subscription failed:', error);
  }

  // merge pricing section data
  page.sections = {
    ...page.sections,
    pricing: {
      ...pricingT.raw('page.sections.pricing'),
      data: {
        currentSubscription,
      },
    },
  };

  // extract FAQ items for structured data
  const faqItems = (page.sections?.faq?.items || []) as { question: string; answer: string }[];

  // load page component
  const Page = await getThemePage('dynamic-page');

  return (
    <>
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <SoftwareApplicationJsonLd />
      {faqItems.length > 0 && <FAQPageJsonLd questions={faqItems} />}
      <Page locale={locale} page={page} />
    </>
  );
}
