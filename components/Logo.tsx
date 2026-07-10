import { site } from "@/lib/site-config";

/** Twelve solar rays, tapered, radiating from the disc. */
const RAYS = Array.from({ length: 12 }, (_, i) => i * 30);

type MarkProps = {
  /** Distinguishes gradient ids when several logos share a document. */
  idPrefix: string;
  className?: string;
};

/**
 * The sun/token mark: a coin-like disc with a radiating corona.
 * Reads as a sun at large sizes and as a token at favicon sizes.
 */
export function LogoMark({ idPrefix, className }: MarkProps) {
  const discId = `${idPrefix}-disc`;
  const rayId = `${idPrefix}-ray`;

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={`${site.name} mark`}
      fill="none"
    >
      <defs>
        <linearGradient id={discId} x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC94D" />
          <stop offset="0.45" stopColor="#F58A07" />
          <stop offset="1" stopColor="#FF6A3D" />
        </linearGradient>
        <linearGradient id={rayId} x1="24" y1="4" x2="24" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6A3D" stopOpacity="0" />
          <stop offset="0.55" stopColor="#F58A07" />
          <stop offset="1" stopColor="#FFC94D" />
        </linearGradient>
      </defs>

      {RAYS.map((angle) => (
        <path
          key={angle}
          d="M24 4.5 L25.6 18 L22.4 18 Z"
          fill={`url(#${rayId})`}
          transform={`rotate(${angle} 24 24)`}
        />
      ))}

      {/* Orbit ring — the token's edge. */}
      <circle
        cx="24"
        cy="24"
        r="14.25"
        stroke={`url(#${discId})`}
        strokeOpacity="0.35"
        strokeWidth="1"
      />

      {/* Core disc. */}
      <circle cx="24" cy="24" r="11" fill={`url(#${discId})`} />
      {/* Struck hole — makes the disc read as a minted coin. */}
      <circle cx="24" cy="24" r="4.25" fill="#070A12" />
      <circle cx="24" cy="24" r="4.25" stroke="#FFC94D" strokeOpacity="0.5" strokeWidth="0.75" />
    </svg>
  );
}

type LogoProps = {
  idPrefix?: string;
  className?: string;
  /** Hides the wordmark, leaving only the mark. */
  markOnly?: boolean;
};

export default function Logo({ idPrefix = "logo", className, markOnly = false }: LogoProps) {
  if (markOnly) {
    return <LogoMark idPrefix={idPrefix} className={className ?? "h-8 w-8"} />;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark idPrefix={idPrefix} className="h-8 w-8 shrink-0" />
      <span className="font-display text-xl font-bold tracking-tightest text-ink">
        {site.wordmark.lead}
        <span className="text-gradient">{site.wordmark.accent}</span>
      </span>
    </span>
  );
}
