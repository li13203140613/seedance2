import { MetadataRoute } from 'next';

import { envConfigs } from '@/config';
import { locales, defaultLocale } from '@/config/locale';
import { postsSource } from '@/core/docs/source';
import { getPosts, PostType, PostStatus } from '@/shared/models/post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appUrl = envConfigs.app_url;
  const now = new Date().toISOString();

  // Static pages with their priorities and change frequencies
  const staticPages = [
    { path: '/', changeFrequency: 'daily' as const, priority: 1.0 },
    { path: '/blog', changeFrequency: 'daily' as const, priority: 0.9 },
    { path: '/pricing', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/showcases', changeFrequency: 'weekly' as const, priority: 0.8 },
    { path: '/updates', changeFrequency: 'weekly' as const, priority: 0.7 },
    {
      path: '/ai-video-generator',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/ai-image-generator',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      path: '/ai-music-generator',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Generate entries for all static pages with locale alternates
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${appUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [
          locale,
          `${appUrl}${locale === defaultLocale ? '' : `/${locale}`}${page.path}`,
        ])
      ),
    },
  }));

  // Blog posts from local MDX files
  const localPostEntries: MetadataRoute.Sitemap = [];
  try {
    const localPosts = postsSource.getPages('en');
    for (const post of localPosts) {
      const slug = post.url.replace('/blog/', '');
      localPostEntries.push({
        url: `${appUrl}/blog/${slug}`,
        lastModified: (post.data as any).created_at || now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((locale) => [
              locale,
              `${appUrl}${locale === defaultLocale ? '' : `/${locale}`}/blog/${slug}`,
            ])
          ),
        },
      });
    }
  } catch (e) {
    console.log('sitemap: failed to get local posts:', e);
  }

  // Blog posts from database
  const dbPostEntries: MetadataRoute.Sitemap = [];
  try {
    const dbPosts = await getPosts({
      type: PostType.ARTICLE,
      status: PostStatus.PUBLISHED,
      limit: 1000,
    });
    for (const post of dbPosts) {
      // Skip if already in local posts
      if (localPostEntries.some((entry) => entry.url.endsWith(`/blog/${post.slug}`))) {
        continue;
      }
      dbPostEntries.push({
        url: `${appUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt?.toISOString() || post.createdAt?.toISOString() || now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((locale) => [
              locale,
              `${appUrl}${locale === defaultLocale ? '' : `/${locale}`}/blog/${post.slug}`,
            ])
          ),
        },
      });
    }
  } catch (e) {
    console.log('sitemap: failed to get database posts:', e);
  }

  return [...staticEntries, ...localPostEntries, ...dbPostEntries];
}
