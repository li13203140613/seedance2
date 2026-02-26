'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Download,
  Loader2,
  Play,
  Sparkles,
  User,
  Video,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { Link } from '@/core/i18n/navigation';
import { AIMediaType, AITaskStatus } from '@/extensions/ai/types';
import { ImageUploader, ImageUploaderValue } from '@/shared/blocks/common';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { Label } from '@/shared/components/ui/label';
import { Progress } from '@/shared/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select';
import { Switch } from '@/shared/components/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';
import { Textarea } from '@/shared/components/ui/textarea';
import { getVideoCreditCost, displayCredits } from '@/shared/constants/credits';
import { useAppContext } from '@/shared/contexts/app';

interface VideoGeneratorProps {
  maxSizeMB?: number;
  srOnlyTitle?: string;
}

interface GeneratedVideo {
  id: string;
  url: string;
  provider?: string;
  model?: string;
  prompt?: string;
}

interface BackendTask {
  id: string;
  status: string;
  provider: string;
  model: string;
  prompt: string | null;
  taskInfo: string | null;
  taskResult: string | null;
}

interface VideoTask {
  id: string;
  prompt: string;
  status: AITaskStatus;
  progress: number;
  startTime: number;
  videos: GeneratedVideo[];
  errorMessage?: string;
}

type VideoGeneratorTab = 'text-to-video' | 'image-to-video';

const SHOWCASE_VIDEOS = [
  'https://image.agent-skills.cc/uploads/manual/v2_021.mp4',
  'https://image.agent-skills.cc/uploads/manual/video_032.mp4',
];

const POLL_INTERVAL = 15000;
const GENERATION_TIMEOUT = 600000; // 10 minutes for video
const MAX_PROMPT_LENGTH = 2000;
const MAX_CONCURRENT_TASKS = 5;
const MAX_TASK_HISTORY = 20;

// 分辨率配置
const QUALITY_OPTIONS = [
  { value: '480p', label: '480p' },
  { value: '720p', label: '720p' },
  { value: '1080p', label: '1080p' },
];

// 时长配置
const DURATION_OPTIONS = [
  { value: 5, label: '5s' },
  { value: 12, label: '12s' },
];

// 比例配置
const ASPECT_RATIO_OPTIONS = [
  { value: '16:9', label: '16:9' },
  { value: '9:16', label: '9:16' },
  { value: '1:1', label: '1:1' },
];

// 简化的模型选项（首页用）
const SIMPLE_MODEL_OPTIONS = [
  { value: 'seedance-1.5-pro', label: 'Seedance 1.5 Pro', provider: 'evolink', available: true },
  { value: 'seedance-2.0', label: 'Seedance 2.0', provider: 'evolink', available: false },
];

const MODEL_OPTIONS = [
  // Replicate models
  {
    value: 'google/veo-3.1',
    label: 'Veo 3.1',
    provider: 'replicate',
    scenes: ['text-to-video', 'image-to-video'],
  },
  {
    value: 'openai/sora-2',
    label: 'Sora 2',
    provider: 'replicate',
    scenes: ['text-to-video', 'image-to-video'],
  },
  // Fal models
  {
    value: 'fal-ai/veo3',
    label: 'Veo 3',
    provider: 'fal',
    scenes: ['text-to-video'],
  },
  {
    value: 'fal-ai/wan-pro/image-to-video',
    label: 'Wan Pro',
    provider: 'fal',
    scenes: ['image-to-video'],
  },
  {
    value: 'fal-ai/kling-video/o1/video-to-video/edit',
    label: 'Kling Video O1',
    provider: 'fal',
    scenes: ['video-to-video'],
  },
  // Kie models
  {
    value: 'sora-2-pro-image-to-video',
    label: 'Sora 2 Pro',
    provider: 'kie',
    scenes: ['image-to-video'],
  },
  {
    value: 'sora-2-pro-text-to-video',
    label: 'Sora 2 Pro',
    provider: 'kie',
    scenes: ['text-to-video'],
  },
  // EvoLink models
  {
    value: 'seedance-1.5-pro',
    label: 'Seedance 1.5 Pro',
    provider: 'evolink',
    scenes: ['text-to-video', 'image-to-video'],
  },
];

