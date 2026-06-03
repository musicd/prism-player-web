<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { useLatestDownload } from './latest-download'

const route = useRoute()
const en = computed(() => route.path.startsWith('/en'))
const { latest, loadError } = useLatestDownload()

const releasePageHref = computed(() =>
  en.value ? '/en/download' : latest.value?.releasePageUrl || '/download',
)
</script>

<template>
  <div
    v-if="latest"
    style="
      margin: 12px 0 20px;
      padding: 12px;
      border: 1px solid var(--vp-c-divider);
      border-radius: 10px;
    "
  >
    <div style="font-weight: 600; margin-bottom: 6px">
      {{ en ? 'Latest version' : '最新版本' }}：{{ latest.version }}
    </div>
    <div style="display: flex; gap: 10px; flex-wrap: wrap">
      <a
        v-if="latest.downloads?.win?.url && latest.downloads.win.url !== '#'"
        class="VPButton medium brand"
        :href="latest.downloads.win.url"
      >
        {{ en ? 'Download Windows' : '下载 Windows' }}
      </a>
      <a v-else class="VPButton medium alt" href="#windows">
        {{ en ? 'Windows download not available' : 'Windows 下载暂未开放' }}
      </a>

      <a
        v-if="latest.downloads?.mac?.url && latest.downloads.mac.url !== '#'"
        class="VPButton medium brand"
        :href="latest.downloads.mac.url"
      >
        {{ en ? 'Download macOS' : '下载 macOS' }}
      </a>
      <a v-else class="VPButton medium alt" href="#macos">
        {{ en ? 'macOS download not available' : 'macOS 下载暂未开放' }}
      </a>

      <a v-if="latest.releasePageUrl" class="VPButton medium alt" :href="releasePageHref">
        {{ en ? 'Download page & notes' : '查看下载页与说明' }}
      </a>
    </div>
  </div>

  <div
    v-else-if="loadError"
    style="
      margin: 12px 0 20px;
      padding: 12px;
      border: 1px solid var(--vp-c-divider);
      border-radius: 10px;
    "
  >
    {{
      en
        ? 'Failed to load latest version info. Please try again later.'
        : '最新版本信息加载失败，请稍后重试。'
    }}
  </div>
</template>
