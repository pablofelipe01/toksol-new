/**
 * The logo mark as a raw SVG string.
 *
 * Satori (which powers `next/og`) renders inline SVG unreliably but handles
 * `<img src="data:image/svg+xml;...">` faithfully, so the generated icon and
 * Open Graph images embed the mark through `markDataUri()`.
 */

const RAY_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

type MarkOptions = {
  /** Draws the dark rounded-square plate behind the mark. */
  plate?: boolean;
};

export function markSvg({ plate = false }: MarkOptions = {}): string {
  const rays = RAY_ANGLES.map(
    (a) => `<path d="M24 5.5 L25.5 18 L22.5 18 Z" transform="rotate(${a} 24 24)"/>`,
  ).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<defs>
<linearGradient id="d" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFC94D"/><stop offset="0.45" stop-color="#F58A07"/><stop offset="1" stop-color="#FF6A3D"/>
</linearGradient>
<linearGradient id="r" x1="24" y1="4" x2="24" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6A3D" stop-opacity="0"/><stop offset="0.55" stop-color="#F58A07"/><stop offset="1" stop-color="#FFC94D"/>
</linearGradient>
<radialGradient id="g" cx="24" cy="24" r="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#F58A07" stop-opacity="0.35"/><stop offset="1" stop-color="#F58A07" stop-opacity="0"/>
</radialGradient>
</defs>
${plate ? '<rect width="48" height="48" rx="11" fill="#070A12"/>' : ""}
<circle cx="24" cy="24" r="20" fill="url(#g)"/>
<g fill="url(#r)">${rays}</g>
<circle cx="24" cy="24" r="14.25" stroke="url(#d)" stroke-opacity="0.35" stroke-width="1" fill="none"/>
<circle cx="24" cy="24" r="11" fill="url(#d)"/>
<circle cx="24" cy="24" r="4.25" fill="#070A12"/>
<circle cx="24" cy="24" r="4.25" fill="none" stroke="#FFC94D" stroke-opacity="0.5" stroke-width="0.75"/>
</svg>`;
}

export function markDataUri(options?: MarkOptions): string {
  const base64 = Buffer.from(markSvg(options)).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}
