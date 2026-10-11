// Hand-rolled icon primitives: uniform 2px stroke, 24px box, no icon dependency.
type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function PlayIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className} fill="currentColor" stroke="none">
      <path d="M8 5.6a1 1 0 0 1 1.52-.85l9.2 5.6a1 1 0 0 1 0 1.7l-9.2 5.6A1 1 0 0 1 8 16.8Z" />
    </svg>
  );
}

export function SoundOnIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 9.5h3.2L12 5.5v13L7.2 14.5H4Z" />
      <path d="M16.2 9a4 4 0 0 1 0 6" />
      <path d="M18.8 6.4a7.6 7.6 0 0 1 0 11.2" />
    </svg>
  );
}

export function SoundOffIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 9.5h3.2L12 5.5v13L7.2 14.5H4Z" />
      <path d="m16.5 9.5 5 5" />
      <path d="m21.5 9.5-5 5" />
    </svg>
  );
}

export function PlusIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function CloseIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </svg>
  );
}

export function ArrowDownIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 5v14" />
      <path d="m5.5 12.5 6.5 6.5 6.5-6.5" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 7 7.3 5.2a1.5 1.5 0 0 0 1.8 0L20.2 7" />
    </svg>
  );
}

export function PhoneIcon({ className = "size-4" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7.2 3.5h2.1l1.5 3.8-1.8 1.3a11 11 0 0 0 5.4 5.4l1.3-1.8 3.8 1.5v2.1a2.2 2.2 0 0 1-2.4 2.2A15.6 15.6 0 0 1 5 5.9a2.2 2.2 0 0 1 2.2-2.4Z" />
    </svg>
  );
}