const PROVIDER_OPTIONS = [
  {
    value: 'replicate',
    label: 'Replicate',
  },
  {
    value: 'fal',
    label: 'Fal',
  },
  {
    value: 'kie',
    label: 'Kie',
  },
  {
    value: 'evolink',
    label: 'EvoLink',
  },
];

function parseTaskResult(taskResult: string | null): any {
  if (!taskResult) {
    return null;
  }

  try {
    return JSON.parse(taskResult);
  } catch (error) {
    console.warn('Failed to parse taskResult:', error);
    return null;
  }
}

function extractVideoUrls(result: any): string[] {
  if (!result) {
    return [];
  }

  // check videos array first
  const videos = result.videos;
  if (videos && Array.isArray(videos)) {
    return videos
      .map((item: any) => {
        if (!item) return null;
        if (typeof item === 'string') return item;
        if (typeof item === 'object') {
          return (
            item.url ?? item.uri ?? item.video ?? item.src ?? item.videoUrl
          );
        }
        return null;
      })
      .filter(Boolean);
  }

  // check output
  const output = result.output ?? result.video ?? result.data;

  if (!output) {
    return [];
  }

  if (typeof output === 'string') {
    return [output];
  }

  if (Array.isArray(output)) {
    return output
      .flatMap((item) => {
        if (!item) return [];
        if (typeof item === 'string') return [item];
        if (typeof item === 'object') {
          const candidate =
            item.url ?? item.uri ?? item.video ?? item.src ?? item.videoUrl;
          return typeof candidate === 'string' ? [candidate] : [];
        }
        return [];
      })
      .filter(Boolean);
  }

  if (typeof output === 'object') {
    const candidate =
      output.url ?? output.uri ?? output.video ?? output.src ?? output.videoUrl;
    if (typeof candidate === 'string') {
      return [candidate];
    }
  }

  return [];
}

