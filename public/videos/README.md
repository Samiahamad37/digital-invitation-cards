Put your own (or licensed) vertical clips here, e.g. `hero.mp4`, `event.mp4`,
then set the paths in `content/invite.ts` → `media`.

Tips:
- 1080x1920, 2–6 seconds, no text baked in (the site adds the text).
- Compress to under ~2 MB:
  ffmpeg -i in.mp4 -vf scale=720:-2 -c:v libx264 -crf 26 -an -movflags +faststart hero.mp4
