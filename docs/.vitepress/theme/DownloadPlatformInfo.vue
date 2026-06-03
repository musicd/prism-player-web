<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { useLatestDownload } from './latest-download'

const props = defineProps<{ platform: 'win' | 'mac' }>()

const route = useRoute()
const en = computed(() => route.path.startsWith('/en'))
const { latest } = useLatestDownload()

const label = computed(() => (props.platform === 'win' ? 'Windows' : 'macOS'))
const url = computed(() => latest.value?.downloads?.[props.platform]?.url)
const hasUrl = computed(() => !!url.value && url.value !== '#')
const version = computed(() =>
  latest.value?.version || (en.value ? 'Coming soon' : '即将发布'),
)
</script>

<template>
  <ul>
    <li>{{ en ? 'Version' : '版本' }}：{{ version }}</li>
    <li>
      {{ en ? 'Download' : '下载' }}：
      <a v-if="hasUrl" :href="url">{{ en ? 'Download' : '下载' }} {{ label }}</a>
      <span v-else>{{ en ? 'Link pending' : '链接待补充' }}</span>
    </li>
  </ul>
</template>
