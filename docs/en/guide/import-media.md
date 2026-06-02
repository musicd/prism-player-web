# Import Video & Subtitles

Prism Lines uses **local video + subtitles** as raw material. Import TV series, films, interviews, or any subtitled video.

## Supported Video

Add files to the in-app library or use Import to pick a local path. Common formats include MP4, MKV, MOV (see your build’s release notes).

::: tip
For a first run, choose a moderately sized episode with clear subtitles to experience the full workflow quickly.
:::

## Subtitle Sources

| Type | Notes |
|------|--------|
| Embedded | Subtitle tracks inside the video file; pick a language track at playback |
| External | `.srt`, `.ass`, etc. alongside the video or via a path you specify |
| Multilingual | Keep multiple tracks; switch or compare while learning (if supported in your version) |

If timing is slightly off, adjust offset in [Settings](/en/guide/settings).

## Auxiliary subtitles (optional)

**Preferred:** Import a **bilingual subtitle** file when you can—one timeline with both your target language and a native-language (or reference) line. Bilingual tracks usually stay better aligned on the timeline than pairing a primary track with a separate translation file.

**Fallback:** If no suitable bilingual file is available, Prism Lines lets you add an **auxiliary subtitle** after the **primary** subtitles are loaded (for example a Chinese-only or native-language translation track for reading alongside the show). Auxiliary text is for on-screen reference only; it is **not** used for word parsing or your vocabulary list.

**How to add auxiliary subtitles:**

1. Import primary subtitles first (see above).
2. In the player, open the subtitle panel via the **top-right** subtitle/info control on the video.
3. Under the primary subtitle status, choose **add auxiliary subtitles** (or update/remove if one is already loaded).
4. Pick a `.srt`, `.vtt`, or `.ass` file. Auxiliary lines appear **above** the primary subtitles during playback. Scroll the wheel on the auxiliary text to resize it only; scroll on the primary line to resize the main subtitles only—the two sizes are independent.

## How Material Is Split

After import, the app:

1. Parses the subtitle timeline;
2. Maps each cue to a **learning unit** (sentence + start/end time);
3. Links video segments for playback during study.

No manual cutting—Prism Lines splits by subtitles automatically. Next: [Learning Session](/en/guide/learning-session).

## Compliance

- Use video and subtitles you **have the right to use**.
- Prism Lines does not provide or distribute any media; it only processes files on your computer.
