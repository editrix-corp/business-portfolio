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

## Still to replace

- `public/reel/*` — placeholder clips cut from Creative Commons footage
  (Blender Foundation's *Sintel* and *Big Buck Bunny*, plus a jellyfish plate).
  Swap in real work and update `src/lib/work.ts`.
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
