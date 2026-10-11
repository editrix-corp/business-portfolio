export type Tone = "red" | "blue" | "green" | "yellow";

export type Work = {
  slug: string;
  title: string;
  /** Format descriptor shown under the title — replace with the client once the real cut is in. */
  format: string;
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
    format: "16:9 — brand film",
    category: "Brand film",
    year: "2026",
    duration: "2:14",
    role: "Edit, color",
    tone: "blue",
    summary:
      "Cut around the interview beats and graded cool, so the practical lights in frame carry all of the warmth.",
    tools: ["DaVinci Resolve", "Photoshop"],
    src: "/reel/nightfall.mp4",
    poster: "/reel/nightfall.jpg",
    aspect: "aspect-[16/9]",
    span: "lg:col-span-7 lg:row-span-4",
  },
  {
    slug: "aurora",
    title: "Aurora",
    format: "9:16 — social cutdown",
    category: "Short form",
    year: "2026",
    duration: "0:28",
    role: "Edit, captions",
    tone: "green",
    summary:
      "Vertical cutdown rebuilt from the long edit rather than cropped out of it. Reframed shot by shot with the hook inside the first second.",
    tools: ["CapCut", "DaVinci Resolve"],
    src: "/reel/aurora.mp4",
    poster: "/reel/aurora.jpg",
    aspect: "aspect-[9/16]",
    span: "lg:col-span-5 lg:row-span-7",
  },
  {
    slug: "drift",
    title: "Drift",
    format: "2.39:1 — launch spot",
    category: "Launch spot",
    year: "2025",
    duration: "1:05",
    role: "Edit, color",
    tone: "yellow",
    summary:
      "Finished wide at 2.39:1 and timed to a music bed that changed twice, so every cut was built to survive a tempo swap.",
    tools: ["DaVinci Resolve"],
    src: "/reel/drift.mp4",
    poster: "/reel/drift.jpg",
    aspect: "aspect-[2.39/1]",
    span: "lg:col-span-7 lg:row-span-3",
  },
  {
    slug: "tidal",
    title: "Tidal",
    format: "16:9 — long form",
    category: "Long form",
    year: "2025",
    duration: "14:20",
    role: "Edit, color",
    tone: "blue",
    summary:
      "Excerpt from a long-form field piece. Structured off the transcript first so the story held before a single shot was graded.",
    tools: ["DaVinci Resolve"],
    src: "/reel/tidal.mp4",
    poster: "/reel/tidal.jpg",
    aspect: "aspect-[16/9]",
    span: "lg:col-span-4 lg:row-span-4",
  },
  {
    slug: "meridian",
    title: "Meridian",
    format: "4:5 — product film",
    category: "Product film",
    year: "2024",
    duration: "0:52",
    role: "Edit, color, key art",
    tone: "red",
    summary:
      "Monochrome product film cut in 4:5 for feed placement, with contrast pushed until the edges still read at thumbnail size.",
    tools: ["DaVinci Resolve", "Photoshop"],
    src: "/reel/meridian.mp4",
    poster: "/reel/meridian.jpg",
    aspect: "aspect-[4/5]",
    span: "lg:col-span-4 lg:row-span-5",
  },
  {
    slug: "static",
    title: "Static",
    format: "16:9 — music video",
    category: "Music video",
    year: "2025",
    duration: "3:41",
    role: "Edit, color",
    tone: "red",
    summary:
      "Performance take intercut with a second plate. The washed look was built in the grade rather than in camera, so it stayed changeable to the end.",
    tools: ["DaVinci Resolve"],
    src: "/reel/static.mp4",
    poster: "/reel/static.jpg",
    aspect: "aspect-[16/9]",
    span: "lg:col-span-4 lg:row-span-4",
  },
  {
    slug: "harvest",
    title: "Harvest",
    format: "16:9 — documentary short",
    category: "Documentary",
    year: "2024",
    duration: "6:30",
    role: "Edit, color, thumbnail",
    tone: "yellow",
    summary:
      "Warm, low-saturation grade held across four shoot days and two very different cameras so the short reads as one piece.",
    tools: ["DaVinci Resolve", "Photoshop", "Canva"],
    src: "/reel/harvest.mp4",
    poster: "/reel/harvest.jpg",
    aspect: "aspect-[16/9]",
    span: "lg:col-span-12 lg:row-span-4",
  },
];
