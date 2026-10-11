# Salil Salalia — video editor portfolio

Minimalist, editorial single-page portfolio for a film editor. Seven work cards
play their clips inline (hover on pointer devices, in-view on touch) and open
into a lightbox with the brief, role and toolchain.

Built with Next.js 16 (App Router), Tailwind CSS v4, no UI or animation
dependencies — motion is CSS plus `IntersectionObserver`.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start
```

## Share a quick public link

Serves the local production build over a temporary Cloudflare tunnel:

```bash
npm run build && npm start -- -p 3111
cloudflared tunnel --url http://localhost:3111
```

The printed `*.trycloudflare.com` URL lives as long as the command runs.

## Deploy to Cloudflare Pages

The site is fully static, so it exports to plain files:

```bash
npm run export                 # writes ./out
npx wrangler login
npx wrangler pages deploy out --project-name salil-portfolio
```

## Media

Clips in `public/reel/` are cut and graded with ffmpeg from Creative Commons
sources (Blender Foundation's *Sintel* and *Big Buck Bunny*, plus a stock
jellyfish plate). Swap them for real work by replacing the files and the
entries in `src/lib/work.ts`.

## Structure

```
src/
├── app/            layout, page, design tokens in globals.css
├── components/
│   ├── hero/       hero + showreel player (window chrome, sound toggle)
│   ├── work/       bento grid, hover-preview cards, lightbox
│   ├── sections/   clients, capabilities, process, testimonial, faq, contact
│   ├── site/       nav, footer, ambient grain layer
│   └── ui/         Reveal, Tag, SectionHeader, inline icons
└── lib/            site.ts (copy) and work.ts (projects)
```
