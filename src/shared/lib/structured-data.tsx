import { envConfigs } from '@/config';

const appUrl = envConfigs.app_url;
const appName = envConfigs.app_name;
const appDescription = envConfigs.app_description;
const appLogo = envConfigs.app_logo;

// JSON-LD script tag wrapper
export function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization schema
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: appName,
        url: appUrl,
        logo: `${appUrl}${appLogo}`,
        sameAs: [],
      }}
    />
  );
}

// WebSite schema with SearchAction
export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: appName,
        url: appUrl,
        description: appDescription,
        publisher: {
          '@type': 'Organization',
          name: appName,
          logo: {
            '@type': 'ImageObject',
            url: `${appUrl}${appLogo}`,
          },
        },
      }}
    />
  );
}

// SoftwareApplication schema
export function SoftwareApplicationJsonLd({
  name,
  description,
  applicationCategory = 'MultimediaApplication',
  operatingSystem = 'Web',
  offers,
}: {
  name?: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: { price: string; priceCurrency: string }[];
} = {}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: name || appName,
        description: description || appDescription,
        applicationCategory,
        operatingSystem,
        url: appUrl,
        offers: offers || [
          {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: 'Free tier available',
          },
        ],
      }}
    />
  );
}

// FAQPage schema
export function FAQPageJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  if (!questions || questions.length === 0) return null;

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }}
    />
  );
}

// BlogPosting schema
export function BlogPostingJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  authorImage,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorImage?: string;
  image?: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        url: url.startsWith('http') ? url : `${appUrl}${url}`,
        datePublished: datePublished || new Date().toISOString(),
        dateModified: dateModified || datePublished || new Date().toISOString(),
        author: {
          '@type': 'Person',
          name: authorName || appName,
          ...(authorImage ? { image: authorImage } : {}),
        },
        publisher: {
          '@type': 'Organization',
          name: appName,
          logo: {
            '@type': 'ImageObject',
            url: `${appUrl}${appLogo}`,
          },
        },
        image: image || `${appUrl}${envConfigs.app_preview_image}`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url.startsWith('http') ? url : `${appUrl}${url}`,
        },
      }}
    />
  );
}

// BreadcrumbList schema
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${appUrl}${item.url}`,
        })),
      }}
    />
  );
}
