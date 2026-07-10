/**
 * Single source of truth for site-wide content.
 * Edit copy, links, nav and client data here — components read from this module.
 */

export const SITE_URL = "https://toksol.io";

export const site = {
  name: "TokSol",
  /** Rendered as `Tok` + accent-coloured `Sol`. */
  wordmark: { lead: "Tok", accent: "Sol" },
  positioning: "Bidirectional tokenization for real-world assets.",
  description:
    "TokSol engineers bespoke platforms, protocols and bonding curves for real-world asset tokenization — with permanent, two-way liquidity guaranteed by mathematics.",
  email: "pablofelipe@me.com",
  linkedin: "https://www.linkedin.com/in/pablo-f-acebedo/",
  github: "https://github.com/pablofelipe01/toksol-new",
  video: {
    embed: "https://www.youtube.com/embed/-5-DWW9G73U",
    watch: "https://youtu.be/-5-DWW9G73U",
    thumbnail: "https://i.ytimg.com/vi/-5-DWW9G73U/maxresdefault.jpg",
    title: "TokSol — an overview of bidirectional tokenization",
  },
  trademark: "This is a registered trademark of True Social Token.",
  microDisclaimer:
    "TokSol provides tokenization engineering services. Nothing on this site is investment, legal, tax, or financial advice, or an offer or solicitation.",
} as const;

export const taglines = {
  hero: "Bidirectional tokenization for real-world assets.",
  liquidity: "Permanent, two-way liquidity — guaranteed by math, not by promises.",
  protocol: "We tokenize real assets with protocols that can't rug.",
} as const;

/**
 * Where every commercial "Request a consultation" CTA points — the contact
 * page, which hosts the form. Using a route rather than a `mailto:` means the
 * button always does something, even for visitors with no configured mail app.
 */
export const consultationHref = "/contact";

