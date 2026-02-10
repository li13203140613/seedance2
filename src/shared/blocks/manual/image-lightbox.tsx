'use client';

import { useCallback, useEffect, useState } from 'react';

export function ImageLightbox() {
  const [src, setSrc] = useState<string | null>(null);

  const close = useCallback(() => setSrc(null), []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'IMG' &&
        target.closest('.feishu-body td')
      ) {
        e.preventDefault();
        setSrc((target as HTMLImageElement).src);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (src) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [src, close]);

  if (!src) return null;

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'zoom-out',
        padding: '24px',
      }}
    >
      <img
        src={src}
        alt="Preview"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          borderRadius: '8px',
          cursor: 'default',
        }}
      />
      <button
        onClick={close}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(255,255,255,0.15)',
          border: 'none',
          color: '#fff',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          fontSize: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}
