/** 官网根地址（SEO 的 canonical / sitemap / og:url 都依赖它） */
export const SITE_URL = 'https://www.ciyouxi.ptodo.top'

export const GITHUB_REPO = 'https://github.com/musicd/prism-player-web'

/**
 * 百度搜索资源平台 / Google Search Console 验证 token
 * - 本地构建：可通过环境变量传入，例如 `VP_GOOGLE_SITE_VERIFICATION=xxx npm run build`
 * - CI/部署平台：在构建环境变量里配置即可
 */
const env =
  (typeof process !== 'undefined' && process.env ? process.env : ({} as Record<string, string | undefined>))

export const BAIDU_SITE_VERIFICATION = env.VP_BAIDU_SITE_VERIFICATION || ''
export const GOOGLE_SITE_VERIFICATION = env.VP_GOOGLE_SITE_VERIFICATION || ''

export const SEO_ZH = {
  keywords:
    '词有戏,影视学英语,字幕学英语,美剧学英语,桌面英语学习,间隔复习,本地学习,Prism Lines',
  description:
    '词有戏官方站点：用影视字幕学英语的桌面工具。导入本地视频与字幕，逐词标记、间隔复习、原句回放。下载、教程与反馈入口。',
}

export const SEO_EN = {
  keywords:
    'Prism Lines,learn English with subtitles,TV show language learning,desktop language app,spaced repetition',
  description:
    'Official Prism Lines site — desktop app to learn languages from TV and video subtitles. Download, docs, and contact.',
}

export function siteHead(opts: {
  siteName: string
  description: string
  keywords: string
  locale: string
}) {
  const head: Array<[string, Record<string, string>] | [string, Record<string, string>, string]> = [
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'keywords', content: opts.keywords }],
    ['meta', { name: 'description', content: opts.description }],
    ['meta', { property: 'og:site_name', content: opts.siteName }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: opts.locale }],
    ['meta', { property: 'og:title', content: opts.siteName }],
    ['meta', { property: 'og:description', content: opts.description }],
    ['meta', { property: 'og:url', content: SITE_URL }],
    ['meta', { property: 'og:image', content: `${SITE_URL}/FluentColorChat20.svg` }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: opts.siteName }],
    ['meta', { name: 'twitter:description', content: opts.description }],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: opts.siteName,
        url: SITE_URL,
        description: opts.description,
        inLanguage: opts.locale,
      }),
    ],
  ]

  if (BAIDU_SITE_VERIFICATION) {
    head.push(['meta', { name: 'baidu-site-verification', content: BAIDU_SITE_VERIFICATION }])
  }
  if (GOOGLE_SITE_VERIFICATION) {
    head.push(['meta', { name: 'google-site-verification', content: GOOGLE_SITE_VERIFICATION }])
  }

  return head
}
