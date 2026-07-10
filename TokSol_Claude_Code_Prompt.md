# Build Prompt — TokSol Website (Next.js + TypeScript + Tailwind CSS)

> Paste this entire file into Claude Code as the task brief. Build the full project, run it, and fix any type/lint/build errors before finishing. Everything on the site must be in **English**.

---

## 0. Mission (read this first)

Build a spectacular, modern, tech-forward marketing website for **TokSol** — a specialized **bidirectional tokenization services company**. TokSol is a B2B engineering house that takes a proven on-chain tokenization engine and applies it to **real-world asset (RWA) tokenization**. For each client, TokSol studies their specific case of tokenized assets and builds them a **bespoke platform, a bespoke protocol, and a custom bonding curve**.

TokSol is **not** a consumer app and **not** a social-token product. The public-facing story is about **bidirectional cryptographic tokens** and **tokenizing real-world assets** with mathematically guaranteed, permanent two-way liquidity.

Pricing is **always case-by-case** — the site must **never** display prices, tiers, or plans. Every commercial CTA leads to a contact/consultation flow.

Deliverables:
- A production-ready Next.js (App Router) + TypeScript + Tailwind CSS site.
- A custom **SVG logo** and **SVG favicon** (solar-tech theme — see §3).
- A **Whitepaper** page rendered in-site **plus a downloadable PDF** of the same whitepaper.
- A **full set of compliance pages**.
- An embedded **YouTube video**.
- A **clients** section with the four logos/links provided.
- Clean, accessible, responsive, fast.

---

## 1. Tech stack & project setup

- **Next.js 14+** with the **App Router** (`app/` directory).
- **TypeScript** (strict mode on).
- **Tailwind CSS** (v3+), configured with the custom design tokens in §3.
- **No backend/database required.** The contact flow uses a `mailto:` action and also a client-side form that composes a `mailto:` link (no server needed). Do not add auth, no Privy, no wallet connect — this is a marketing site.
- Fonts via `next/font` (Google Fonts). Use **Space Grotesk** (or **Sora**) for display/headings and **Inter** for body.
- Icons: `lucide-react`.
- Smooth in-view animations: `framer-motion` (keep tasteful; respect `prefers-reduced-motion`).
- Set up `next/metadata` for SEO on every route (title, description, Open Graph, Twitter card, canonical).
- Include `sitemap.ts` and `robots.ts`.
- Use `next/image` for any raster images.
- Lint clean (`eslint`), type-check clean (`tsc --noEmit`), and `next build` must succeed.
- Provide a clear `README.md` with install/run/build instructions and where to edit content.

Project scaffolding:
- Centralize all site content (nav labels, section copy, client list, contact info, legal boilerplate) in a `content/` or `lib/site-config.ts` module so it is easy to edit in one place.
- Put reusable UI in `components/`.

---

## 2. Global information (use exactly these values)

- **Brand name:** TokSol (styled "TokSol"; wordmark may render as `Tok` + accent-colored `Sol`).
- **Tagline options (pick the strongest for the hero, keep the others as section intros):**
  - "Bidirectional tokenization for real-world assets."
  - "Permanent, two-way liquidity — guaranteed by math, not by promises."
  - "We tokenize real assets with protocols that can't rug."
