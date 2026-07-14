# TokSol — marketing site

Production-ready marketing website for **TokSol**, a blockchain engineering firm
that builds tokenization infrastructure for real-world assets. Next.js (App
Router) + TypeScript + Tailwind CSS. No wallet connect — the contact flow is a
Supabase-backed consultation form.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase creds (see "Consultation form" below)
npm run dev                  # http://localhost:3000
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

## Consultation form

`/contact` captures leads and stores them in Supabase.

- **Flow:** `components/ContactForm.tsx` → `POST /api/consultation`
  (`app/api/consultation/route.ts`) → Supabase table `consultation_requests`.
- **Server-side only:** the route uses the **service-role** key via
  `lib/supabase-admin.ts` (guarded by `import "server-only"`). The key never
  reaches the browser. The table has RLS enabled with **no policies**, so it is
  unreadable and unwritable by anyone except the service role.
- **Env:** set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`
  (gitignored). See `.env.example`. On your host (Vercel/Netlify/etc.), add the
  same two variables. If they are absent the form degrades gracefully to a
  prefilled `mailto:` so no lead is lost.
- **Spam:** a hidden honeypot field and server-side validation (required name +
  message, email format, length caps) run before any insert.
- **Runtime:** the route is dynamic (Node). Every other page is still static —
  don't switch the project to `output: export`, which would drop the API route.

Read the leads in the Supabase dashboard → Table editor → `consultation_requests`,
or by SQL. The table:

| column       | type          | notes                        |
| ------------ | ------------- | ---------------------------- |
| `id`         | uuid          | primary key                  |
| `created_at` | timestamptz   | defaults to now()            |
| `name`       | text          | required                     |
| `company`    | text          | optional                     |
| `email`      | text          | optional, format-validated   |
| `message`    | text          | required                     |
| `source`     | text          | `'website'`                  |
| `user_agent` | text          | for debugging                |

## Notes

- All animation is CSS or framer-motion and stops under `prefers-reduced-motion`.
- The YouTube embed is click-to-load: nothing is requested from Google until the
  visitor presses play. The cookie policy depends on this staying true.
- The contact form posts to the API (see "Consultation form" above) and falls
  back to `mailto:` only if the backend is unreachable.
- Pricing is deliberately absent everywhere. Commercial CTAs resolve to the
  consultation form or a `mailto:`.

## Deploying

Any Next.js host. The whole site prerenders to static HTML, so `next build`
output can also be served from a CDN behind `npm start`.
