/**
 * Single source of truth for site-wide content.
 * Edit copy, links, nav and client data here — components read from this module.
 */

export const SITE_URL = "https://toksol.io";

export const site = {
  name: "TokSol",
  /** Rendered as `Tok` + accent-coloured `Sol`. */
  wordmark: { lead: "Tok", accent: "Sol" },
  positioning: "Blockchain engineering for real-world assets.",
  description:
    "TokSol is a blockchain engineering firm. We design and build tokenization infrastructure for real-world assets — a bespoke platform, protocol and bonding curve, engineered per asset.",
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

/** Regulatory-facing billing statement. Rendered on /services and in the footer. */
export const billingStatement =
  "Toksol is a professional services firm. Fees are quoted per engagement and invoiced in fiat via Stripe Invoicing. Toksol does not sell, issue, exchange or custody tokens or digital assets, and does not process consumer payments.";

export const taglines = {
  hero: "Blockchain engineering for real-world assets.",
  liquidity:
    "Two-way liquidity as a property of the protocol — enforced by the curve, not promised by us.",
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
  /** Status qualifier shown beneath the card. Use for non-commercial work. */
  note?: string;
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
    note: "Research prototype — Solana devnet. Not a commercial product.",
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

/**
 * Institutional context. Deliberately makes no market-size forecast and carries
 * no third-party endorsement — this is a services firm, not an investment case.
 */
export const institutional = {
  intro: "The demand is no longer the hard part. The engineering is.",
  body: "Tokenization of real-world assets has moved from pilot to procurement inside large institutions. What has not kept pace is the engineering. Most tokenized assets can be issued but not exited; most reserves are asserted in a report rather than verifiable on-chain; most protocols retain an administrative path to holder funds. Those are engineering failures, and they are the reason projects stall after launch. We take no view on how large this market becomes — we build against the failures.",
  requirementsTitle: "What that demands of the build",
  requirements: [
    "An exit, not just an issuance. A holder who cannot sell owns a certificate, not an asset.",
    "Solvency anyone can check, at any time, without asking us.",
    "No administrative back door — no privileged path to holder funds in the deployed program.",
    "A protocol shaped by the asset and its jurisdiction, not a template applied to both.",
  ],
} as const;
