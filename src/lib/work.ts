export type Tone = "red" | "blue" | "green" | "yellow";

export type Work = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  tone: Tone;
  summary: string;
  tools: string[];
  src: string;
  poster: string;
  /** Mobile aspect box; on lg the bento row/col spans take over. */
  aspect: string;
  span: string;
};

export const works: Work[] = [
  {
    slug: "nightfall",
    title: "Nightfall",
    client: "Tatva Studios",
    category: "Brand film",
    year: "2026",
    duration: "2:14",
    role: "Edit, grade, sound design",
    tone: "blue",
    summary:
      "Three cities, 40 hours of rushes, one film about why the studio still shoots on location. Cut around the interview beats, graded cool so the practical lights carry the warmth.",
    tools: ["Premiere Pro", "Resolve", "Fairlight"],
    src: "/reel/nightfall.mp4",
    poster: "/reel/nightfall.jpg",
    aspect: "aspect-[16/9]",
    span: "lg:col-span-7 lg:row-span-4",
  },
  {
    slug: "aurora",
    title: "Aurora",
    client: "Orbit Audio",
    category: "Social cutdown",
    year: "2026",
    duration: "0:28",
    role: "Edit, motion",
    tone: "green",
    summary:
      "Vertical cutdown built from the launch film, not cropped out of it. Reframed shot by shot, captions burned in, hook landing inside the first second.",
    tools: ["After Effects", "9:16 master", "Burned captions"],
    src: "/reel/aurora.mp4",
    poster: "/reel/aurora.jpg",
    aspect: "aspect-[9/16]",
    span: "lg:col-span-5 lg:row-span-7",
  },
  {
    slug: "drift",
    title: "Drift",
    client: "Northbeam Cycles",
    category: "Launch spot",
    year: "2025",
    duration: "1:05",
    role: "Edit, conform, grade",
    tone: "yellow",
    summary:
      "Anamorphic launch spot finished in 2.39:1. Timed to a music bed that changed twice in the last week, so every cut was built to survive a tempo swap.",
    tools: ["Resolve", "ACES", "2.39:1"],
    src: "/reel/drift.mp4",
    poster: "/reel/drift.jpg",
    aspect: "aspect-[2.39/1]",
    span: "lg:col-span-7 lg:row-span-3",
  },
  {
    slug: "tidal",
    title: "Tidal",
    client: "Blue Current Trust",
    category: "Documentary",
    year: "2025",
    duration: "14:20",
    role: "Edit, archive research",
    tone: "blue",
    summary:
      "Excerpt from a 14-minute field documentary on coastal restoration. Transcript-first edit across six interviews and two years of expedition footage.",
    tools: ["Premiere Pro", "Transcript edit", "Archive"],
    src: "/reel/tidal.mp4",
    poster: "/reel/tidal.jpg",
    aspect: "aspect-[16/9]",
    span: "lg:col-span-4 lg:row-span-4",
  },
  {
    slug: "meridian",
    title: "Meridian",
    client: "Hale & Thorne",
    category: "Product film",
    year: "2024",
    duration: "0:52",
    role: "Edit, grade",
    tone: "red",
    summary:
      "Black and white product film for a watchmaker, cut in 4:5 for feed placement. Contrast pushed until the case edges read at thumbnail size.",
    tools: ["Resolve", "4:5 master", "Monochrome grade"],
    src: "/reel/meridian.mp4",
    poster: "/reel/meridian.jpg",
    aspect: "aspect-[4/5]",
    span: "lg:col-span-4 lg:row-span-5",
  },
  {
    slug: "static",
    title: "Static",
    client: "Low Harbour",
    category: "Music video",
    year: "2025",
    duration: "3:41",
    role: "Edit, bleach bypass grade",
    tone: "red",
    summary:
      "Single-take performance intercut with a second-unit plate. Bleach bypass look built in-grade rather than in-camera so the band could change their mind late.",
    tools: ["Premiere Pro", "Resolve", "Beat-matched cut"],
    src: "/reel/static.mp4",
    poster: "/reel/static.jpg",
    aspect: "aspect-[16/9]",
    span: "lg:col-span-4 lg:row-span-4",
  },
  {
    slug: "harvest",
    title: "Harvest",
    client: "Ronin Coffee Roasters",
    category: "Documentary short",
    year: "2024",
    duration: "6:30",
    role: "Edit, grade, mix",
    tone: "yellow",
    summary:
      "Six minutes on a single harvest season in Chikmagalur. Warm, low-saturation grade held across four shoot days and two very different cameras.",
    tools: ["Resolve", "iZotope RX", "Camera match"],
    src: "/reel/harvest.mp4",
    poster: "/reel/harvest.jpg",
    aspect: "aspect-[16/9]",
    span: "lg:col-span-12 lg:row-span-4",
  },
];
