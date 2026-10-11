import { SectionHeader } from "@/components/ui/SectionHeader";
import { WorkGrid } from "./WorkGrid";

export function WorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeader
        index="01"
        eyebrow="Selected work"
        title="Seven cuts from the last three years."
        note="Hover any frame to preview it. Open one for the brief, the role and the toolchain."
      />
      <h2 id="work-heading" className="sr-only">
        Selected work
      </h2>
      <WorkGrid />
    </section>
  );
}