/** Prefilled consultation mailto, kept as a direct-email fallback. */
export const consultationMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "TokSol — Request a consultation",
)}&body=${encodeURIComponent(
  "Hello TokSol,\n\nI'd like to discuss tokenizing an asset.\n\nOrganisation:\nAsset / use case:\nTimeline:\n\n",
)}`;

export type NavLink = { href: string; label: string };

export const navLinks: NavLink[] = [
  { href: "/technology", label: "Technology" },
  { href: "/services", label: "Services" },
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export const complianceLinks: NavLink[] = [
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/cookies", label: "Cookie Policy" },
  { href: "/legal/aml-kyc", label: "AML / KYC Policy" },
  { href: "/legal/risk-disclosure", label: "Risk Disclosure" },
  { href: "/legal/disclaimer", label: "Regulatory Disclaimer" },
];

export type Client = {
  name: string;
  url: string;
  descriptor: string;
  blurb: string;
  /** Drop a real logo file in `public/logos/` and set its path here. */
  logo?: string;
};

export const clients: Client[] = [
  {
    name: "Matiz",
    url: "https://matiz.community/",
    descriptor: "Social tokenization protocol on Solana.",
    blurb:
      "The reference implementation of the bidirectional engine: bonding-curve tokens with permanent two-way liquidity and an on-chain reserve no administrator can touch.",
  },
  {
    name: "Inverse Neural Lab",
    url: "https://www.inverseneurallab.com/",
    descriptor: "Applied machine-learning research and engineering.",
    blurb:
      "A research group building applied machine-learning systems. Engaged on the modelling side of curve design and parameter analysis.",
  },
  {
    name: "Sirius Agentic",
    url: "https://www.siriusagentic.com/",
    descriptor: "Autonomous agent systems for business operations.",
    blurb:
      "Builds agentic software for operational workflows. Engaged on interfaces between autonomous agents and on-chain settlement.",
  },
  {
    name: "Sylicon",
    url: "https://sylicon.tech/",
    descriptor: "Technology infrastructure and product engineering.",
    blurb:
      "An engineering practice delivering production infrastructure. Engaged on platform integration for tokenized asset workflows.",
  },
];

export const clientsNote =
  "Selected engagements. Every project is scoped and priced case-by-case.";

export const trustRow = [
  "Built on Solana",
  "On-chain verifiable",
  "Reserve untouchable by design",
] as const;

export type ValueCard = { title: string; body: string; icon: string };

export const valueCards: ValueCard[] = [
  {
    icon: "ArrowLeftRight",
    title: "Two-way liquidity",
    body: "The curve prices buys and sells alike. Holders enter and exit at any time, 24/7, with no external market makers and no order book to go thin.",
  },
  {
    icon: "ShieldCheck",
    title: "Solvency as a property",
    body: "The reserve always holds exactly enough of the base asset to redeem every token in circulation. It is an invariant enforced on every transaction, not a promise in a document.",
  },
  {
    icon: "Lock",
    title: "Untouchable reserve",
    body: "Funds leave the reserve on exactly one condition: a holder sells and burns their tokens. No administrative withdrawal path exists in the deployed program.",
  },
  {
    icon: "Landmark",
    title: "Built for real assets",
    body: "The engine is applied to real-world assets — property, commodities, revenue streams, credit — not only to social and creator tokens.",
  },
];

export type UseCase = { title: string; body: string; icon: string };

export const useCases: UseCase[] = [
  {
    icon: "Building2",
    title: "Real estate & property rights",
    body: "Fractional exposure to buildings, land and leasehold interests.",
  },
  {
    icon: "Wheat",
    title: "Commodities",
    body: "Warehoused, graded and certified physical goods.",
  },
  {
    icon: "Coins",
    title: "Revenue streams & royalties",
    body: "Contracted cash flows from catalogues, licences and franchises.",
  },
  {
    icon: "Banknote",
    title: "Private credit & debt",
    body: "Loan books, receivables and structured debt instruments.",
  },
  {
    icon: "Layers",
    title: "Funds & baskets",
    body: "Diversified vehicles represented as a single transferable unit.",
  },
  {
    icon: "Copyright",
    title: "Brand & IP assets",
    body: "Trademarks, patents and licensable intellectual property.",
  },
  {
    icon: "Zap",
    title: "Infrastructure & energy",
    body: "Generation capacity, grid assets and long-horizon infrastructure.",
  },
];

export const useCasesNote =
  "Illustrative only. Every engagement is scoped case-by-case against the specific asset, its jurisdiction and the client's objectives.";

export type ProcessStep = { step: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & asset analysis",
    body: "We study the asset: what it is, who holds title, how it is valued, which jurisdiction governs it, and what an on-chain representation must preserve.",
  },
  {
    step: "02",
    title: "Curve & protocol design",
    body: "We select and tune the bonding curve for the asset's supply profile and liquidity expectations, then specify the protocol's instructions and fee mechanics.",
  },
  {
    step: "03",
    title: "Build",
    body: "Programs are implemented in Rust with the Anchor framework on Solana, alongside the bespoke platform your holders and operators will use.",
  },
  {
    step: "04",
    title: "Audit & on-chain verification",
    body: "The invariant is tested, the withdrawal path is proven absent, and the deployed program is verified so that anyone can audit solvency in real time.",
  },
  {
    step: "05",
    title: "Launch & handover",
    body: "We deploy, document and transfer operational ownership — with the reserve guarantees intact and independently checkable.",
  },
];

export const deliverables = [
  "Verifiable on-chain solvency, auditable by anyone at any time",
  "Permanent two-way liquidity without external market makers",
  "An untouchable reserve, with no administrative withdrawal path",
  "A bespoke platform and protocol tailored to your asset",
] as const;

export const pricingStatement =
  "Engagements are scoped individually. We quote each project case-by-case.";

/** Institutional context. Directional ranges only — no single-point forecasts. */
export const institutional = {
  intro:
    "The tokenization of real-world assets is not a fringe thesis. It is being underwritten by the largest financial institutions in the world.",
  body: "Analyses published by firms including BCG, Standard Chartered and McKinsey project the market for tokenized real-world assets growing from the tens of billions of dollars today to the trillions within the decade. These are projections with wide dispersion, not guarantees — the estimates differ substantially in both scope and method. What they agree on is direction.",
  quote: {
    text: "Every stock, every bond … every asset can be tokenized.",
    author: "Larry Fink",
    role: "Chairman and CEO, BlackRock",
  },
} as const;