- **Primary contact email:** `pablofelipe@me.com` (all "Contact", "Request a consultation", "Start a project" CTAs resolve to this via `mailto:`).
- **LinkedIn (social):** `https://www.linkedin.com/in/pablo-f-acebedo/`
- **Embedded video:** `https://www.youtube.com/embed/-5-DWW9G73U` (source: https://youtu.be/-5-DWW9G73U). Use a responsive 16:9 embed with a lazy `loading="lazy"` iframe and a click-to-load poster if easy.
- **Footer — the very last line must read, verbatim:**
  `This is a registered trademark of True Social Token.`
- **Clients (name → URL):**
  - Matiz — `https://matiz.community/`
  - Inverse Neural Lab — `https://www.inverseneurallab.com/`
  - Sirius Agentic — `https://www.siriusagentic.com/`
  - Sylicon — `https://sylicon.tech/`

---

## 3. Brand identity — "Solar-Tech" (design system)

Create a distinctive **solar-tech** identity that plays on the "Sol" (sun) in TokSol. Think deep-space dark canvas + a luminous solar core: warm gold/amber gradients, radial glows, subtle grid/orbit motifs, and crisp geometric type. It should feel like a serious fintech/crypto-infrastructure brand, not a meme project.

**Color tokens (define in `tailwind.config.ts` and CSS variables):**
- `--bg-void`: `#070A12` (near-black deep space, primary background)
- `--bg-panel`: `#0E1420` (raised surfaces/cards)
- `--bg-panel-2`: `#141C2B`
- `--text-primary`: `#F5F7FA`
- `--text-muted`: `#9AA7BD`
- `--solar-500`: `#FFB020` (primary solar amber — accent)
- `--solar-400`: `#FFC94D`
- `--solar-600`: `#F58A07` (deep amber)
- `--corona`: `#FF6A3D` (warm orange-red used sparingly for edges/flares)
- `--plasma`: `#6EE7F0` (cool cyan for contrast highlights / links on dark)
- `--border`: `rgba(255,255,255,0.08)`
- Primary gradient: `linear-gradient(135deg,#FFC94D 0%,#F58A07 45%,#FF6A3D 100%)` ("solar flare").
- Use radial glows behind the hero (a glowing "sun/core" that suggests a token).

**Typography:**
- Display/headings: Space Grotesk (700/600), tight tracking, large scale.
- Body: Inter (400/500), generous line-height.
- Use a monospace (e.g., JetBrains Mono via next/font) for the math/formulas and code-like data points.

**Motion & texture:**
- Hero: animated radial "solar core" glow (CSS/framer-motion), faint orbiting rings/particles, subtle starfield or dotted grid. Keep it GPU-light and disabled under `prefers-reduced-motion`.
- Cards: soft glassmorphism on `--bg-panel` with 1px `--border`, subtle inner glow on hover.
- Buttons: primary = solar-flare gradient with dark text; secondary = ghost/outline with amber border.

**Logo (create as inline SVG component `components/Logo.tsx`):**
- A geometric **sun/token** mark: a circular coin/disc with a radiating corona (solar rays), suggesting both a sun and a token. Use the solar gradient for the mark.
- Wordmark: "Tok" in `--text-primary`, "Sol" in solar-amber. Provide a mark-only variant for the favicon and small sizes.

**Favicon (create real files in `app/`):**
- `app/icon.svg` — the sun/token mark on transparent or dark rounded-square background, tech-modern.
- Also generate `app/apple-icon.png` size 180×180 if feasible; otherwise provide the SVG icon and a `manifest` with theme color `#070A12` and accent `#FFB020`.

---

## 4. Site architecture (routes)

```
/                      Home (hero, what we do, the engine, RWA use cases, video, clients, CTA)
/technology            Deep dive on the bidirectional token engine (the math, solvency, reserve, stack)
/services              Service offering (case-by-case; NO prices) + engagement process + contact CTA
/whitepaper            Full TokSol whitepaper rendered in-site + "Download PDF" button
/clients               Clients grid (the four) with short blurbs and outbound links
/contact               Contact page (mailto form + email + LinkedIn)
/legal/terms           Terms of Service
/legal/privacy         Privacy Policy
/legal/cookies         Cookie Policy
/legal/aml-kyc         AML / KYC Policy
/legal/risk-disclosure Risk Disclosure
/legal/disclaimer      Regulatory Disclaimer
```

Global layout:
- Sticky top **navbar** (logo left; links: Technology, Services, Whitepaper, Clients, Contact; a primary "Request a consultation" button). Mobile: hamburger drawer.
- **Footer** on every page (see §11), with the trademark line last.
- A "Compliance" footer column linking all `/legal/*` pages.

---

## 5. Home page (`/`) — sections in order

1. **Hero**
   - Animated solar core/glow behind the headline.
   - H1 (display): e.g., "Bidirectional tokenization for real-world assets."
   - Sub: "TokSol studies your assets and engineers a bespoke platform, protocol, and bonding curve — with permanent, two-way liquidity guaranteed by mathematics, not promises."
   - Primary CTA "Request a consultation" (`mailto:pablofelipe@me.com`), secondary "Read the whitepaper" (`/whitepaper`).
   - Small trust row: "Built on Solana · On-chain verifiable · Reserve untouchable by design".

2. **What is bidirectional tokenization** (3–4 concise value cards)
   - Two-way liquidity: buy and sell at any time, 24/7, with no external market makers.
   - Solvency as a property, not a promise: the reserve always holds exactly enough to redeem every token in circulation.
   - Untouchable reserve: the funds can only leave the reserve when a holder sells — no admin withdrawal path exists.
   - Real-world assets: apply the engine to real assets, not just social/creator tokens.

3. **The engine** (teaser that links to `/technology`)
   - Short explainer + the price/reserve formulas rendered in monospace (see §6). "Learn the math →".

4. **RWA use cases** (grid)
   - Examples: real estate & property rights, commodities, revenue streams / royalties, private credit & debt instruments, funds & baskets, brand & IP assets, infrastructure & energy. Keep each to a title + one line. Make clear these are illustrative and every engagement is scoped case-by-case.

5. **Video section**
   - Responsive 16:9 embed of the YouTube video. Add a short caption framing it as an overview of the approach.

6. **Clients** (logos/names + outbound links; see §8).

7. **Institutional context / why now** (credibility strip)
   - The tokenization of real-world assets is a thesis backed by the largest financial institutions in the world; leading firms project the tokenized-asset market growing from tens of billions today to trillions within the decade (cite the range directionally — e.g., BCG, Standard Chartered, McKinsey — as a projection range, not a single number). Keep it factual and sober; do not overstate. If you include the Larry Fink / BlackRock line about every asset being tokenizable, present it as a real, accurately attributed quotation and keep it short.

8. **Final CTA band**
   - "Have an asset worth tokenizing? Let's scope it." → contact.

---

## 6. `/technology` — the bidirectional token engine (core content)

Explain, in clear English for a technical-but-mixed audience, the engine TokSol uses. Render formulas in a monospace/`<code>` style with clean typographic treatment (optionally KaTeX for nicer math; plain styled text is acceptable).

Include these subsections:

**6.1 Bidirectional cryptographic tokens.** A bonding curve is an automated market maker (AMM) that sets a token's price against a base asset (USDC) as a function of circulating supply. Because the curve prices both buys and sells, liquidity is permanent and two-way — holders can always exit at the curve price without any external liquidity provider.

**6.2 The price function.** Default price function is the square-root curve:
```
P = S^0.5
```
where `P` is price in the base asset and `S` is circulating supply. Early buyers get a low price; increases decelerate as supply grows; the curve is continuous and deterministic.

**6.3 The reserve function.** The reserve `R` (base asset held) is the area under the price curve:
```
R = ∫₀ˢ x^0.5 dx = (2/3) · S^1.5 ≈ 0.666667 · S^1.5
```

**6.4 Invariant pricing.** When supply moves from `S` to `S + ΔS` and the buyer deposits `ΔR`, the system keeps the invariant:
```
S_new = ( S^1.5 · (R + ΔR) / R )^(2/3)
R_new = R · (S + ΔS)^1.5 / S^1.5
```
These run on-chain on every buy/sell so the invariant holds regardless of order or size.

**6.5 The solvency theorem.** State it prominently as a callout:
> At all times, the reserve holds exactly the funds required for every holder to sell simultaneously. Solvency is a mathematical property, not a contractual promise.

**6.6 The untouchable reserve.** There is no instruction that can withdraw the base asset from the reserve except a holder selling (burning) their tokens. Any admin "transfer reserves" path is removed before deployment. Consequences: the token issuer cannot defraud buyers, the platform cannot defraud users, and a web/frontend hack cannot reach on-chain funds. Solvency is auditable by anyone in real time.

**6.7 Technical stack.** Built on **Solana** using the **Anchor** framework (programs in Rust). Rationale: high throughput (~65,000 TPS, ~400ms finality) and near-zero fees (~$0.00025/tx) make high-frequency, low-value asset transactions viable. On-chain state is verifiable on Solana Explorer.

**6.8 Configurable fees.** Fees are set at creation and verifiable on-chain (a platform fee and a configurable issuer fee), applied symmetrically to buys and sells; fees are distributed before the reserve state updates so the solvency invariant always holds on the net reserve. (Do not invent specific fee percentages on the marketing pages — describe the mechanism; exact parameters are defined per engagement.)

> Framing note for all engine copy: emphasize the mechanism and its guarantees. TokSol does **not** promise price appreciation or investment returns. Keep language neutral and engineering-focused.

---

## 7. `/whitepaper` — in-site + downloadable PDF

Produce an original **TokSol whitepaper** adapted from the Matiz whitepaper's mathematical framework, but **refocused on bidirectional tokens and real-world-asset (RWA) tokenization** — de-emphasize the social/creator-token angle. Render it as a clean, readable in-site document (table of contents with anchor links, section numbering, styled formulas), and provide a **"Download PDF"** button that serves the same content as a PDF.

Suggested structure:
1. Abstract
2. Introduction — the RWA tokenization opportunity and the liquidity problem it must solve
3. Bidirectional cryptographic tokens (definition, why two-way liquidity matters for RWAs)
4. Mathematical foundations — the bonding curve, price function `P = S^0.5`, reserve function `R = (2/3)·S^1.5`, invariant pricing, the solvency theorem
5. Protocol architecture — Solana/Anchor, the core instructions (create curve, initialize bonding, buy, sell, update), on-chain fee structure
6. The reserve as protocol property — the removed withdrawal path, auditability, anti-fraud consequences
7. Applying the engine to real-world assets — how a bespoke platform + protocol + custom bonding curve is scoped and delivered per client; considerations for representing off-chain assets on-chain
8. Risk considerations — price risk, relative-liquidity risk (liquidity is guaranteed, price at exit is not), issuer/asset reputational risk, and the near-absence of custody risk by design
9. Regulatory considerations — neutral, non-legal-advice framing: a token sold via bonding curve **without issuer promises of profit** is designed to sit outside typical securities characterizations, but classification depends on jurisdiction and on marketing framing; independent legal counsel is required before commercial operation. Reference that RWA-backed instruments may carry additional securities/commodity obligations depending on the underlying asset and jurisdiction.
10. Conclusion
11. References — reuse the academic anchors: Buterin (constant-product AMMs), Grith/Härdle/Park (shape-invariant modeling), Zargham/BlockScience (bonding-curve state-space), and cite the institutional RWA thesis directionally.

**PDF generation:** implement it however is cleanest for a Next.js build — e.g., pre-generate a static `public/toksol-whitepaper.pdf` at build time (a small script using a lib like `@react-pdf/renderer` or a headless-print approach), or an API route that streams a print-styled version. The "Download PDF" button must return the whitepaper as a PDF. Keep the PDF visually on-brand (solar-tech cover page with the logo).

**Important:** Add a visible disclaimer at the top and bottom of the whitepaper: it is a technical document, not investment, legal, or financial advice, and does not constitute an offer or solicitation.

---

## 8. `/clients` + home clients section

Show the four clients as on-brand cards (name + one-line descriptor + outbound link, `target="_blank" rel="noopener noreferrer"`). If real logos aren't available, render clean typographic logo-cards using the brand system; leave a clearly-marked slot to drop in real logo assets later.

- **Matiz** — `https://matiz.community/` — "Social tokenization protocol on Solana."
- **Inverse Neural Lab** — `https://www.inverseneurallab.com/` — (short neutral descriptor).
- **Sirius Agentic** — `https://www.siriusagentic.com/` — (short neutral descriptor).
- **Sylicon** — `https://sylicon.tech/` — (short neutral descriptor).

Add a line: "Selected engagements. Every project is scoped and priced case-by-case."

---

## 9. `/services` — offering (NO prices)

Describe the service, not a price list:
- **What we do:** study each client's specific case of tokenized assets, then design and build a **bespoke platform, a bespoke protocol, and a custom bonding curve** tuned to the asset and the client's goals.
- **Engagement process** (stepper): Discovery & asset analysis → Curve & protocol design → Build (Solana/Anchor) → Audit & on-chain verification → Launch & handover.
- **What you get:** verifiable on-chain solvency, permanent two-way liquidity, an untouchable reserve by design, and a platform tailored to your asset.
- **Pricing:** a single clear statement — "Engagements are scoped individually. We quote each project case-by-case." — followed by a "Request a consultation" CTA. **Do not** show any numbers, tiers, or ranges.

---

## 10. `/contact`

- Prominent email: `pablofelipe@me.com` (click to `mailto:`).
- LinkedIn button: `https://www.linkedin.com/in/pablo-f-acebedo/`.
- A simple client-side contact form (name, company, email, message) whose submit button composes a `mailto:pablofelipe@me.com` link with the subject/body prefilled (no server). Do **not** use a native HTML `<form>` submit to a backend; handle it in a click handler that builds the mailto URL.
- Reiterate "case-by-case" scoping.

---

## 11. Footer (every page)

- Left: TokSol logo + one-line positioning + LinkedIn icon link.
- Columns: **Company** (Technology, Services, Whitepaper, Clients, Contact) · **Compliance** (Terms, Privacy, Cookies, AML/KYC, Risk Disclosure, Regulatory Disclaimer).
- A short legal micro-disclaimer: "TokSol provides tokenization engineering services. Nothing on this site is investment, legal, tax, or financial advice, or an offer or solicitation."
- Bottom bar: `© {current year} TokSol. All rights reserved.`
- **Final line, verbatim and last:** `This is a registered trademark of True Social Token.`

---

## 12. Compliance pages (`/legal/*`)

Create genuine, readable, on-brand legal pages (not lorem ipsum). Each with a clear last-updated date, section headings, and plain-English clauses appropriate to a **B2B tokenization-engineering company operating an informational website**. At the top of every legal page include: "This is a template for informational purposes and must be reviewed by qualified legal counsel before reliance." Keep them professional and specific to TokSol's business.

- **Terms of Service** — use of the website, IP ownership, no-advice/no-offer disclaimer, service engagements governed by separate written agreements, limitation of liability, third-party links, governing law placeholder `[Jurisdiction]`.
- **Privacy Policy** — what limited data the site collects (contact form / mailto is client-side; analytics if any), how it's used, no sale of data, contact for privacy requests (`pablofelipe@me.com`), retention, user rights.
- **Cookie Policy** — cookies/analytics used (state clearly if the build uses none by default), how to control them; include a lightweight cookie banner only if analytics are added.
- **AML / KYC Policy** — TokSol's commitment to anti-money-laundering and know-your-customer standards in client engagements; identity/entity verification of clients; sanctions screening; that specific token deployments may require KYC at the transaction layer depending on jurisdiction and ramp providers.
- **Risk Disclosure** — tokenization and digital-asset risks: price/market risk, that guaranteed liquidity does **not** guarantee exit price, smart-contract risk, regulatory risk, RWA-specific risks (the on-chain token's value depends on the underlying real-world asset and its enforceability), and that TokSol makes no promise of profit or appreciation.
- **Regulatory Disclaimer** — nothing on the site is an offer, solicitation, or investment/legal/financial advice; token classification varies by jurisdiction; clients are responsible for their own regulatory compliance; forward-looking statements are not guarantees.

Add a shared `LegalLayout` component so all six pages share consistent styling and a mini table of contents.

---

## 13. SEO, accessibility, performance

- Per-route metadata (title, description, canonical, Open Graph image). Generate a branded default OG image (can be an SVG-based static image).
- Semantic HTML, proper heading hierarchy, `alt` text, focus states, keyboard nav for the mobile drawer, sufficient color contrast (verify amber-on-dark meets AA for text sizes used; for small text prefer `--text-primary`/`--text-muted`, reserve amber for large/bold or non-text accents).
- Respect `prefers-reduced-motion` for all animations.
- Fully responsive (mobile-first). Test at 375px, 768px, 1280px.
- Lazy-load the video iframe; optimize images with `next/image`.
- Target a clean Lighthouse pass (no console errors, no layout shift on the hero).

---

## 14. Acceptance criteria (the build is done when all are true)

1. `npm install && npm run dev` runs with no errors; `npm run build` and `tsc --noEmit` pass clean.
2. All routes in §4 exist and are linked from nav and/or footer.
3. Everything is in **English**.
4. Custom **logo** and **favicon** (solar-tech) are present and rendered.
5. The **YouTube video** is embedded and plays.
6. The **whitepaper** renders in-site (focused on bidirectional tokens + RWA) **and** the "Download PDF" button returns a branded PDF.
7. All six **compliance pages** exist with real, TokSol-specific content.
8. The four **clients** appear with correct outbound links.
9. `pablofelipe@me.com` is the contact everywhere; LinkedIn link is correct.
10. **No prices anywhere**; services are stated as case-by-case.
11. The footer's final line reads exactly: `This is a registered trademark of True Social Token.`
12. Responsive, accessible, and animation respects reduced-motion.

---

## 15. Content tone rules (apply throughout)

- Serious crypto-infrastructure/fintech voice. Confident, precise, engineering-first.
- Emphasize **guarantees and mechanisms** (permanent two-way liquidity, mathematical solvency, untouchable reserve), never **investment returns**.
- Never promise profit or price appreciation. Keep regulatory language neutral and route legal specifics to the compliance pages with "consult counsel" caveats.
- Prefer concrete, verifiable claims over hype.
