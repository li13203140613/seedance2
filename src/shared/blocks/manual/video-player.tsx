'use client';

import { useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export function VideoPlayer({ src, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`manual-video-wrapper ${className || ''}`}>
      <video
        ref={videoRef}
        src={src}
        controls
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        className={`manual-video ${isLoaded ? 'loaded' : ''}`}
      />
    </div>
  );
}
