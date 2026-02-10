'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export function VideoPlayer({ src, className }: VideoPlayerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={`manual-video-wrapper ${className || ''}`}>
      {isVisible ? (
        <video
          src={src}
          controls
          preload="metadata"
          className="manual-video"
        />
      ) : (
        <div className="manual-video-placeholder" />
      )}
    </div>
  );
}
