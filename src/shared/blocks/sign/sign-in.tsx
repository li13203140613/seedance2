'use client';

import { useState } from 'react';
import { Eye, EyeOff, Loader2, Lock, Mail } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { authClient, signIn } from '@/core/auth/client';
import { Link, useRouter } from '@/core/i18n/navigation';
import { defaultLocale } from '@/config/locale';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

import { SocialProviders } from './social-providers';

export function SignIn({
  configs,
  callbackUrl = '/',
  defaultEmail = '',
}: {
  configs: Record<string, string>;
  callbackUrl: string;
  defaultEmail?: string;
}) {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('common.sign');
  const [email, setEmail] = useState(defaultEmail || '');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isGoogleAuthEnabled = configs.google_auth_enabled === 'true';
  const isGithubAuthEnabled = configs.github_auth_enabled === 'true';
  const isEmailAuthEnabled =
    configs.email_auth_enabled !== 'false' ||
    (!isGoogleAuthEnabled && !isGithubAuthEnabled);
  const hasSocialProviders = isGoogleAuthEnabled || isGithubAuthEnabled;

  if (callbackUrl) {
    if (
      locale !== defaultLocale &&
      callbackUrl.startsWith('/') &&
      !callbackUrl.startsWith(`/${locale}`)
    ) {
      callbackUrl = `/${locale}${callbackUrl}`;
    }
  }

  const base = locale !== defaultLocale ? `/${locale}` : '';
  const stripLocalePrefix = (path: string) => {
    if (!path?.startsWith('/')) return '/';
    if (locale === defaultLocale) return path;
    if (path === `/${locale}`) return '/';
    if (path.startsWith(`/${locale}/`))
      return path.slice(locale.length + 1) || '/';
    return path;
  };

  const handleSignIn = async () => {
    if (loading) return;

    if (!email || !password) {
      toast.error('email and password are required');
      return;
    }

    setLoading(true);

    try {
      await signIn.email(
        {
          email,
          password,
          callbackURL: callbackUrl,
        },
        {
          onRequest: () => {},
          onResponse: () => {},
          onSuccess: () => {},
          onError: (e: any) => {
            const status = e?.error?.status;
            if (status === 403) {
              const normalizedCallbackUrl = stripLocalePrefix(callbackUrl);
              const verifyPath = `/verify-email?sent=1&email=${encodeURIComponent(
                email
              )}&callbackUrl=${encodeURIComponent(normalizedCallbackUrl)}`;

              void authClient.sendVerificationEmail({
                email,
                callbackURL: `${base}${normalizedCallbackUrl || '/'}`,
              });

              router.push(verifyPath);
              return;
            }

            toast.error(e?.error?.message || 'sign in failed');
            setLoading(false);
          },
        }
      );
    } catch (e: any) {
      toast.error(e?.message || 'sign in failed');
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
        {t('welcome_back', { app: 'SeeDanceTwo' })}
      </h1>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
        {t('please_sign_in')}
      </h2>

      {/* Daily credits promo */}
      <p className="mt-8 text-center text-sm text-muted-foreground">
        {t('daily_credits_bonus')}&nbsp;
        <span className="text-2xl font-bold text-primary">2</span>
        &nbsp;{t('free_credits')}
      </p>

      {/* Social Providers */}
      {hasSocialProviders && (
        <div className="mt-5">
          <SocialProviders
            configs={configs}
            callbackUrl={callbackUrl || '/'}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      )}

      {/* OR divider */}
      {isEmailAuthEnabled && hasSocialProviders && (
        <div className="flex items-center gap-4 my-6">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {t('or')}
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
      )}

      {/* Email/Password Form */}
      {isEmailAuthEnabled && (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            void handleSignIn();
          }}
        >
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder={t('email_placeholder')}
              required
              className="h-12 rounded-lg pl-10 text-sm"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={t('password_placeholder')}
              autoComplete="password"
              required
              className="h-12 rounded-lg pl-10 pr-10 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full h-12 rounded-full text-base font-semibold"
            disabled={loading}
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              t('sign_in_title')
            )}
          </Button>
        </form>
      )}

      {/* Sign up link */}
      {isEmailAuthEnabled && (
        <p className="mt-5 text-center text-sm text-muted-foreground">
          {t('no_account')}&nbsp;&nbsp;
          <Link
            href="/sign-up"
            className="font-semibold text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            {t('sign_up_title')}
          </Link>
        </p>
      )}

      {/* Terms footer */}
      <p className="mt-4 text-center text-xs text-muted-foreground leading-relaxed">
        {t('agree_terms_prefix')}{' '}
        <Link
          href="/terms-of-service"
          className="text-primary hover:underline"
        >
          {t('terms_of_service')}
        </Link>{' '}
        {t('and')}{' '}
        <Link href="/privacy-policy" className="text-primary hover:underline">
          {t('privacy_policy')}
        </Link>
        .&nbsp;&nbsp;{t('no_tracking_note')}
      </p>
    </div>
  );
}
