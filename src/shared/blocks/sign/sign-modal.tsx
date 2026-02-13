'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/shared/components/ui/drawer';
import { useAppContext } from '@/shared/contexts/app';
import { useMediaQuery } from '@/shared/hooks/use-media-query';

import { SignInForm } from './sign-in-form';

export function SignModal({ callbackUrl = '/' }: { callbackUrl?: string }) {
  const t = useTranslations('common.sign');
  const { isShowSignModal, setIsShowSignModal } = useAppContext();

  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={isShowSignModal} onOpenChange={setIsShowSignModal}>
        <DialogContent
          className="sm:max-w-[860px] p-0 overflow-hidden gap-0 border-0"
          showCloseButton={false}
        >
          <div className="flex">
            {/* Left - Video Panel */}
            <div className="hidden md:block w-[380px] flex-shrink-0 relative bg-gradient-to-br from-primary via-primary/90 to-primary/70 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
              <video
                src="https://image.agent-skills.cc/uploads/wan2-video-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-[70%_center]"
                preload="metadata"
              />
            </div>

            {/* Right - Form Panel */}
            <div className="flex-1 p-8 relative">
              {/* Close button */}
              <button
                onClick={() => setIsShowSignModal(false)}
                className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 ring-offset-background focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Close</span>
              </button>

              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {t('sign_in_title')}
                </DialogTitle>
              </DialogHeader>
              <SignInForm callbackUrl={callbackUrl} className="mt-4" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isShowSignModal} onOpenChange={setIsShowSignModal}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-2xl font-bold">
            {t('sign_in_title')}
          </DrawerTitle>
        </DrawerHeader>
        <SignInForm callbackUrl={callbackUrl} className="mt-4 px-4" />
        <DrawerFooter className="pt-4">
          <DrawerClose asChild>
            <Button variant="outline" className="rounded-full">
              {t('cancel_title')}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
