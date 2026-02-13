import Link from 'next/link';
import { X } from 'lucide-react';

import { envConfigs } from '@/config';
import {
  BrandLogo,
  LocaleSelector,
  ThemeToggler,
} from '@/shared/blocks/common';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left - Visual Panel (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[540px] flex-shrink-0 flex-col relative bg-gradient-to-br from-primary via-primary/90 to-primary/70 overflow-hidden">
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.08),transparent_50%)]" />

        {/* Logo */}
        <div className="relative z-10 p-8">
          <BrandLogo
            brand={{
              title: envConfigs.app_name,
              logo: {
                src: envConfigs.app_logo,
                alt: envConfigs.app_name,
              },
              url: '/',
              target: '_self',
              className: 'brightness-0 invert',
            }}
          />
        </div>

        {/* Video showcase */}
        <div className="relative z-10 flex flex-1 items-center justify-center p-8 pt-0">
          <video
            src="https://image.agent-skills.cc/uploads/wan2-video-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
            preload="metadata"
          />
        </div>
      </div>

      {/* Right - Form Panel */}
      <div className="flex flex-1 flex-col items-center justify-center relative overflow-y-auto">
        {/* Top bar */}
        <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
          <ThemeToggler />
          <LocaleSelector type="button" />
          <Link
            href="/"
            className="rounded-full p-2 hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="size-5" />
          </Link>
        </div>

        {/* Mobile logo */}
        <div className="lg:hidden absolute top-4 left-4 z-10">
          <BrandLogo
            brand={{
              title: envConfigs.app_name,
              logo: {
                src: envConfigs.app_logo,
                alt: envConfigs.app_name,
              },
              url: '/',
              target: '_self',
              className: '',
            }}
          />
        </div>

        {/* Form content */}
        <div className="w-full max-w-[440px] px-6 py-20 lg:py-12">
          {children}
        </div>
      </div>
    </div>
  );
}
