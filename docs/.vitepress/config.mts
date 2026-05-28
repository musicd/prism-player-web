import { defineConfig } from 'vitepress'
import {
  GITHUB_REPO,
  SEO_EN,
  SEO_ZH,
  SITE_URL,
  siteHead,
} from './site-meta'

const sharedSocial = [{ icon: 'github', link: GITHUB_REPO }] as const

export default defineConfig({
  cleanUrls: true,
  lastUpdated: true,
  transformHead({ pageData }) {
    let slug = pageData.relativePath.replace(/\.md$/, '')
    if (slug === 'index') slug = ''
    else if (slug.endsWith('/index')) slug = slug.slice(0, -'/index'.length)
    const canonical = slug ? `${SITE_URL}/${slug}` : `${SITE_URL}/`

    return [
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:url', content: canonical }],
    ]
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '词有戏',
      titleTemplate: ':title | 词有戏',
      description: SEO_ZH.description,
      head: siteHead({
        siteName: '词有戏',
        description: SEO_ZH.description,
        keywords: SEO_ZH.keywords,
        locale: 'zh-CN',
      }),
      themeConfig: {
        logo: '/FluentColorChat20.svg',
        siteTitle: '词有戏',
        nav: [
          { text: '首页', link: '/' },
          { text: '文档', link: '/guide/quick-start' },
          { text: '理念', link: '/about/why-learn-this-way' },
          { text: '下载', link: '/download' },
          { text: '联系我们', link: '/about/contact' },
        ],
        sidebar: [
          {
            text: '快速上手',
            items: [
              { text: '从这儿开始', link: '/guide/quick-start' },
              { text: '设置与偏好', link: '/guide/settings' },
            ],
          },
          {
            text: '理念与故事',
            items: [
              { text: '为何这样学语言', link: '/about/why-learn-this-way' },
              { text: '学语言的好处', link: '/about/benefits-of-language-learning' },
              { text: '我们的故事', link: '/about/our-story' },
              { text: '常见问题', link: '/about/faq' },
              { text: '联系我们', link: '/about/contact' },
            ],
          },
          {
            text: '法律',
            items: [
              { text: '用户协议', link: '/legal/tos' },
              { text: '隐私政策', link: '/legal/privacy-policy' },
            ],
          },
        ],
        socialLinks: [...sharedSocial],
        footer: {
          message: `反馈与建议请见 <a href="/about/contact">联系我们</a>，或发邮件至 <a href="mailto:ned@ptodo.top">ned@ptodo.top</a>、<a href="${GITHUB_REPO}/issues">GitHub Issues</a>`,
          copyright:
            'Copyright © 2024-present 词有戏 | <a href="/legal/tos">用户协议</a> | <a href="/legal/privacy-policy">隐私政策</a>',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Prism Lines',
      titleTemplate: ':title | Prism Lines',
      description: SEO_EN.description,
      head: siteHead({
        siteName: 'Prism Lines',
        description: SEO_EN.description,
        keywords: SEO_EN.keywords,
        locale: 'en-US',
      }),
      themeConfig: {
        logo: '/FluentColorChat20.svg',
        siteTitle: 'Prism Lines',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/guide/getting-started' },
          { text: 'Philosophy', link: '/en/about/why-learn-this-way' },
          { text: 'Download', link: '/en/download' },
          { text: 'Contact', link: '/en/about/contact' },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Quick Start', link: '/en/guide/getting-started' },
              { text: 'Import Video & Subtitles', link: '/en/guide/import-media' },
              { text: 'Learning Session', link: '/en/guide/learning-session' },
              { text: 'Review & Sentence Playback', link: '/en/guide/review' },
              { text: 'Settings', link: '/en/guide/settings' },
            ],
          },
          {
            text: 'Philosophy & Story',
            items: [
              { text: 'Why Learn This Way', link: '/en/about/why-learn-this-way' },
              {
                text: 'Benefits of Language Learning',
                link: '/en/about/benefits-of-language-learning',
              },
              { text: 'Our Story', link: '/en/about/our-story' },
              { text: 'FAQ', link: '/en/about/faq' },
              { text: 'Contact', link: '/en/about/contact' },
            ],
          },
          {
            text: 'Legal',
            items: [
              { text: 'Terms of Service', link: '/en/legal/tos' },
              { text: 'Privacy Policy', link: '/en/legal/privacy-policy' },
            ],
          },
        ],
        socialLinks: [...sharedSocial],
        footer: {
          message: `Feedback? See <a href="/en/about/contact">Contact</a>, <a href="mailto:ned@ptodo.top">email</a>, or <a href="${GITHUB_REPO}/issues">GitHub Issues</a>`,
          copyright:
            'Copyright © 2024-present Prism Lines | <a href="/en/legal/tos">Terms</a> | <a href="/en/legal/privacy-policy">Privacy</a>',
        },
      },
    },
  },
})
