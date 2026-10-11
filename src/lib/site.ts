export const profile = {
  brand: "Editrix Corp",
  lead: "Salil Salalia",
  role: "Video editing team",
  base: "India — working remote",
  email: "editrixcorp@gmail.com",
  phone: "+91 94695 14140",
  phoneHref: "tel:+919469514140",
  instagram: "https://www.instagram.com/editrixco1/",
  instagramHandle: "@editrixco1",
  availability: "Taking on new projects",
  intro:
    "We are a group of editors who work as a team, each one in their own niche. The video is the bridge between a creator and the audience, and our job is to make sure that bridge holds.",
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#craft", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

export const stats = [
  { value: "03", unit: "years", label: "Editing as a team" },
  { value: "05", unit: "tools", label: "Resolve to CapCut" },
  { value: "07", unit: "cuts", label: "In this reel" },
] as const;

export const services = [
  "Short-form edits",
  "Long-form edits",
  "Color grading",
  "Reels and shorts",
  "Thumbnails",
  "Motion graphics",
  "Brand films",
  "Podcast cuts",
] as const;

export const toolkit = [
  { name: "DaVinci Resolve", use: "Edit, color, finishing" },
  { name: "Adobe Photoshop", use: "Thumbnails, key art" },
  { name: "CapCut", use: "Short-form and captions" },
  { name: "Canva", use: "Templates and social kits" },
  { name: "PicsArt", use: "Quick asset cleanup" },
] as const;

export const capabilities = [
  {
    title: "Editing and story",
    body: "Selects, structure and pacing. We cut for the platform the video lands on, so a long-form edit and a 30-second version are not the same edit twice.",
    tools: ["DaVinci Resolve", "CapCut"],
    tone: "blue",
  },
  {
    title: "Color",
    body: "Grading in Resolve, matched across cameras and shoot days so a series of videos looks like one body of work rather than separate uploads.",
    tools: ["DaVinci Resolve", "Camera match"],
    tone: "yellow",
  },
  {
    title: "Graphics and thumbnails",
    body: "Titles, lower thirds and the thumbnail that decides whether anyone clicks. Built from the same frames as the edit, not sourced separately.",
    tools: ["Photoshop", "Canva", "PicsArt"],
    tone: "green",
  },
  {
    title: "Short-form and delivery",
    body: "Vertical cutdowns reframed shot by shot, captions burned in, exported in every ratio your channels need and named so nobody has to rename them.",
    tools: ["CapCut", "9:16 / 1:1 / 4:5", "H.264 masters"],
    tone: "red",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Brief and footage",
    body: "Tell us what the video is for and where it goes. Send the rushes on any drive link you already use. We come back with the approach before cutting.",
  },
  {
    step: "02",
    title: "First cut",
    body: "You see structure early, while it is still cheap to change. Notes come back on one link with timecodes rather than scattered across chats.",
  },
  {
    step: "03",
    title: "Grade, graphics, delivery",
    body: "Color, titles and thumbnails on the approved cut. Masters plus every ratio your channels need land together in one folder.",
  },
] as const;

export const studioNote = {
  quote:
    "The bridge between a content creator and the audience is the video. We make sure that bridge is solid.",
  source: "Editrix Corp",
} as const;

export const faqs = [
  {
    q: "What kind of work do you take on?",
    a: "Short-form and long-form content for creators and brands: YouTube edits, reels and shorts, brand films, podcast cuts and the thumbnails that go with them. We work as a team, so a project is matched to the editor whose niche it sits in.",
  },
  {
    q: "What do you edit in?",
    a: "DaVinci Resolve for editing, color and finishing, CapCut for short-form and captions, and Photoshop, Canva and PicsArt for thumbnails, titles and social assets.",
  },
  {
    q: "How should we send footage?",
    a: "Any drive link you already use — Google Drive, Dropbox or WeTransfer. Send the camera files rather than compressed exports, plus separately recorded audio and your brand assets if you have them.",
  },
  {
    q: "What comes back at the end?",
    a: "The master in the ratio you asked for, plus the extra ratios your channels need, captions where they apply, and the thumbnail if that was part of the brief. Everything in one folder, named so it can be scheduled directly.",
  },
  {
    q: "How do we start?",
    a: "Message us on Instagram or email with what you are making, roughly how much footage there is and when it has to be live. You get a quote and a start date back before anything begins.",
  },
] as const;
