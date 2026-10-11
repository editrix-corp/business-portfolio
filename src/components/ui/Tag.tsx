import type { Tone } from "@/lib/work";

const toneMap: Record<Tone | "neutral", string> = {
  red: "bg-pale-red text-deep-red",
  blue: "bg-pale-blue text-deep-blue",
  green: "bg-pale-green text-deep-green",
  yellow: "bg-pale-yellow text-deep-yellow",
  neutral: "bg-bone text-muted",
};

export function Tag({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: Tone | "neutral";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] ${toneMap[tone]}`}
    >
      {children}
    </span>
  );
}
