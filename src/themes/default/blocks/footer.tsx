import { Link } from '@/core/i18n/navigation';
import {
  BrandLogo,
  BuiltWith,
  Copyright,
  LocaleSelector,
  ThemeToggler,
} from '@/shared/blocks/common';
import { SmartIcon } from '@/shared/blocks/common/smart-icon';
import { NavItem } from '@/shared/types/blocks/common';
import { Footer as FooterType } from '@/shared/types/blocks/landing';

const backlinks = [
  // --- Badge images ---
  {
    href: 'https://dang.ai/',
    img: 'https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png',
    alt: 'Dang.ai',
    width: 150,
    height: 54,
  },
  {
    href: 'https://startupfa.me/s/nano-banana-pro-2',
    img: 'https://startupfa.me/badges/featured-badge-small.webp',
    alt: 'Featured on Startup Fame',
    width: 224,
    height: 36,
  },
  {
    href: 'https://twelve.tools',
    img: 'https://twelve.tools/badge0-white.svg',
    alt: 'Featured on Twelve Tools',
    width: 200,
    height: 54,
  },
  {
    href: 'https://showmebest.ai',
    img: 'https://showmebest.ai/badge/feature-badge-white.webp',
    alt: 'Featured on ShowMeBestAI',
    width: 220,
    height: 60,
  },
  // --- Text links ---
  { href: 'https://www.agenthunter.io', label: 'AgentHunter' },
  {
    href: 'https://open-launch.com/projects/seedancetwo2-0',
    img: 'https://open-launch.com/api/badge/d68f5d47-09ea-46d9-a749-ae0cc9e0cc5e/featured-small.svg',
    alt: 'Featured on Open-Launch',
    width: 40,
    height: 40,
  },
  {
    href: 'https://deeplaunch.io',
    img: 'https://deeplaunch.io/badge/badge_dark.svg',
    alt: 'Featured on DeepLaunch.io',
    width: 200,
    height: 54,
  },
  { href: 'https://fazier.com/launches/www.seedance2.art', label: 'Fazier' },
  {
    href: 'https://turbo0.com/item/seedance',
    img: 'https://img.turbo0.com/badge-listed-dark.svg',
    alt: 'Listed on Turbo0',
    width: 150,
    height: 54,
  },
  {
    href: 'https://findly.tools/seedancetwo2-0?utm_source=seedancetwo2-0',
    img: 'https://findly.tools/badges/findly-tools-badge-light.svg',
    alt: 'Featured on findly.tools',
    width: 150,
    height: 54,
  },
  { href: 'https://productwing.com', label: 'Product Wing' },
  { href: 'https://unitelist.com', label: 'Unite List' },
  { href: 'https://theonestartup.com', label: 'The One Startup' },
  { href: 'https://dayslaunch.com', label: 'Days Launch' },
  { href: 'https://logicballs.com', label: 'LogicBalls' },
  {
    href: 'https://similarlabs.com/',
    img: 'https://similarlabs.com/similarlabs-embed-badge-light.svg',
    alt: 'SimilarLabs Embed Badge',
    width: 150,
    height: 54,
  },
  { href: 'https://acidtools.com', label: 'Acid Tools' },
  { href: 'https://www.showmysites.com', label: 'ShowMySites' },
  {
    href: 'https://submitaitools.org',
    img: 'https://submitaitools.org/static_submitaitools/images/submitaitools.png',
    alt: 'Submit AI Tools – The ultimate platform to discover, submit, and explore the best AI tools across various categories.',
    width: 200,
    height: 60,
  },
  {
    href: 'https://aiagentsdirectory.com/agent/xiaofei-li?utm_source=badge&utm_medium=referral&utm_campaign=free_listing&utm_content=xiaofei-li',
    img: 'https://aiagentsdirectory.com/featured-badge.svg?v=2024',
    alt: 'xiaofei li - Featured AI Agent on AI Agents Directory',
    width: 200,
    height: 50,
  },
  { href: 'https://aiagentsdirectory.com/agent/seedance-20', label: 'AI Agents Directory - Seedance' },
  {
    href: 'https://code.market?code.market-verified',
    img: 'https://code.market/assets/manage-product/featured-logo-bright.svg',
    alt: 'ai tools code.market',
    width: 140,
    height: 39,
  },
  { href: 'https://startupfa.st', label: 'Startup Fast' },
  { href: 'https://dironix.com', label: 'Dironix' },
  { href: 'https://dofollow.tools', label: 'Dofollow Tools' },
  { href: 'https://ff2050.com/products/seedance-20', label: 'FF2050' },
  { href: 'https://aidirs.org/item/seedance-20', label: 'AIDirs' },
  { href: 'https://auraplusplus.com/projects/seedance-2-0', label: 'Aura++' },
  { href: 'https://aistage.net', label: 'AIStage' },
  { href: 'https://aiproductlist.org', label: 'AI Product List' },
  { href: 'https://www.ai138.com', label: 'AI工具网' },
  { href: 'https://mossai.org', label: 'MossAI Tools' },
  { href: 'https://toolsfine.com', label: 'ToolsFine' },
  { href: 'https://AIToolly.com/', label: 'AIToolly' },
  { href: 'https://www.meoai.net/', label: 'MeoAI' },
  { href: 'https://right-ai.com/', label: 'RightAI Tools' },
  { href: 'https://aitop10.tools/', label: 'AiTop10 Tools' },
  { href: 'https://www.seewhatnewai.com', label: 'See What New AI' },
  { href: 'https://www.aitoolzdir.com', label: 'AI Toolz Dir' },
  { href: 'https://fast-wan.com/', label: 'Fast Wan' },
  { href: 'https://viesearch.com/', label: 'Viesearch' },
  { href: 'https://allinai.tools', label: 'All in AI Tools' },
  { href: 'https://nano-banana.cn', label: 'Nano Banana' },
  { href: 'https://agent-skills.cc', label: 'Agent Skills' },
] as const;

