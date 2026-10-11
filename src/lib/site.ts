export const profile = {
  name: "Salil Salalia",
  role: "Film editor and colorist",
  base: "Mumbai — working remote across IST, CET and EST",
  email: "hello@salilsalalia.com",
  availability: "Taking on two projects from November 2026",
  intro:
    "I cut brand films, documentaries and launch spots. Most of my work is long-form footage turned into something a stranger will watch to the end — selects, structure, grade, mix, delivery.",
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#craft", label: "Craft" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

export const stats = [
  { value: "9", unit: "years", label: "Cutting full time" },
  { value: "142", unit: "films", label: "Delivered since 2017" },
  { value: "48", unit: "hours", label: "Typical first assembly" },
  { value: "11", unit: "countries", label: "Clients shipped for" },
] as const;

export const clients = [
  "Tatva Studios",
  "Northbeam Cycles",
  "Blue Current Trust",
  "Ronin Coffee Roasters",
  "Hale & Thorne",
  "Orbit Audio",
  "Sealine Hotels",
  "Low Harbour",
] as const;

export const capabilities = [
  {
    title: "Story and structure",
    body: "I start in the transcript, not the timeline. Paper edit first, then selects, then a rough that already has the ending it needs.",
    tools: ["Premiere Pro", "Resolve", "Transcript edit"],
    tone: "blue",
  },
  {
    title: "Color",
    body: "Node-based grading from log or raw. Matched across cameras and shoot days, with a show LUT you can hand to anyone downstream.",
    tools: ["DaVinci Resolve", "ACES", "Show LUTs"],
    tone: "yellow",
  },
  {
    title: "Sound and mix",
    body: "Dialogue cleanup, spot effects, music edit to picture. Delivered at broadcast loudness so nobody has to re-ride the fader.",
    tools: ["Fairlight", "iZotope RX", "-14 LUFS"],
    tone: "green",
  },
  {
    title: "Finishing",
    body: "Titles, lower thirds, light cleanup and tracked fixes. Masters plus every social ratio, named the way your team files things.",
    tools: ["After Effects", "9:16 / 1:1 / 4:5", "ProRes + H.264"],
    tone: "red",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Brief and footage",
    body: "A 30-minute call, then your rushes land in my drive. I come back with a paper edit and the shots I think carry the film.",
  },
  {
    step: "02",
    title: "First assembly in 48 hours",
    body: "You see structure early, while it is still cheap to change. Comments go on a Frame.io link, timecoded, no email threads.",
  },
  {
    step: "03",
    title: "Grade, mix, deliver",
    body: "Two rounds of revisions are built into every quote. Masters, captions and ratio variants land together in one folder.",
  },
] as const;

export const shortcuts = [
  { keys: ["J", "K", "L"], label: "Shuttle through 4TB of rushes" },
  { keys: ["Q"], label: "Ripple trim to playhead" },
  { keys: ["Cmd", "K"], label: "Add edit across all tracks" },
  { keys: ["Opt", "["], label: "Mark selects as I watch" },
] as const;

export const testimonial = {
  quote:
    "We sent Salil 40 hours from a three-city shoot and a brief that kept changing. The first cut came back in two days and it was already the film we argued about wanting.",
  person: "Priya Nanda",
  title: "Head of Brand, Tatva Studios",
} as const;

export const faqs = [
  {
    q: "What does a project usually cost?",
    a: "A 60 to 90 second brand film with grade and mix sits between ₹1.8L and ₹3.2L depending on footage volume and how many ratio variants you need. Documentary work is quoted by the week. You get a fixed number before anything starts.",
  },
  {
    q: "How fast can you turn a cut around?",
    a: "First assembly within 48 hours of receiving footage, on every project. Full delivery with grade, mix and variants is typically seven to ten working days.",
  },
  {
    q: "How should I hand over footage?",
    a: "A shared drive link is fine — Frame.io, Dropbox or a hard drive if it is over 2TB. Send camera originals, not proxies, plus any audio recorded separately and the brand kit if one exists.",
  },
  {
    q: "What happens if we want changes?",
    a: "Two rounds of revisions are in every quote, and a round means one consolidated set of notes. Anything past that is billed hourly, agreed in writing before I open the project.",
  },
  {
    q: "Do you take on retainers?",
    a: "Yes, for teams shipping four or more films a quarter. A retainer buys reserved weeks in the calendar and a shared project structure, which makes everything after the first film much faster.",
  },
] as const;
