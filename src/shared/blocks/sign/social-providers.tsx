'use client';

import { useLocale, useTranslations } from 'next-intl';
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri';
import { toast } from 'sonner';

import { signIn } from '@/core/auth/client';
import { useRouter } from '@/core/i18n/navigation';
import { defaultLocale } from '@/config/locale';
import { Button } from '@/shared/components/ui/button';
import { useAppContext } from '@/shared/contexts/app';
import { cn } from '@/shared/lib/utils';
import { Button as ButtonType } from '@/shared/types/blocks/common';

export function SocialProviders({
  configs,
  callbackUrl,
  loading,
  setLoading,
}: {
  configs: Record<string, string>;
  callbackUrl: string;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}) {
  const t = useTranslations('common.sign');
  const router = useRouter();

  const { setIsShowSignModal } = useAppContext();

  if (callbackUrl) {
    const locale = useLocale();
    if (
      locale !== defaultLocale &&
      callbackUrl.startsWith('/') &&
      !callbackUrl.startsWith(`/${locale}`)
    ) {
      callbackUrl = `/${locale}${callbackUrl}`;
    }
  }

  const handleSignIn = async ({ provider }: { provider: string }) => {
    await signIn.social(
      {
        provider: provider,
        callbackURL: callbackUrl,
      },
      {
        onRequest: (ctx) => {
          setLoading(true);
        },
        onResponse: (ctx) => {
          // Do NOT reset loading here; navigation may not have completed yet.
        },
        onSuccess: (ctx) => {
          // Close modal if any; navigation will proceed.
          setIsShowSignModal(false);
        },
        onError: (e: any) => {
          toast.error(e?.error?.message || 'sign in failed');
          setLoading(false);
        },
      }
    );
  };

  const providers: ButtonType[] = [];

  if (configs.google_auth_enabled === 'true') {
    providers.push({
      name: 'google',
      title: t('google_sign_in_title'),
      icon: <RiGoogleFill className="size-5" />,
      onClick: () => handleSignIn({ provider: 'google' }),
    });
  }

  if (configs.github_auth_enabled === 'true') {
    providers.push({
      name: 'github',
      title: t('github_sign_in_title'),
      icon: <RiGithubFill className="size-5" />,
      onClick: () => handleSignIn({ provider: 'github' }),
    });
  }

  return (
    <div className="flex w-full flex-col gap-3">
      {providers.map((provider) => (
        <Button
          key={provider.name}
          type="button"
          className={cn(
            'w-full h-12 rounded-full gap-3 text-base font-semibold',
            'bg-primary text-primary-foreground hover:bg-primary/90'
          )}
          disabled={loading}
          onClick={provider.onClick}
        >
          {provider.icon}
          <span>{provider.title}</span>
        </Button>
      ))}
    </div>
  );
}
