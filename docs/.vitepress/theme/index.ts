import DefaultTheme from 'vitepress/theme'
import './custom.css'
import DownloadLatest from './DownloadLatest.vue'
import DownloadPlatformInfo from './DownloadPlatformInfo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, ...rest }) {
    DefaultTheme.enhanceApp?.({ app, ...rest })
    app.component('DownloadLatest', DownloadLatest)
    app.component('DownloadPlatformInfo', DownloadPlatformInfo)
  },
}
