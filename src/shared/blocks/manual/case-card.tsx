import type { ManualCase } from '@/shared/data/manual-data';

import { ImageGrid } from './image-grid';
import { VideoPlayer } from './video-player';

interface CaseCardProps {
  data: ManualCase;
  index: number;
}

export function CaseCard({ data, index }: CaseCardProps) {
  return (
    <div className="manual-case" id={`case-${index}`}>
      {/* Prompt */}
      <div className="manual-case__prompt">
        <span className="manual-case__prompt-label">Prompt</span>
        <p>{data.prompt}</p>
      </div>

      {/* Duration badge */}
      {data.duration && (
        <span className="manual-case__duration">{data.duration}</span>
      )}

      {/* Label badge */}
      {data.label && (
        <span className="manual-case__label">{data.label}</span>
      )}

      {/* Input images */}
      {data.inputImages && data.inputImages.length > 0 && (
        <div className="manual-case__inputs">
          <span className="manual-case__section-label">输入素材</span>
          <ImageGrid images={data.inputImages} size="sm" />
        </div>
      )}

      {/* Input videos */}
      {data.inputVideos && data.inputVideos.length > 0 && (
        <div className="manual-case__inputs">
          <span className="manual-case__section-label">参考视频</span>
          {data.inputVideos.map((src, i) => (
            <VideoPlayer key={i} src={src} />
          ))}
        </div>
      )}

      {/* Result screenshots */}
      {data.resultScreenshots && data.resultScreenshots.length > 0 && (
        <div className="manual-case__result">
          <span className="manual-case__section-label">生成结果</span>
          <ImageGrid images={data.resultScreenshots} size="md" />
        </div>
      )}

      {/* Result videos */}
      {data.resultVideos && data.resultVideos.length > 0 && (
        <div className="manual-case__result">
          {data.resultVideos.map((src, i) => (
            <VideoPlayer key={i} src={src} />
          ))}
        </div>
      )}
    </div>
  );
}
