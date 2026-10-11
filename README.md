# Editrix Corp — portfolio

Single-page portfolio for a video editing team. Seven work cards play their
clips inline (hover on pointer devices, in-view on touch) and open into a
lightbox with the approach, role and tools. Liquid motion throughout: inertial
scroll, scroll-velocity drag, gooey background blobs, magnetic buttons and a
trailing cursor — all of it switched off under `prefers-reduced-motion`.

Next.js 16 (App Router), Tailwind CSS v4, Lenis. No UI or icon library.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run e2e        # Playwright, desktop + mobile
```

## Share a quick public link

```bash
npm run build && npx next start -p 3111
cloudflared tunnel --url http://localhost:3111
```

The printed `*.trycloudflare.com` URL lives as long as the command runs.

## Deploy to Cloudflare Pages

The site is fully static:

```bash
npm run export                 # writes ./out
npx wrangler login
npx wrangler pages deploy out --project-name editrix-portfolio
```

Set `NEXT_PUBLIC_SITE_URL` to the live domain before building so Open Graph
tags resolve to absolute URLs.

## How the video is delivered

The approach is the one web.dev and Squarespace Engineering both recommend for
galleries, and it is why a page with 12 videos on it still loads instantly:

| Surface | What loads | Why |
|---|---|---|
| Grid card | poster JPEG only, `preload="none"` | nothing downloads until hover |
| Hover / in view | 7s silent loop, 170–780KB | enough to show the cut |
| Lightbox | full cut with audio, 1–10MB | only for someone who asked for it |
| Hero | 24s showreel, `preload="metadata"` | the one file that autoplays |

Everything is self-hosted H.264 MP4 with `+faststart`, served from Cloudflare's
edge. No YouTube embed, no third-party player, no tracking scripts.

Source footage was HEVC, which Chrome and Firefox often cannot decode — every
clip is transcoded to H.264 on the way in.

## Adding your own videos

The grid never loads a master file. Each card ships a poster JPEG and a short
muted loop with `preload="none"`, so nothing downloads until someone hovers.
Keep each loop under ~2MB and the page stays fast no matter how many cards
there are.

```bash
./scripts/make-reel.sh ~/exports/brand-film.mov nightfall --start 00:01:04 --duration 9
./scripts/make-reel.sh ~/exports/reel-vertical.mp4 aurora --aspect 9:16
```

That writes `public/reel/<slug>.mp4` and `.jpg`. Point an entry in
`src/lib/work.ts` at them.

Cloudflare Pages rejects any single file over 25 MiB, so keep full cuts under
that — 720p at CRF 28 puts a 70-second vertical at about 10MB. Anything longer
than a few minutes belongs on YouTube or Cloudflare Stream instead, embedded in
the lightbox while the card keeps its local loop.

## Security

`public/_headers` ships the policy; Cloudflare applies it at the edge. Verify
after deploying with `curl -I https://your-domain`.

- **CSP with no `'unsafe-inline'` for scripts.** Next emits inline bootstrap
  scripts whose contents change every build, so `scripts/postbuild.mjs` hashes
  them and writes the hashes into the policy. `style-src` still needs
  `'unsafe-inline'` because React writes inline style attributes for the motion
  transforms; that is a much smaller risk than script injection.
- HSTS with preload, `X-Frame-Options: DENY`, `frame-ancestors 'none'`,
  `nosniff`, `strict-origin-when-cross-origin`, and a Permissions-Policy that
  denies camera, microphone, geolocation, payment and USB.
- `form-action 'none'` — the site has no forms, so nothing should ever post.
- No third-party origins at runtime. Fonts are self-hosted by `next/font`, so
  the page contacts no host but its own. Verified with a request log.
- No secrets, no API keys, no backend, no user input. The only
  `dangerouslySetInnerHTML` is the JSON-LD block, built from local constants.

The policy is tested, not assumed: the export is served locally with the real
headers applied and checked for CSP violations and for successful hydration.

## SEO

- `VideoObject` JSON-LD for all eight videos (name, description, thumbnailUrl,
  uploadDate, duration, contentUrl) plus a `ProfessionalService` node linking
  them to the studio, its contact details and its Instagram.
- Open Graph and Twitter card with a generated 1200×630 image.
- `robots.txt`, `sitemap.xml` and the canonical URL are written at export time
  from `NEXT_PUBLIC_SITE_URL`.
- One `h1`, section-level `h2`s, semantic `section`/`article`/`figure`/`dl`,
  and `lang="en"`.
- Validate the markup at https://search.google.com/test/rich-results once live.

## Still to replace

- `public/reel/*` — placeholder clips cut from Creative Commons footage
  (Blender Foundation's *Sintel* and *Big Buck Bunny*, plus a jellyfish plate).
- Project titles, runtimes and years in `src/lib/work.ts` are illustrative.

## Measured

Production build, local Chrome: LCP 0.99s, FCP 0.15s, CLS 0, TBT 0ms.
Transfer: 144kb JS, 7.3kb CSS, 66kb fonts. Scrolling holds ~57fps with every
liquid effect running. axe-core reports zero violations.

## Structure

```
src/
├── app/            layout, page, design tokens + motion in globals.css
├── components/
│   ├── hero/       hero + showreel player (window chrome, sound toggle)
│   ├── work/       bento grid, hover-preview cards, lightbox
│   ├── motion/     smooth scroll, goo blobs, magnetic, cursor, marquee
│   ├── sections/   services, capabilities, process, note, faq, contact
│   ├── site/       nav, footer, grain + blob layer
│   └── ui/         Reveal, Tag, SectionHeader, inline icons
└── lib/            site.ts (copy, contact) and work.ts (projects)
e2e/                Playwright specs
```
