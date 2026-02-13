import { Link } from '@/core/i18n/navigation';
import { SmartIcon } from '@/shared/blocks/common';
import { VideoGenerator } from '@/shared/blocks/generator/video';
import { Button } from '@/shared/components/ui/button';
import { Highlighter } from '@/shared/components/ui/highlighter';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

import { SocialAvatars } from './social-avatars';

export function Hero({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  const highlightText = section.highlight_text ?? '';
  let texts = null;
  if (highlightText) {
    texts = section.title?.split(highlightText, 2);
  }

  return (
    <>
      <section
        id={section.id}
        className={cn(
          `relative min-h-screen overflow-hidden flex items-center justify-center`,
          section.className,
          className
        )}
      >
        {/* Full-screen background video */}
        {section.background_video?.src && (
          <video
            src={section.background_video.src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            preload="metadata"
          />
        )}

        {/* Overlay text content */}
        <div className="relative z-10 mx-auto max-w-full px-4 text-center md:max-w-5xl">
          {texts && texts.length > 0 ? (
            <h1 className="text-4xl font-semibold text-white drop-shadow-lg sm:text-6xl">
              {texts[0]}
              <Highlighter action="underline" color="#7C3AED">
                {highlightText}
              </Highlighter>
              <span className="mt-3 block">{texts[1]}</span>
            </h1>
          ) : (
            <h1 className="text-4xl font-semibold text-balance text-white drop-shadow-lg sm:text-6xl">
              {section.title}
            </h1>
          )}

          <p
            className="mt-8 mb-8 text-lg text-balance text-white/90 drop-shadow-md"
            dangerouslySetInnerHTML={{ __html: section.description ?? '' }}
          />

          {section.buttons && (
            <div className="flex items-center justify-center gap-4">
              {section.buttons.map((button, idx) => (
                <Button
                  asChild
                  size={button.size || 'default'}
                  variant={button.variant || 'default'}
                  className="px-4 text-sm"
                  key={idx}
                >
                  <Link href={button.url ?? ''} target={button.target ?? '_self'}>
                    {button.icon && <SmartIcon name={button.icon as string} />}
                    <span>{button.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          )}

          {section.tip && (
            <p
              className="mt-6 block text-center text-sm text-white/80 drop-shadow-md"
              dangerouslySetInnerHTML={{ __html: section.tip ?? '' }}
            />
          )}

          {section.show_avatars && (
            <SocialAvatars tip={section.avatars_tip || ''} />
          )}
        </div>
      </section>

      {section.show_video_generator && (
        <VideoGenerator />
      )}
    </>
  );
}
