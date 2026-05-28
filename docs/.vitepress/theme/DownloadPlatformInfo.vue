<script setup lang="ts">
import { computed, inject } from 'vue'

type LatestJson = {
  version: string
  downloads?: {
    win?: { label?: string; url?: string }
    mac?: { label?: string; url?: string }
  }
}

const props = defineProps<{ platform: 'win' | 'mac' }>()

const latest = inject<LatestJson | null>('download-latest', null)

const label = computed(() => (props.platform === 'win' ? 'Windows' : 'macOS'))
const url = computed(() => latest?.value?.downloads?.[props.platform]?.url)
const hasUrl = computed(() => !!url.value && url.value !== '#')
const version = computed(() => latest?.value?.version || '即将发布')
</script>

<template>
  <ul>
    <li>版本：{{ version }}</li>
    <li>
      下载：
      <a v-if="hasUrl" :href="url">下载 {{ label }}</a>
      <span v-else>链接待补充</span>
    </li>
  </ul>
</template>

