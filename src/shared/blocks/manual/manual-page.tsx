'use client';

import type { ManualData, ManualSection } from '@/shared/data/manual-data';

import { ImageGrid } from './image-grid';
import { ParamsTable } from './params-table';
import { SectionBlock } from './section-block';

import './manual.css';

interface ManualPageProps {
  data: ManualData;
  title: string;
  description: string;
}

function collectTocItems(sections: ManualSection[], items: { id: string; title: string; level: number }[]) {
  for (const s of sections) {
    if (s.level <= 4) {
      items.push({ id: s.id, title: s.title, level: s.level });
    }
    if (s.subsections) {
      collectTocItems(s.subsections, items);
    }
  }
}

export function ManualPage({ data, title, description }: ManualPageProps) {
  const tocItems: { id: string; title: string; level: number }[] = [];
  collectTocItems(data.sections, tocItems);

  const caseCounter = { count: 0 };

  return (
    <div className="feishu-manual">
      <div className="feishu-container">
        {/* Main Content */}
        <div className="feishu-main">
          {/* Header */}
          <div className="feishu-header">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
          </div>

          <div className="feishu-body">
            {/* Hero */}
            <section className="manual-hero">
              <h1>{data.hero.title}</h1>
              {data.hero.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul>
                {data.hero.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>

            {/* Params */}
            <section id="params">
              <h2>1. 参数预览</h2>
              <ParamsTable params={data.params} note={data.paramsNote} />
            </section>

            {/* Interaction */}
            <section id="interaction">
              <h2>2. 交互形式</h2>
              <div className="manual-notice">
                <strong>⚠️注意：</strong>
                <ul>
                  {data.interaction.notes.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              </div>

              {data.interaction.steps.map((step, i) => (
                <div key={i} className="manual-interaction-step">
                  <h5>{step.title}</h5>
                  {step.description && <p>{step.description}</p>}
                  <ImageGrid images={step.images} size="lg" />
                  {step.captions && (
                    <div className="manual-interaction-captions">
                      {step.captions.map((c, j) => (
                        <span key={j}>{c}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <p>{data.interaction.previewNote}</p>
              <ImageGrid images={data.interaction.previewImages} size="lg" />
            </section>

            <p className="manual-transition">{data.transitionText}</p>

            <hr />

            {/* Capability Sections */}
            <h1 id="capabilities">即梦Seedance 2.0 能力 / 提升预览</h1>

            {data.sections.map((section) => (
              <SectionBlock key={section.id} section={section} caseCounter={caseCounter} />
            ))}

            {/* Footer */}
            <hr />
            <section className="manual-footer">
              <h1>{data.footer.title}</h1>
              {data.footer.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          </div>
        </div>

        {/* TOC Sidebar */}
        {tocItems.length > 0 && (
          <div className="feishu-toc-sidebar">
            <div className="feishu-toc-inner">
              <nav>
                {tocItems.map((item, i) => (
                  <a
                    key={i}
                    href={`#${item.id}`}
                    style={{ paddingLeft: `${(item.level - 2) * 12 + 12}px` }}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
