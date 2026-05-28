---
title: 下载词有戏桌面版
description: 下载词有戏 Windows / macOS 桌面版，用影视字幕学英语。
---

# 下载桌面版

词有戏目前为 **Windows / macOS** 桌面应用。

<script setup>
import { onMounted, ref } from 'vue'

const latest = ref(null)
const loadError = ref('')

onMounted(async () => {
  try {
    const res = await fetch('/latest.json', { cache: 'no-cache' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    latest.value = await res.json()
  } catch {
    loadError.value = '最新版本信息加载失败，请稍后重试。'
  }
})
</script>

<div v-if="latest" style="margin: 12px 0 20px; padding: 12px; border: 1px solid var(--vp-c-divider); border-radius: 10px;">
  <div style="font-weight: 600; margin-bottom: 6px;">最新版本：{{ latest.version }}</div>
  <div style="display: flex; gap: 10px; flex-wrap: wrap;">
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
<div v-else-if="loadError" style="margin: 12px 0 20px; padding: 12px; border: 1px solid var(--vp-c-divider); border-radius: 10px;">
  {{ loadError }}
</div>

## Windows {#windows}

- 版本：{{ latest?.version ?? '即将发布' }}
- 下载：<a v-if="latest?.downloads?.win?.url && latest.downloads.win.url !== '#'" :href="latest.downloads.win.url">下载 Windows</a><span v-else>链接待补充</span>

::: info
请从本页获取安装包，勿从不明来源下载。
:::

## macOS {#macos}

- 版本：{{ latest?.version ?? '即将发布' }}
- 下载：<a v-if="latest?.downloads?.mac?.url && latest.downloads.mac.url !== '#'" :href="latest.downloads.mac.url">下载 macOS</a><span v-else>链接待补充</span>

::: tip
若系统提示「无法验证开发者」，请在系统设置中允许打开，或等待我们完成代码签名后重新下载。
:::

## 系统要求（参考）

| 平台 | 建议配置 |
|------|----------|
| Windows | Windows 10 64 位及以上 |
| macOS | macOS 12 及以上（Apple Silicon / Intel） |

安装与首次使用说明见 [快速上手](/guide/quick-start)。
