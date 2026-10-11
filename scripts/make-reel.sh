#!/usr/bin/env bash
# Turn a full-size master into a web-ready preview clip + poster for the grid.
#
#   ./scripts/make-reel.sh <master> <slug> [options]
#
#   --start 00:00:12   where to start in the master   (default 0)
#   --duration 10      seconds to keep                (default 10)
#   --aspect 16:9      16:9 | 9:16 | 4:5 | 1:1 | 2.39 (default 16:9)
#   --crf 31           quality, lower = bigger file   (default 31)
#   --audio            keep the audio track           (default: stripped)
#
# Example:
#   ./scripts/make-reel.sh ~/exports/brand-film.mov nightfall --start 00:01:04 --duration 9
set -euo pipefail

command -v ffmpeg >/dev/null || { echo "ffmpeg not found. brew install ffmpeg"; exit 1; }
[ $# -ge 2 ] || { sed -n '2,16p' "$0" | sed 's/^# \{0,1\}//'; exit 1; }

MASTER=$1; SLUG=$2; shift 2
START=0; DURATION=10; ASPECT="16:9"; CRF=31; AUDIO="-an"

while [ $# -gt 0 ]; do
  case $1 in
    --start) START=$2; shift 2 ;;
    --duration) DURATION=$2; shift 2 ;;
    --aspect) ASPECT=$2; shift 2 ;;
    --crf) CRF=$2; shift 2 ;;
    --audio) AUDIO="-c:a aac -b:a 96k"; shift ;;
    *) echo "unknown option: $1"; exit 1 ;;
  esac
done

case $ASPECT in
  16:9) W=1280; H=720 ;;
  9:16) W=720;  H=1280 ;;
  4:5)  W=800;  H=1000 ;;
  1:1)  W=900;  H=900 ;;
  2.39) W=1280; H=536 ;;
  *) echo "unsupported aspect: $ASPECT"; exit 1 ;;
esac

OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/reel"
mkdir -p "$OUT_DIR"
# Fill the frame, then crop — never letterbox, the card is already the right shape.
VF="scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},fps=24"

ffmpeg -v error -y -ss "$START" -t "$DURATION" -i "$MASTER" \
  -vf "$VF" -c:v libx264 -crf "$CRF" -preset slow -pix_fmt yuv420p \
  -movflags +faststart $AUDIO "$OUT_DIR/$SLUG.mp4"

# Poster from a frame a second into the clip, so it matches what plays.
ffmpeg -v error -y -ss "$START" -i "$MASTER" \
  -vf "scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},scale=iw/2:-2" \
  -frames:v 1 -q:v 5 "$OUT_DIR/$SLUG.jpg"

SIZE=$(du -h "$OUT_DIR/$SLUG.mp4" | cut -f1)
echo "public/reel/$SLUG.mp4  $SIZE  (${W}x${H}, ${DURATION}s)"
echo "public/reel/$SLUG.jpg  $(du -h "$OUT_DIR/$SLUG.jpg" | cut -f1)"
echo
echo "Now point an entry in src/lib/work.ts at /reel/$SLUG.mp4 and /reel/$SLUG.jpg"
[ "${SIZE%M*}" -ge 3 ] 2>/dev/null && echo "WARNING: over 3MB — raise --crf or cut --duration" || true
