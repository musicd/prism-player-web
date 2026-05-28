<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'

type LatestJson = {
  version: string
  releasePageUrl?: string
  downloads?: {
    win?: { label?: string; url?: string }
    mac?: { label?: string; url?: string }
  }
}

const latest = ref<LatestJson | null>(null)
const loadError = ref('')

provide('download-latest', latest)

onMounted(async () => {
  try {
    const res = await fetch('/latest.json', { cache: 'no-cache' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    latest.value = (await res.json()) as LatestJson
  } catch {
    loadError.value = '最新版本信息加载失败，请稍后重试。'
  }
})
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
    <div style="font-weight: 600; margin-bottom: 6px">最新版本：{{ latest.version }}</div>
    <div style="display: flex; gap: 10px; flex-wrap: wrap">
      <a
        v-if="latest.downloads?.win?.url && latest.downloads.win.url !== '#'"
        class="VPButton medium brand"
        :href="latest.downloads.win.url"
      >
        下载 Windows
      </a>
      <a v-else class="VPButton medium alt" href="#windows">Windows 下载暂未开放</a>

      <a
        v-if="latest.downloads?.mac?.url && latest.downloads.mac.url !== '#'"
        class="VPButton medium brand"
        :href="latest.downloads.mac.url"
      >
        下载 macOS
      </a>
      <a v-else class="VPButton medium alt" href="#macos">macOS 下载暂未开放</a>

      <a v-if="latest.releasePageUrl" class="VPButton medium alt" :href="latest.releasePageUrl">
        查看下载页与说明
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
    {{ loadError }}
  </div>
</template>

