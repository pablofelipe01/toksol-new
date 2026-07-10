# TokSol — marketing site

Production-ready marketing website for **TokSol**, a bidirectional tokenization
services company. Next.js (App Router) + TypeScript + Tailwind CSS. No backend,
no database, no wallet connect — the contact flow is a client-side `mailto:`
composer.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Script              | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Dev server                                                          |
| `npm run pdf`       | Regenerates `public/toksol-whitepaper.pdf` from the whitepaper data |
| `npm run build`     | Runs `npm run pdf` (via `prebuild`), then `next build`              |
| `npm start`         | Serves the production build                                         |
| `npm run typecheck` | `tsc --noEmit`                                                      |
| `npm run lint`      | ESLint                                                              |

## Where to edit content

Almost all copy lives outside the components.

| I want to change…                                     | Edit                             |
| ----------------------------------------------------- | -------------------------------- |
| Brand name, tagline, email, LinkedIn, video, trademark | `lib/site-config.ts`             |
| Nav links, footer columns                              | `lib/site-config.ts`             |
| Clients (names, URLs, blurbs)                          | `lib/site-config.ts` → `clients` |
| Home value cards, RWA use cases, process steps         | `lib/site-config.ts`             |
| The whitepaper (in-site **and** PDF)                   | `content/whitepaper.ts`          |
| Legal pages                                            | `content/legal/*.ts`             |
| Colours, fonts, animations                             | `tailwind.config.ts`, `app/globals.css` |

### The whitepaper is one source of truth

`content/whitepaper.ts` is structured data (`{ kind: "p" | "formula" | "callout" | … }`).
The in-site page (`app/whitepaper/page.tsx` → `components/WhitepaperBlocks.tsx`) and the
PDF (`scripts/generate-whitepaper-pdf.tsx`) both render from it, so the two can
never drift. After editing the content, run `npm run pdf` — or just `npm run build`,
which does it for you.

The PDF embeds the brand typefaces from `assets/fonts/` (vendored, so the build
never touches the network). The built-in PDF faces are WinAnsi-encoded and
silently mangle the math glyphs `∫ ₀ ˢ Δ ≈`, which is why real fonts are required.

## Routes

```
/                       Home
/technology             The bidirectional token engine (the math)
/services               Offering + engagement process (no prices, ever)
/whitepaper             In-site whitepaper + Download PDF
/clients                Client grid
/contact                mailto: contact form
/legal/terms            ┐
/legal/privacy          │
/legal/cookies          │ All six render from content/legal/*.ts
/legal/aml-kyc          │ via app/legal/[slug]/page.tsx
/legal/risk-disclosure  │
/legal/disclaimer       ┘
```

Generated at build time: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`,
`/opengraph-image` (1200×630 PNG), `/apple-icon` (180×180 PNG), `/icon.svg`.

## Brand

Solar-tech: deep-space `#070A12` canvas, luminous amber core (`#FFB020` →
`#F58A07` → `#FF6A3D`), cool cyan `#6EE7F0` for contrast. Space Grotesk for
display, Inter for body, JetBrains Mono for formulas.

The logo (`components/Logo.tsx`) is an inline SVG sun/token mark — a struck coin
with a radiating corona. It takes an `idPrefix` prop so several instances can
share a page without colliding gradient ids. `markOnly` renders the mark alone.

## Client logos

Clients currently render as typographic logo-cards. To use real assets, drop the
file into `public/logos/` and set `logo` on the client in `lib/site-config.ts`.

## Notes

- All animation is CSS or framer-motion and stops under `prefers-reduced-motion`.
- The YouTube embed is click-to-load: nothing is requested from Google until the
  visitor presses play. The cookie policy depends on this staying true.
- The contact form is not a `<form>`. It builds a `mailto:` URL in a click
  handler; no field ever leaves the browser.
- Pricing is deliberately absent everywhere. Every commercial CTA resolves to a
  consultation `mailto:`.

## Deploying

Any Next.js host. The whole site prerenders to static HTML, so `next build`
output can also be served from a CDN behind `npm start`.
