import type { ManualSection } from '@/shared/data/manual-data';

import { CaseCard } from './case-card';
import { ImageGrid } from './image-grid';

interface SectionBlockProps {
  section: ManualSection;
  caseCounter: { count: number };
}

function HeadingTag({ level, id, children }: { level: number; id: string; children: React.ReactNode }) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  return <Tag id={id}>{children}</Tag>;
}

export function SectionBlock({ section, caseCounter }: SectionBlockProps) {
  return (
    <div className="manual-section" data-level={section.level}>
      <HeadingTag level={section.level} id={section.id}>
        {section.title}
      </HeadingTag>

      {section.description && (
        <div className="manual-section__desc">
          {section.description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}

      {section.images && section.images.length > 0 && (
        <ImageGrid images={section.images} size="lg" />
      )}

      {section.cases && section.cases.length > 0 && (
        <div className="manual-section__cases">
          {section.cases.map((c, i) => {
            caseCounter.count++;
            return <CaseCard key={i} data={c} index={caseCounter.count} />;
          })}
        </div>
      )}

      {section.subsections && section.subsections.length > 0 && (
        <div className="manual-section__children">
          {section.subsections.map((sub) => (
            <SectionBlock key={sub.id} section={sub} caseCounter={caseCounter} />
          ))}
        </div>
      )}
    </div>
  );
}
