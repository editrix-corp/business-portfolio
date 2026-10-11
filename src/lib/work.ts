/** Set when building for GitHub Pages, which serves the site under /<repo>. */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE}${path}`;

export type Tone = "red" | "blue" | "green" | "yellow";

export type Work = {
  slug: string;
  title: string;
  /** Format descriptor shown under the title on the card. */
  format: string;
  category: string;
  duration: string;
  /** Seconds — used for the VideoObject ISO 8601 duration. */
  seconds: number;
  role: string;
  tone: Tone;
  summary: string;
  /** Visible craft in the cut, not a claim about which app was used. */
  techniques: string[];
  /** Short silent loop for the grid. */
  loop: string;
  /** Full cut with audio, played in the lightbox. */
  src: string;
  poster: string;
  /** true = 16:9, false = 9:16. Drives card shape, grid span and dialog shape. */
  wide: boolean;
  /** Bento placement from `lg` up; below that the grid is a simple two-column. */
  span: string;
  /** Mobile-only running order, so vertical cards pair off instead of
      leaving a hole next to a full-width landscape card. */
  order: string;
};

const rawWorks: Work[] = [
  {
    slug: "signal",
    title: "One Year On",
    format: "16:9 — creator explainer",
    category: "Explainer",
    duration: "0:16",
    seconds: 16,
    role: "Edit, motion graphics",
    tone: "blue",
    summary:
      "Talking-head explainer carried by on-screen numbers. Figures animate in on the beat of the delivery so the point lands before the sentence finishes.",
    techniques: ["Animated figures", "Device mockups", "Beat-matched cuts"],
    loop: "/reel/signal-loop.mp4",
    src: "/reel/signal.mp4",
    poster: "/reel/signal.jpg",
    wide: true,
    span: "lg:col-span-7 lg:row-span-4",
    order: "order-1",
  },
  {
    slug: "bulletin",
    title: "Bulletin",
    format: "9:16 — news short",
    category: "News",
    duration: "0:22",
    seconds: 22,
    role: "Edit, graphics",
    tone: "red",
    summary:
      "Vertical news short built from stills and headline crops. Each frame is composed so the subject reads at phone size with the caption never covering a face.",
    techniques: ["Still compositing", "Headline crops", "Hindi captions"],
    loop: "/reel/bulletin-loop.mp4",
    src: "/reel/bulletin.mp4",
    poster: "/reel/bulletin.jpg",
    wide: false,
    span: "lg:col-span-5 lg:row-span-7",
    order: "order-3",
  },
  {
    slug: "crosstalk",
    title: "Crosstalk",
    format: "16:9 — podcast cut",
    category: "Podcast",
    duration: "0:26",
    seconds: 26,
    role: "Edit, motion graphics",
    tone: "yellow",
    summary:
      "Interview cut with full-frame graphic breaks. The graphics take over whenever the audio carries the idea alone, so the viewer gets something to watch during the explanation.",
    techniques: ["Graphic breaks", "Looping diagrams", "Two-camera edit"],
    loop: "/reel/crosstalk-loop.mp4",
    src: "/reel/crosstalk.mp4",
    poster: "/reel/crosstalk.jpg",
    wide: true,
    span: "lg:col-span-7 lg:row-span-3",
    order: "order-2",
  },
  {
    slug: "daylight",
    title: "Daylight",
    format: "9:16 — lifestyle reel",
    category: "Lifestyle",
    duration: "0:37",
    seconds: 37,
    role: "Edit, color, captions",
    tone: "green",
    summary:
      "Outdoor reel cut to the cadence of the voiceover. Graded warm across changing light so a shot in shade and a shot in sun sit next to each other without a jump.",
    techniques: ["Warm grade", "Light matching", "Kinetic captions"],
    loop: "/reel/daylight-loop.mp4",
    src: "/reel/daylight.mp4",
    poster: "/reel/daylight.jpg",
    wide: false,
    span: "lg:col-span-4 lg:row-span-7",
    order: "order-4",
  },
  {
    slug: "longhand",
    title: "Longhand",
    format: "9:16 — storytelling reel",
    category: "Storytelling",
    duration: "0:46",
    seconds: 46,
    role: "Edit, captions",
    tone: "blue",
    summary:
      "A 46-second piece to camera, tightened line by line. Every breath and restart is cut out, and the captions are timed to arrive a frame before the word.",
    techniques: ["Line-level tightening", "Timed captions", "Cutaway inserts"],
    loop: "/reel/longhand-loop.mp4",
    src: "/reel/longhand.mp4",
    poster: "/reel/longhand.jpg",
    wide: false,
    span: "lg:col-span-4 lg:row-span-7",
    order: "order-5",
  },
  {
    slug: "chamber",
    title: "Chamber",
    format: "9:16 — product explainer",
    category: "Product",
    duration: "0:50",
    seconds: 50,
    role: "Edit, color, graphics",
    tone: "yellow",
    summary:
      "Walkthrough of equipment on a lit floor. Labels are tracked to the hardware as the camera moves, so the viewer always knows which unit is being described.",
    techniques: ["Tracked labels", "Low-light grade", "B-roll coverage"],
    loop: "/reel/chamber-loop.mp4",
    src: "/reel/chamber.mp4",
    poster: "/reel/chamber.jpg",
    wide: false,
    span: "lg:col-span-4 lg:row-span-7",
    order: "order-6",
  },
  {
    slug: "archive",
    title: "Archive",
    format: "9:16 — history short",
    category: "Documentary",
    duration: "1:09",
    seconds: 69,
    role: "Edit, research, captions",
    tone: "red",
    summary:
      "Longest cut in the reel. Scanned newspaper pages and photographs are intercut with the narration, each held exactly long enough to be read at phone size.",
    techniques: ["Archival stills", "Ken Burns moves", "Hindi captions"],
    loop: "/reel/archive-loop.mp4",
    src: "/reel/archive.mp4",
    poster: "/reel/archive.jpg",
    wide: false,
    span: "lg:col-span-5 lg:row-span-7",
    order: "order-7",
  },
  {
    slug: "ironwork",
    title: "Ironwork",
    format: "16:9 — fitness edit",
    category: "Fitness",
    duration: "0:16",
    seconds: 16,
    role: "Edit, color",
    tone: "green",
    summary:
      "Gym footage cut on the lift rather than the beat, with a blown-out high-key treatment on the finish so the last rep reads as the payoff.",
    techniques: ["Cut on action", "High-key finish", "Speed ramps"],
    loop: "/reel/ironwork-loop.mp4",
    src: "/reel/ironwork.mp4",
    poster: "/reel/ironwork.jpg",
    wide: true,
    span: "lg:col-span-7 lg:row-span-4",
    order: "order-9",
  },
];

export const works: Work[] = rawWorks.map((work) => ({
  ...work,
  loop: asset(work.loop),
  src: asset(work.src),
  poster: asset(work.poster),
}));
