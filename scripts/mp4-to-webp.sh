#!/usr/bin/env bash
set -euo pipefail

FFMPEG="${FFMPEG:-/opt/homebrew/opt/ffmpeg-full/bin/ffmpeg}"
SRC_DIR="${1:-/Users/lidechun/项目/prism-player-web/docs/public/video-guide}"

if ! command -v "$FFMPEG" >/dev/null 2>&1; then
  echo "ffmpeg not found: $FFMPEG" >&2
  exit 1
fi

if [ ! -d "$SRC_DIR" ]; then
  echo "dir not found: $SRC_DIR" >&2
  exit 1
fi

for in in "$SRC_DIR"/*.mp4; do
  [ -f "$in" ] || continue
  out="${in%.mp4}.webp"
  echo "→ $(basename "$out")"

  "$FFMPEG" -y -i "$in" \
    -vf "fps=10,scale=960:-1:flags=lanczos" \
    -c:v libwebp -quality 75 -loop 0 -an -fps_mode passthrough \
    "$out" >/dev/null
done

