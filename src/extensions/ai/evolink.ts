import { getUuid } from '@/shared/lib/hash';

import { saveFiles } from '.';
import {
  AIConfigs,
  AIFile,
  AIGenerateParams,
  AIMediaType,
  AIProvider,
  AITaskResult,
  AITaskStatus,
  AIVideo,
} from './types';

/**
 * EvoLink configs
 * @docs https://evolink.ai/
 */
export interface EvoLinkConfigs extends AIConfigs {
  apiKey: string;
  customStorage?: boolean; // use custom storage to save files
}

/**
 * EvoLink provider
 * @docs https://evolink.ai/
 */
export class EvoLinkProvider implements AIProvider {
  // provider name
  readonly name = 'evolink';
  // provider configs
  configs: EvoLinkConfigs;

  // api base url
  private baseUrl = 'https://api.evolink.ai';

  // init provider
  constructor(configs: EvoLinkConfigs) {
    this.configs = configs;
  }

  // generate task
  async generate({
    params,
  }: {
    params: AIGenerateParams;
  }): Promise<AITaskResult> {
    const { mediaType, model, prompt, options, callbackUrl } = params;

    if (mediaType !== AIMediaType.VIDEO) {
      throw new Error(`mediaType not supported: ${mediaType}`);
    }

    if (!model) {
      throw new Error('model is required');
    }

    if (!prompt) {
      throw new Error('prompt is required');
    }

    // build request params
    const input: any = {
      model,
      prompt,
    };

    if (options) {
      if (options.duration) {
        input.duration = Number(options.duration);
      }
      if (options.quality) {
        input.quality = options.quality;
      }
      if (options.aspect_ratio) {
        input.aspect_ratio = options.aspect_ratio;
      }
      if (options.generate_audio !== undefined) {
        input.generate_audio = options.generate_audio;
      }
      // image-to-video: use image_input
      if (options.image_input && Array.isArray(options.image_input)) {
        input.image_urls = options.image_input;
      }
    }

    const isValidCallbackUrl =
      callbackUrl &&
      callbackUrl.startsWith('http') &&
      !callbackUrl.includes('localhost') &&
      !callbackUrl.includes('127.0.0.1');

    if (isValidCallbackUrl) {
      input.callback_url = callbackUrl;
    }

    const apiUrl = `${this.baseUrl}/v1/videos/generations`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.configs.apiKey}`,
    };

    console.log('evolink input', apiUrl, input);

    const resp = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(input),
    });

    if (!resp.ok) {
      const errorText = await resp.text();
      throw new Error(
        `request failed with status: ${resp.status}, body: ${errorText}`
      );
    }

    const data = await resp.json();

    // API returns task id in 'id' field
    const taskId = data.id || data.task_id;
    if (!data || !taskId) {
      throw new Error('generate failed: no task id');
    }

    return {
      taskStatus: AITaskStatus.PENDING,
      taskId,
      taskInfo: {},
      taskResult: data,
    };
  }

  // query task
  async query({
    taskId,
    mediaType,
  }: {
    taskId: string;
    mediaType?: AIMediaType;
  }): Promise<AITaskResult> {
    const apiUrl = `${this.baseUrl}/v1/tasks/${taskId}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.configs.apiKey}`,
    };

    const resp = await fetch(apiUrl, {
      method: 'GET',
      headers,
    });

    if (!resp.ok) {
      throw new Error(`request failed with status: ${resp.status}`);
    }

    const data = await resp.json();

    if (!data || !data.status) {
      throw new Error('query failed: no status');
    }

    const taskStatus = this.mapStatus(data.status);

    let videos: AIVideo[] | undefined = undefined;

    if (taskStatus === AITaskStatus.SUCCESS) {
      // extract video urls from response
      // API returns results as an array of video URLs
      if (data.results && Array.isArray(data.results)) {
        videos = data.results.map((url: string) => ({
          id: '',
          createTime: new Date(),
          videoUrl: url,
        }));
      } else if (data.video_url) {
        videos = [
          {
            id: '',
            createTime: new Date(),
            videoUrl: data.video_url,
          },
        ];
      }
    }

    // save files to custom storage
    if (
      taskStatus === AITaskStatus.SUCCESS &&
      videos &&
      videos.length > 0 &&
      this.configs.customStorage
    ) {
      const filesToSave: AIFile[] = [];
      videos.forEach((video, index) => {
        if (video.videoUrl) {
          filesToSave.push({
            url: video.videoUrl,
            contentType: 'video/mp4',
            key: `evolink/video/${getUuid()}.mp4`,
            index: index,
            type: 'video',
          });
        }
      });

      if (filesToSave.length > 0) {
        const uploadedFiles = await saveFiles(filesToSave);
        if (uploadedFiles) {
          uploadedFiles.forEach((file: AIFile) => {
            if (file && file.url && videos && file.index !== undefined) {
              const video = videos[file.index];
              if (video) {
                video.videoUrl = file.url;
              }
            }
          });
        }
      }
    }

    return {
      taskId,
      taskStatus,
      taskInfo: {
        videos,
        status: data.status,
        errorCode: data.error_code || '',
        errorMessage: data.error_message || '',
        createTime: new Date(),
      },
      taskResult: data,
    };
  }

  // map status
  private mapStatus(status: string): AITaskStatus {
    switch (status) {
      case 'pending':
        return AITaskStatus.PENDING;
      case 'processing':
        return AITaskStatus.PROCESSING;
      case 'completed':
        return AITaskStatus.SUCCESS;
      case 'failed':
        return AITaskStatus.FAILED;
      default:
        throw new Error(`unknown status: ${status}`);
    }
  }
}