function BacklinkItem({ item }: { item: (typeof backlinks)[number] }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        'img' in item
          ? 'shrink-0'
          : 'text-muted-foreground hover:text-primary shrink-0 text-sm duration-150'
      }
    >
      {'img' in item ? (
        <img
          src={item.img}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading="lazy"
        />
      ) : (
        item.label
      )}
    </a>
  );
}

export function Footer({ footer }: { footer: FooterType }) {
  return (
    <footer
      id={footer.id}
      className={`py-8 sm:py-8 ${footer.className || ''} overflow-x-hidden`}
    >
      <div className="container space-y-8 overflow-x-hidden">
        <div className="grid min-w-0 gap-12 md:grid-cols-5">
          <div className="min-w-0 space-y-4 break-words md:col-span-2 md:space-y-6">
            {footer.brand ? <BrandLogo brand={footer.brand} /> : null}

            {footer.brand?.description ? (
              <p
                className="text-muted-foreground text-sm text-balance break-words"
                dangerouslySetInnerHTML={{ __html: footer.brand.description }}
              />
            ) : null}
          </div>

          <div className="col-span-3 grid min-w-0 gap-6 sm:grid-cols-3">
            {footer.nav?.items.map((item, idx) => (
              <div key={idx} className="min-w-0 space-y-4 text-sm break-words">
                <span className="block font-medium break-words">
                  {item.title}
                </span>

                <div className="flex min-w-0 flex-wrap gap-4 sm:flex-col">
                  {item.children?.map((subItem, iidx) => (
                    <Link
                      key={iidx}
                      href={subItem.url || ''}
                      target={subItem.target || ''}
                      className="text-muted-foreground hover:text-primary block break-words duration-150"
                    >
                      <span className="break-words">{subItem.title || ''}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-4 sm:gap-8">
          {footer.show_built_with !== false ? <BuiltWith /> : null}
          <div className="min-w-0 flex-1" />
          {footer.show_theme !== false ? <ThemeToggler type="toggle" /> : null}
          {footer.show_locale !== false ? (
            <LocaleSelector type="button" />
          ) : null}
        </div>

        <div
          aria-hidden
          className="h-px min-w-0 [background-image:linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-[length:6px_1px] bg-repeat-x opacity-25"
        />
        <div className="flex min-w-0 flex-wrap justify-between gap-8">
          {footer.copyright ? (
            <p
              className="text-muted-foreground text-sm text-balance break-words"
              dangerouslySetInnerHTML={{ __html: footer.copyright }}
            />
          ) : footer.brand ? (
            <Copyright brand={footer.brand} />
          ) : null}

          <div className="min-w-0 flex-1"></div>

          {footer.agreement ? (
            <div className="flex min-w-0 flex-wrap items-center gap-4">
              {footer.agreement?.items.map((item: NavItem, index: number) => (
                <Link
                  key={index}
                  href={item.url || ''}
                  target={item.target || ''}
                  className="text-muted-foreground hover:text-primary block text-xs break-words underline duration-150"
                >
                  {item.title || ''}
                </Link>
              ))}
            </div>
          ) : null}

          {footer.social ? (
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              {footer.social?.items.map((item: NavItem, index) => (
                <Link
                  key={index}
                  href={item.url || ''}
                  target={item.target || ''}
                  className="text-muted-foreground hover:text-primary bg-background block cursor-pointer rounded-full p-2 duration-150"
                  aria-label={item.title || 'Social media link'}
                >
                  {item.icon && (
                    <SmartIcon name={item.icon as string} size={20} />
                  )}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* Code.Market partners widget */}
      <div className="container mt-8">
        <div
          data-codemarket-widget="seedancetwocom"
          data-theme-bg="#ffffff"
          data-theme-text="slate-600"
          data-layout="grid"
          data-show-branding="false"
        />
      </div>

      {/* Scrolling backlinks marquee */}
      <div className="mt-8 overflow-hidden border-t border-dashed border-white/10 pt-6">
        <div className="footer-marquee-wrap">
          <div className="footer-marquee">
            {backlinks.map((item, i) => (
              <BacklinkItem key={i} item={item} />
            ))}
          </div>
          <div className="footer-marquee" aria-hidden>
            {backlinks.map((item, i) => (
              <BacklinkItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
