import { onMounted, ref } from 'vue'

export type LatestJson = {
  version: string
  releasePageUrl?: string
  downloads?: {
    win?: { label?: string; url?: string }
    mac?: { label?: string; url?: string }
  }
}

const latest = ref<LatestJson | null>(null)
const loadError = ref(false)
let promise: Promise<void> | null = null

export function fetchLatest() {
  if (!promise) {
    promise = fetch('/latest.json', { cache: 'no-cache' })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        latest.value = (await res.json()) as LatestJson
      })
      .catch(() => {
        loadError.value = true
      })
  }
  return promise
}

export function useLatestDownload() {
  onMounted(() => fetchLatest())
  return { latest, loadError }
}
