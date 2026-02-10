'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { ImageLightbox } from './image-lightbox';

import './manual.css';

interface TocItem {
  depth: number;
  title: string;
  url: string;
}

interface ManualLayoutProps {
  title: string;
  description: string;
  content: string;
  toc: TocItem[];
}

export function ManualLayout({
  title,
  description,
  content,
  toc,
}: ManualLayoutProps) {
  return (
    <div className="feishu-manual">
      <div className="feishu-container">
        {/* Main content */}
        <div className="feishu-main">
          <div className="feishu-header">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
          </div>
          <div className="feishu-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>

        {/* TOC sidebar */}
        {toc.length > 0 && (
          <div className="feishu-toc-sidebar">
            <div className="feishu-toc-inner">
              <nav>
                {toc
                  .filter((item) => item.depth <= 3)
                  .map((item, i) => (
                    <a
                      key={i}
                      href={item.url}
                      style={{
                        paddingLeft: `${(item.depth - 1) * 12 + 12}px`,
                      }}
                    >
                      {item.title}
                    </a>
                  ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      <ImageLightbox />
    </div>
  );
}
