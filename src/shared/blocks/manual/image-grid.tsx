'use client';

import { useState } from 'react';

interface ImageGridProps {
  images: string[];
  columns?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function ImageGrid({ images, columns, size = 'md' }: ImageGridProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  const colCount = columns || Math.min(images.length, 4);

  return (
    <>
      <div
        className={`manual-image-grid manual-image-grid--${size}`}
        style={{
          gridTemplateColumns: `repeat(${colCount}, 1fr)`,
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="manual-image-grid__item" onClick={() => setLightboxSrc(src)}>
            <img src={src} alt={`Image ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {lightboxSrc && (
        <div className="manual-lightbox" onClick={() => setLightboxSrc(null)}>
          <img
            src={lightboxSrc}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="manual-lightbox__close"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
