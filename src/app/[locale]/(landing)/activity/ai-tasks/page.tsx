import { getTranslations } from 'next-intl/server';

import { AITaskStatus } from '@/extensions/ai';
import { AudioPlayer, Empty, LazyImage } from '@/shared/blocks/common';
import { TableCard } from '@/shared/blocks/table';
import { AITask, getAITasks, getAITasksCount } from '@/shared/models/ai_task';
import { getUserInfo } from '@/shared/models/user';
import { Button, Tab } from '@/shared/types/blocks/common';
import { type Table } from '@/shared/types/blocks/table';

function safeParseJson(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function normalizeVideoUrl(value: any): string | null {
  if (!value) {
    return null;
  }

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'object') {
    const candidate =
      value.videoUrl ?? value.url ?? value.uri ?? value.video ?? value.src;
    if (typeof candidate === 'string') {
      return candidate;
    }
  }

  return null;
}

function collectVideoUrls(value: any): string[] {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => normalizeVideoUrl(item))
      .filter((url): url is string => Boolean(url));
  }

  const url = normalizeVideoUrl(value);
  return url ? [url] : [];
}

function extractVideoUrls(taskInfo: any, taskResult: any): string[] {
  const urlsFromTaskInfo = collectVideoUrls(taskInfo?.videos);
  const urlsFromTaskResult = [
    ...collectVideoUrls(taskResult?.videos),
    ...collectVideoUrls(taskResult?.results),
    ...collectVideoUrls(taskResult?.output),
    ...collectVideoUrls(taskResult?.video),
    ...collectVideoUrls(taskResult?.data),
  ];

  // taskInfo is normalized by provider adapters. Prefer it to avoid duplicate
  // entries coming from raw taskResult payloads.
  const sourceUrls =
    urlsFromTaskInfo.length > 0 ? urlsFromTaskInfo : urlsFromTaskResult;

  const dedupedMap = new Map<string, string>();
  for (const rawUrl of sourceUrls) {
    const normalizedKey = rawUrl
      .replace(/[#?].*$/, '')
      .replace(/\/+$/, '')
      .toLowerCase();
    if (!dedupedMap.has(normalizedKey)) {
      dedupedMap.set(normalizedKey, rawUrl);
    }
  }

  return Array.from(dedupedMap.values());
}

export default async function AiTasksPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: number; pageSize?: number; type?: string }>;
}) {
  const { page: pageNum, pageSize, type } = await searchParams;
  const page = pageNum || 1;
  const limit = pageSize || 20;

  const user = await getUserInfo();
  if (!user) {
    return <Empty message="no auth" />;
  }

  const t = await getTranslations('activity.ai-tasks');

  const aiTasks = await getAITasks({
    userId: user.id,
    mediaType: type,
    page,
    limit,
  });

  const total = await getAITasksCount({
    userId: user.id,
    mediaType: type,
  });

  const table: Table = {
    title: t('list.title'),
    columns: [
      { name: 'prompt', title: t('fields.prompt'), type: 'copy' },
      { name: 'mediaType', title: t('fields.media_type'), type: 'label' },
      { name: 'model', title: t('fields.model'), type: 'label' },
      // { name: 'options', title: t('fields.options'), type: 'copy' },
      { name: 'status', title: t('fields.status'), type: 'label' },
      { name: 'costCredits', title: t('fields.cost_credits'), type: 'label' },
      {
        name: 'result',
        title: t('fields.result'),
        callback: (item: AITask) => {
          const taskInfo = safeParseJson(item.taskInfo);
          const taskResult = safeParseJson(item.taskResult);

          if (taskInfo?.errorMessage) {
            return (
              <div className="text-red-500">Failed: {taskInfo.errorMessage}</div>
            );
          }

          if (taskInfo?.songs?.length > 0) {
            const songs: any[] = taskInfo.songs.filter(
              (song: any) => song.audioUrl
            );

            if (songs.length > 0) {
              return (
                <div className="flex flex-col gap-2">
                  {songs.map((song: any) => (
                    <AudioPlayer
                      key={song.id}
                      src={song.audioUrl}
                      title={song.title}
                      className="w-80"
                    />
                  ))}
                </div>
              );
            }
          }

          if (taskInfo?.images?.length > 0) {
            return (
              <div className="flex flex-col gap-2">
                {taskInfo.images.map((image: any, index: number) => (
                  <LazyImage
                    key={index}
                    src={image.imageUrl}
                    alt="Generated image"
                    className="h-32 w-auto"
                  />
                ))}
              </div>
            );
          }

          const videoUrls = extractVideoUrls(taskInfo, taskResult);
          const displayVideoUrls = videoUrls.slice(0, 1);
          if (displayVideoUrls.length > 0) {
            return (
              <div className="flex flex-col gap-3">
                {displayVideoUrls.map((videoUrl, index) => {
                  const proxyUrl = `/api/proxy/file?url=${encodeURIComponent(videoUrl)}`;
                  return (
                    <div
                      key={`${item.id}-video-${index}`}
                      className="flex flex-col gap-1"
                    >
                      <video
                        src={videoUrl}
                        controls
                        preload="metadata"
                        className="h-24 w-44 rounded-md border bg-black"
                      />
                      <div className="flex items-center gap-3 text-xs">
                        <a
                          href={videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline-offset-2 hover:underline"
                        >
                          Open
                        </a>
                        <a
                          href={proxyUrl}
                          download
                          className="text-primary underline-offset-2 hover:underline"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }

          return '-';
        },
      },
      { name: 'createdAt', title: t('fields.created_at'), type: 'time' },
      {
        name: 'action',
        title: t('fields.action'),
        type: 'dropdown',
        callback: (item: AITask) => {
          const items: Button[] = [];

          if (
            item.status === AITaskStatus.PENDING ||
            item.status === AITaskStatus.PROCESSING
          ) {
            items.push({
              title: t('list.buttons.refresh'),
              url: `/activity/ai-tasks/${item.id}/refresh`,
              icon: 'RiRefreshLine',
            });
          }

          return items;
        },
      },
    ],
    data: aiTasks,
    emptyMessage: t('list.empty_message'),
    pagination: {
      total,
      page,
      limit,
    },
  };

  const tabs: Tab[] = [
    {
      name: 'all',
      title: t('list.tabs.all'),
      url: '/activity/ai-tasks',
      is_active: !type || type === 'all',
    },
    {
      name: 'music',
      title: t('list.tabs.music'),
      url: '/activity/ai-tasks?type=music',
      is_active: type === 'music',
    },
    {
      name: 'image',
      title: t('list.tabs.image'),
      url: '/activity/ai-tasks?type=image',
      is_active: type === 'image',
    },
    {
      name: 'video',
      title: t('list.tabs.video'),
      url: '/activity/ai-tasks?type=video',
      is_active: type === 'video',
    },
    {
      name: 'audio',
      title: t('list.tabs.audio'),
      url: '/activity/ai-tasks?type=audio',
      is_active: type === 'audio',
    },
    {
      name: 'text',
      title: t('list.tabs.text'),
      url: '/activity/ai-tasks?type=text',
      is_active: type === 'text',
    },
  ];

  return (
    <div className="space-y-8">
      <TableCard title={t('list.title')} tabs={tabs} table={table} />
    </div>
  );
}
