/**
 * The hero backdrop: a glowing solar core, orbiting rings and a faint starfield.
 *
 * Deliberately CSS-only (no framer-motion, no client bundle) — the keyframes
 * live in `tailwind.config.ts` and the global `prefers-reduced-motion` rule in
 * `globals.css` halts them all. Star positions come from a seeded generator so
 * the markup is deterministic.
 */

function seededStars(count: number) {
  let seed = 20260710;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(next() * 100).toFixed(3)}%`,
    top: `${(next() * 100).toFixed(3)}%`,
    size: next() > 0.85 ? 2 : 1,
    opacity: 0.15 + next() * 0.45,
  }));
}

const STARS = seededStars(70);

export default function SolarCore() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Dotted grid, faded toward the edges. */}
      <div className="fade-edges absolute inset-0 bg-grid opacity-60" />

      {/* Starfield. */}
      <div className="absolute inset-0">
        {STARS.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* The core: stacked radial glows, centred behind the headline. */}
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
        <div className="animate-core-pulse h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(255,176,32,0.30)_0%,rgba(245,138,7,0.14)_38%,rgba(255,106,61,0.05)_58%,transparent_72%)] blur-[2px] sm:h-[760px] sm:w-[760px]" />
        <div className="absolute inset-0 m-auto h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(255,201,77,0.35)_0%,rgba(245,138,7,0.10)_55%,transparent_75%)] blur-xl sm:h-[240px] sm:w-[240px]" />
      </div>

      {/* Orbit rings. */}
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin-slow h-[420px] w-[420px] rounded-full border border-solar-500/[0.09] sm:h-[620px] sm:w-[620px]">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-solar-400/70 shadow-[0_0_12px_2px_rgba(255,201,77,0.5)]" />
        </div>
      </div>
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin-reverse h-[640px] w-[640px] rounded-full border border-plasma/[0.06] sm:h-[900px] sm:w-[900px]">
          <span className="absolute left-0 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-plasma/60 shadow-[0_0_10px_2px_rgba(110,231,240,0.35)]" />
        </div>
      </div>

      {/* Blend the whole backdrop into the page below. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-void" />
    </div>
  );
}
