import { defineConfig } from 'vitepress'

const sharedSocial = [
  { icon: 'github', link: 'https://github.com/你的用户名/prism-english' },
] as const

export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '棱镜英语',
      description: '棱镜英语官方文档 — 用影视字幕学英语的桌面学习工具',
      themeConfig: {
        logo: '/FluentColorChat20.svg',
        nav: [
          { text: '首页', link: '/' },
          { text: '文档', link: '/guide/getting-started' },
          { text: '理念', link: '/about/why-learn-this-way' },
          { text: '下载', link: '/download' },
        ],
        sidebar: [
          {
            text: '快速上手',
            items: [
              { text: '开始使用', link: '/guide/getting-started' },
              { text: '导入视频与字幕', link: '/guide/import-media' },
              { text: '学习一节内容', link: '/guide/learning-session' },
              { text: '复习与句子回放', link: '/guide/review' },
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
          message:
            '如有建议或反馈，请通过 <a href="mailto:ned@ptodo.top">邮件</a> 或 <a href="https://github.com/你的用户名/prism-english/issues">GitHub Issues</a> 联系我',
          copyright:
            'Copyright © 2024-present 棱镜英语 | <a href="/legal/tos">用户协议</a> | <a href="/legal/privacy-policy">隐私政策</a>',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Prism English',
      description:
        'Prism English official docs — Desktop app to learn English from TV and video subtitles',
      themeConfig: {
        logo: '/FluentColorChat20.svg',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/guide/getting-started' },
          { text: 'Philosophy', link: '/en/about/why-learn-this-way' },
          { text: 'Download', link: '/en/download' },
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
          message:
            'Feedback? Reach us via <a href="mailto:ned@ptodo.top">email</a> or <a href="https://github.com/你的用户名/prism-english/issues">GitHub Issues</a>',
          copyright:
            'Copyright © 2024-present Prism English | <a href="/en/legal/tos">Terms</a> | <a href="/en/legal/privacy-policy">Privacy</a>',
        },
      },
    },
  },
})