export function VideoGenerator({
  maxSizeMB = 50,
  srOnlyTitle,
}: VideoGeneratorProps) {
  const t = useTranslations('ai.video.generator');
  const locale = useLocale();

  const [activeTab, setActiveTab] =
    useState<VideoGeneratorTab>('text-to-video');

  const [costCredits, setCostCredits] = useState<number>(() =>
    getVideoCreditCost('480p', 5, true)
  );
  const [provider, setProvider] = useState('evolink');
  const [model, setModel] = useState('seedance-1.5-pro');

  // 参数状态
  const [quality, setQuality] = useState('480p');
  const [duration, setDuration] = useState(5);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [generateAudio, setGenerateAudio] = useState(true);
  const [prompt, setPrompt] = useState('');
  const [referenceImageItems, setReferenceImageItems] = useState<
    ImageUploaderValue[]
  >([]);
  const [referenceImageUrls, setReferenceImageUrls] = useState<string[]>([]);
  const [referenceVideoUrl, setReferenceVideoUrl] = useState<string>('');

  // 多任务状态
  const [tasks, setTasks] = useState<VideoTask[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<GeneratedVideo | null>(null);

  const [downloadingVideoId, setDownloadingVideoId] = useState<string | null>(
    null
  );
  const [isMounted, setIsMounted] = useState(false);
  const [showcaseIndex, setShowcaseIndex] = useState(0);

  const { user, isCheckSign, setIsShowSignModal, fetchUserCredits } =
    useAppContext();

  // Refs for stable access in callbacks
  const tasksRef = useRef(tasks);
  tasksRef.current = tasks;
  const fetchUserCreditsRef = useRef(fetchUserCredits);
  fetchUserCreditsRef.current = fetchUserCredits;

  // 派生值
  const activeTasks = useMemo(
    () =>
      tasks.filter(
        (t) =>
          t.status === AITaskStatus.PENDING ||
          t.status === AITaskStatus.PROCESSING
      ),
    [tasks]
  );

  const allCompletedVideos = useMemo(
    () =>
      tasks
        .filter((t) => t.status === AITaskStatus.SUCCESS)
        .flatMap((t) => t.videos),
    [tasks]
  );

  const hasActiveTasks = activeTasks.length > 0;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 根据分辨率、时长、音频计算积分
  useEffect(() => {
    const credits = getVideoCreditCost(quality, duration, generateAudio);
    setCostCredits(credits);
  }, [quality, duration, generateAudio]);

  // 首个视频完成时自动选中
  useEffect(() => {
    if (selectedVideo) return;
    const completedVideos = tasks
      .filter((t) => t.status === AITaskStatus.SUCCESS)
      .flatMap((t) => t.videos);
    if (completedVideos.length > 0) {
      setSelectedVideo(completedVideos[0]);
    }
  }, [tasks, selectedVideo]);

  const promptLength = prompt.trim().length;
  const remainingCredits = user?.credits?.remainingCredits ?? 0;
  const isPromptTooLong = promptLength > MAX_PROMPT_LENGTH;
  const isTextToVideoMode = activeTab === 'text-to-video';
  const isImageToVideoMode = activeTab === 'image-to-video';

  const handleTabChange = (value: string) => {
    const tab = value as VideoGeneratorTab;
    setActiveTab(tab);

    const availableModels = MODEL_OPTIONS.filter(
      (option) => option.scenes.includes(tab) && option.provider === provider
    );

    if (availableModels.length > 0) {
      setModel(availableModels[0].value);
    } else {
      setModel('');
    }
  };

  const handleProviderChange = (value: string) => {
    setProvider(value);

    const availableModels = MODEL_OPTIONS.filter(
      (option) => option.scenes.includes(activeTab) && option.provider === value
    );

    if (availableModels.length > 0) {
      setModel(availableModels[0].value);
    } else {
      setModel('');
    }
  };

  const handleReferenceImagesChange = useCallback(
    (items: ImageUploaderValue[]) => {
      setReferenceImageItems(items);
      const uploadedUrls = items
        .filter((item) => item.status === 'uploaded' && item.url)
        .map((item) => item.url as string);
      setReferenceImageUrls(uploadedUrls);
    },
    []
  );

  const isReferenceUploading = useMemo(
    () => referenceImageItems.some((item) => item.status === 'uploading'),
    [referenceImageItems]
  );

  const hasReferenceUploadError = useMemo(
    () => referenceImageItems.some((item) => item.status === 'error'),
    [referenceImageItems]
  );

  // 轮询单个任务状态
  const pollSingleTask = useCallback(async (taskId: string) => {
    const currentTasks = tasksRef.current;
    const task = currentTasks.find((t) => t.id === taskId);
    if (!task) return;

    // 超时检测
    if (Date.now() - task.startTime > GENERATION_TIMEOUT) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId
            ? { ...t, status: AITaskStatus.FAILED, errorMessage: 'Timed out' }
            : t
        )
      );
      toast.error('Video generation timed out. Please try again.');
      return;
    }

    try {
      const resp = await fetch('/api/ai/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId }),
      });

      if (!resp.ok) {
        throw new Error(`request failed with status: ${resp.status}`);
      }

      const { code, message, data } = await resp.json();
      if (code !== 0) {
        throw new Error(message || 'Query task failed');
      }

      const backendTask = data as BackendTask;
      const currentStatus = backendTask.status as AITaskStatus;
      const parsedResult = parseTaskResult(backendTask.taskInfo);
      const videoUrls = extractVideoUrls(parsedResult);

      setTasks((prev) =>
        prev.map((t) => {
          if (t.id !== taskId) return t;

          if (currentStatus === AITaskStatus.PENDING) {
            return {
              ...t,
              status: currentStatus,
              progress: Math.max(t.progress, 20),
            };
          }

          if (currentStatus === AITaskStatus.PROCESSING) {
            const videos =
              videoUrls.length > 0
                ? videoUrls.map((url, i) => ({
                    id: `${taskId}-${i}`,
                    url,
                    provider: backendTask.provider,
                    model: backendTask.model,
                    prompt: backendTask.prompt ?? undefined,
                  }))
                : t.videos;
            const progress =
              videoUrls.length > 0
                ? Math.max(t.progress, 85)
                : Math.min(t.progress + 5, 80);
            return { ...t, status: currentStatus, progress, videos };
          }

          if (currentStatus === AITaskStatus.SUCCESS) {
            const videos =
              videoUrls.length > 0
                ? videoUrls.map((url, i) => ({
                    id: `${taskId}-${i}`,
                    url,
                    provider: backendTask.provider,
                    model: backendTask.model,
                    prompt: backendTask.prompt ?? undefined,
                  }))
                : t.videos;
            return { ...t, status: currentStatus, progress: 100, videos };
          }

          if (currentStatus === AITaskStatus.FAILED) {
            const errorMsg =
              parsedResult?.errorMessage || 'Generate video failed';
            return { ...t, status: currentStatus, errorMessage: errorMsg };
          }

          return { ...t, progress: Math.min(t.progress + 3, 95) };
        })
      );

      if (currentStatus === AITaskStatus.SUCCESS) {
        if (videoUrls.length > 0) {
          toast.success('Video generated successfully');
        } else {
          toast.error('The provider returned no videos. Please retry.');
        }
        fetchUserCreditsRef.current();
      }

      if (currentStatus === AITaskStatus.FAILED) {
        const errorMsg = parsedResult?.errorMessage || 'Generate video failed';
        toast.error(errorMsg);
        fetchUserCreditsRef.current();
      }
    } catch (error: any) {
      console.error('Error polling video task:', error);
      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId
            ? {
                ...t,
                status: AITaskStatus.FAILED,
                errorMessage: error.message,
              }
            : t
        )
      );
      toast.error(`Query task failed: ${error.message}`);
      fetchUserCreditsRef.current();
    }
  }, []);

  // 多任务轮询 effect
  useEffect(() => {
    if (!hasActiveTasks) return;

    let cancelled = false;

    const pollAll = async () => {
      if (cancelled) return;
      const currentTasks = tasksRef.current;
      const activeIds = currentTasks
        .filter(
          (t) =>
            t.status === AITaskStatus.PENDING ||
            t.status === AITaskStatus.PROCESSING
        )
        .map((t) => t.id);

      for (const id of activeIds) {
        if (cancelled) break;
        await pollSingleTask(id);
      }
    };

    pollAll();
    const interval = setInterval(pollAll, POLL_INTERVAL);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [hasActiveTasks, pollSingleTask]);

  const handleGenerate = async () => {
    if (!user) {
      setIsShowSignModal(true);
      return;
    }

    // 并发任务数限制
    const currentActiveTasks = tasks.filter(
      (t) =>
        t.status === AITaskStatus.PENDING ||
        t.status === AITaskStatus.PROCESSING
    );
    if (currentActiveTasks.length >= MAX_CONCURRENT_TASKS) {
      toast.error(t('max_concurrent_tasks'));
      return;
    }

    if (remainingCredits < costCredits) {
      toast.error('Insufficient credits. Please top up to keep creating.');
      return;
    }

    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt && isTextToVideoMode) {
      toast.error('Please enter a prompt before generating.');
      return;
    }

    if (!provider || !model) {
      toast.error('Provider or model is not configured correctly.');
      return;
    }

    if (isImageToVideoMode && referenceImageUrls.length === 0) {
      toast.error('Please upload a reference image before generating.');
      return;
    }

    setIsSubmitting(true);

    try {
      const options: any = {
        duration: duration,
        aspect_ratio: aspectRatio,
        quality: quality,
        generate_audio: generateAudio,
      };

      if (isImageToVideoMode) {
        options.image_input = referenceImageUrls;
      }

      const resp = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mediaType: AIMediaType.VIDEO,
          scene: activeTab,
          provider,
          model,
          prompt: trimmedPrompt,
          options,
        }),
      });

      if (!resp.ok) {
        throw new Error(`request failed with status: ${resp.status}`);
      }

      const { code, message, data } = await resp.json();
      if (code !== 0) {
        throw new Error(message || 'Failed to create a video task');
      }

      const newTaskId = data?.id;
      if (!newTaskId) {
        throw new Error('Task id missing in response');
      }

      // 同步返回结果的情况（provider 直接返回）
      if (data.status === AITaskStatus.SUCCESS && data.taskInfo) {
        const parsedResult = parseTaskResult(data.taskInfo);
        const videoUrls = extractVideoUrls(parsedResult);

        if (videoUrls.length > 0) {
          const videos = videoUrls.map((url, index) => ({
            id: `${newTaskId}-${index}`,
            url,
            provider,
            model,
            prompt: trimmedPrompt,
          }));
          const newTask: VideoTask = {
            id: newTaskId,
            prompt: trimmedPrompt,
            status: AITaskStatus.SUCCESS,
            progress: 100,
            startTime: Date.now(),
            videos,
          };
          setTasks((prev) => [newTask, ...prev].slice(0, MAX_TASK_HISTORY));
          toast.success('Video generated successfully');
          await fetchUserCredits();
          return;
        }
      }

      // 异步任务，添加到任务列表进行轮询
      const newTask: VideoTask = {
        id: newTaskId,
        prompt: trimmedPrompt,
        status: AITaskStatus.PENDING,
        progress: 15,
        startTime: Date.now(),
        videos: [],
      };
      setTasks((prev) => [newTask, ...prev].slice(0, MAX_TASK_HISTORY));

      await fetchUserCredits();
    } catch (error: any) {
      console.error('Failed to generate video:', error);
      toast.error(`Failed to generate video: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadVideo = async (video: GeneratedVideo) => {
    if (!video.url) {
      return;
    }

    try {
      setDownloadingVideoId(video.id);
      // fetch video via proxy
      const resp = await fetch(
        `/api/proxy/file?url=${encodeURIComponent(video.url)}`
      );
      if (!resp.ok) {
        throw new Error('Failed to fetch video');
      }

      const blob = await resp.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${video.id}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 200);
      toast.success('Video downloaded');
    } catch (error) {
      console.error('Failed to download video:', error);
      toast.error('Failed to download video');
    } finally {
      setDownloadingVideoId(null);
    }
  };

  return (
    <section id="video-generator" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Card>
              <CardHeader>
                {srOnlyTitle && <h2 className="sr-only">{srOnlyTitle}</h2>}
                <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                  {t('title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pb-8">
                <Tabs value={activeTab} onValueChange={handleTabChange}>
                  <TabsList className="bg-primary/10 grid w-full grid-cols-2">
                    <TabsTrigger value="text-to-video">
                      {t('tabs.text-to-video')}
                    </TabsTrigger>
                    <TabsTrigger value="image-to-video">
                      {t('tabs.image-to-video')}
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                {/* 参数选项：模型、分辨率、时长、比例 */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* 模型选择 */}
                  <div className="w-40">
                    <Select value={model} onValueChange={setModel}>
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue placeholder={t('form.select_model')} />
                      </SelectTrigger>
                      <SelectContent>
                        {SIMPLE_MODEL_OPTIONS.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            disabled={!option.available}
                          >
                            {option.label}
                            {!option.available && (locale === 'zh' ? ' (即将上线)' : ' (Coming Soon)')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 分辨率选择 */}
                  <div className="w-24">
                    <Select value={quality} onValueChange={setQuality}>
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {QUALITY_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 时长选择 */}
                  <div className="w-24">
                    <Select
                      value={String(duration)}
                      onValueChange={(v) => setDuration(Number(v))}
                    >
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {DURATION_OPTIONS.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={String(option.value)}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 比例选择 */}
                  <div className="w-24">
                    <Select value={aspectRatio} onValueChange={setAspectRatio}>
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {ASPECT_RATIO_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 音频开关 */}
                  <div className="flex items-center gap-2">
                    <Switch
                      id="generate-audio"
                      checked={generateAudio}
                      onCheckedChange={setGenerateAudio}
                    />
                    <Label htmlFor="generate-audio" className="text-sm cursor-pointer">
                      {t('form.audio')}
                    </Label>
                  </div>
                </div>

                {isImageToVideoMode && (
                  <div className="space-y-4">
                    <ImageUploader
                      title={t('form.reference_image')}
                      allowMultiple={true}
                      maxImages={3}
                      maxSizeMB={maxSizeMB}
                      onChange={handleReferenceImagesChange}
                      emptyHint={t('form.reference_image_placeholder')}
                    />

                    {hasReferenceUploadError && (
                      <p className="text-destructive text-xs">
                        {t('form.some_images_failed_to_upload')}
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="video-prompt">{t('form.prompt')}</Label>
                  <Textarea
                    id="video-prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={t('form.prompt_placeholder')}
                    className="min-h-32"
                  />
                  <div className="text-muted-foreground flex items-center justify-between text-xs">
                    <span>
                      {promptLength} / {MAX_PROMPT_LENGTH}
                    </span>
                    {isPromptTooLong && (
                      <span className="text-destructive">
                        {t('form.prompt_too_long')}
                      </span>
                    )}
                  </div>
                </div>

                {!isMounted ? (
                  <Button className="w-full" disabled size="lg">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('loading')}
                  </Button>
                ) : isCheckSign ? (
                  <Button className="w-full" disabled size="lg">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('checking_account')}
                  </Button>
                ) : user ? (
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={handleGenerate}
                    disabled={
                      isSubmitting ||
                      (isTextToVideoMode && !prompt.trim()) ||
                      isPromptTooLong ||
                      isReferenceUploading ||
                      hasReferenceUploadError ||
                      (isImageToVideoMode && referenceImageUrls.length === 0)
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('submitting')}
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        {t('generate')}
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => setIsShowSignModal(true)}
                  >
                    <User className="mr-2 h-4 w-4" />
                    {t('sign_in_to_generate')}
                  </Button>
                )}

                {!isMounted ? (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary">
                      {t('credits_cost', { credits: displayCredits(costCredits) })}
                    </span>
                    <span>{t('credits_remaining', { credits: displayCredits(0) })}</span>
                  </div>
                ) : user && remainingCredits > 0 ? (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary">
                      {t('credits_cost', { credits: displayCredits(costCredits) })}
                    </span>
                    <span>
                      {t('credits_remaining', { credits: displayCredits(remainingCredits) })}
                    </span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary">
                        {t('credits_cost', { credits: displayCredits(costCredits) })}
                      </span>
                      <span>
                        {t('credits_remaining', { credits: displayCredits(remainingCredits) })}
                      </span>
                    </div>
                    <Link href="/pricing">
                      <Button variant="outline" className="w-full" size="lg">
                        <CreditCard className="mr-2 h-4 w-4" />
                        {t('buy_credits')}
                      </Button>
                    </Link>
                  </div>
                )}

                {/* 活跃任务进度条 */}
                {activeTasks.length > 0 && (
                  <div className="space-y-3">
                    {activeTasks.map((task) => (
                      <div
                        key={task.id}
                        className="space-y-1.5 rounded-lg border p-3"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground max-w-[200px] truncate">
                            {task.prompt || t('generating')}
                          </span>
                          <span className="text-xs font-medium">
                            {task.progress}%
                          </span>
                        </div>
                        <Progress value={task.progress} />
                      </div>
                    ))}
                    <p className="text-muted-foreground text-center text-xs">
                      {activeTasks.some(
                        (task) => task.status === AITaskStatus.PROCESSING
                      )
                        ? t('task_processing')
                        : t('task_pending')}
                    </p>
                  </div>
                )}

                {/* 已完成视频缩略图 */}
                {allCompletedVideos.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">
                      {t('completed_videos')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {allCompletedVideos.map((video) => (
                        <button
                          key={video.id}
                          onClick={() => setSelectedVideo(video)}
                          className={`relative h-16 w-16 overflow-hidden rounded-md border-2 transition-colors ${
                            selectedVideo?.id === video.id
                              ? 'border-primary'
                              : 'border-transparent hover:border-primary/50'
                          }`}
                        >
                          <video
                            src={video.url}
                            className="h-full w-full object-cover"
                            preload="metadata"
                            muted
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <Play className="h-3 w-3 fill-white text-white" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                  <Video className="h-5 w-5" />
                  {t('generated_videos')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                {selectedVideo ? (
                  <div className="space-y-3">
                    <div className="relative overflow-hidden rounded-lg border">
                      <video
                        key={selectedVideo.id}
                        src={selectedVideo.url}
                        controls
                        autoPlay
                        className="h-auto w-full"
                        preload="metadata"
                      />

                      <div className="absolute right-2 bottom-2 flex justify-end text-sm">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="ml-auto"
                          onClick={() => handleDownloadVideo(selectedVideo)}
                          disabled={downloadingVideoId === selectedVideo.id}
                        >
                          {downloadingVideoId === selectedVideo.id ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                            </>
                          ) : (
                            <>
                              <Download className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-lg">
                      <video
                        key={showcaseIndex}
                        src={SHOWCASE_VIDEOS[showcaseIndex]}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full rounded-lg object-cover"
                        preload="metadata"
                      />
                      {/* Left/Right arrows */}
                      <button
                        onClick={() => setShowcaseIndex((prev) => (prev - 1 + SHOWCASE_VIDEOS.length) % SHOWCASE_VIDEOS.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
                        aria-label="Previous video"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setShowcaseIndex((prev) => (prev + 1) % SHOWCASE_VIDEOS.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
                        aria-label="Next video"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      {SHOWCASE_VIDEOS.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setShowcaseIndex(idx)}
                          className={`h-2.5 rounded-full transition-all ${
                            idx === showcaseIndex
                              ? 'bg-primary w-6'
                              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5'
                          }`}
                          aria-label={`Showcase video ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
