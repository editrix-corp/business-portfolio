const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

/** Fixed, non-interactive depth layer: one slow warm light spot plus a film grain wash. */
export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div
        className="ambient absolute -top-1/4 left-1/2 size-[70vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(149,100,0,0.06) 0%, rgba(149,100,0,0) 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: `url("${NOISE}")` }}
      />
    </div>
  );
}
