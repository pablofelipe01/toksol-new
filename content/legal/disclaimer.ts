import type { LegalDoc } from "../types";

export const disclaimer: LegalDoc = {
  slug: "disclaimer",
  title: "Regulatory Disclaimer",
  description:
    "Important legal notices about TokSol's informational website: no offer, no advice, and no broker, dealer or custodian relationship.",
  lastUpdated: "10 July 2026",
  intro:
    "This Regulatory Disclaimer sets out important notices that apply to the entire TokSol website and everything on it. TokSol is a tokenization-engineering company that designs and builds technology for tokenizing real-world assets. This site describes that technology and our services for information only. Please read this disclaimer carefully, as it defines what this site is and, just as importantly, what it is not.",
  clauses: [
    {
      id: "informational-only",
      heading: "Informational purposes only",
      paragraphs: [
        "All content on this website is provided for general information about TokSol's technology and engineering services. It is not tailored to your circumstances and should not be relied upon as the basis for any decision.",
      ],
    },
    {
      id: "no-offer",
      heading: "No offer or solicitation",
      paragraphs: [
        "Nothing on this site is an offer, solicitation, invitation or recommendation to buy, sell, subscribe for or hold any token, security, digital asset or other financial instrument, and nothing here should be construed as such.",
        "Any tokens or mechanisms described are illustrations of what our engineering can build for clients, not products offered by TokSol to the public.",
      ],
    },
    {
      id: "no-advice",
      heading: "No advice",
      paragraphs: [
        "Nothing on this site constitutes investment, legal, tax, accounting or financial advice. We do not take account of your objectives, financial situation or needs.",
        "No fiduciary, advisory or professional-client relationship is created by your use of the site or by any communication arising from it. You should obtain your own independent professional advice before acting on anything you read here.",
      ],
    },
    {
      id: "token-classification",
      heading: "Token classification varies",
      paragraphs: [
        "How a token is characterised in law, for example as a security, a commodity, a payment instrument or something else, varies by jurisdiction and depends on the specific facts, including the underlying asset, the structure and how the token is marketed and used.",
        "That characterisation can change over time and as the law develops. No statement on this site should be taken as a legal conclusion about the status of any token in any jurisdiction.",
      ],
    },
    {
      id: "what-toksol-is-not",
      heading: "TokSol is an engineering provider, not a financial intermediary",
      paragraphs: [
        "TokSol provides software design and engineering services. TokSol is not a broker, dealer, securities exchange, trading venue, custodian, investment adviser, fund manager or money transmitter, and it does not hold, pool or move client or end-user funds.",
        "We build the technology; we do not operate a market in, or offer, tokens to the public.",
      ],
    },
    {
      id: "client-compliance",
      heading: "Clients are responsible for their own compliance",
      paragraphs: [
        "Our clients are solely responsible for the legal and regulatory compliance of their own projects, including any licensing, disclosure, securities, AML and consumer-protection obligations that apply to issuing or operating a token.",
        "Clients must obtain their own independent legal advice and satisfy themselves that their project is lawful in every relevant jurisdiction before commercial operation. TokSol does not provide legal or regulatory advice.",
      ],
    },
    {
      id: "jurisdictional-restrictions",
      heading: "Jurisdictional restrictions",
      paragraphs: [
        "This site is not directed at, and is not intended for use by, any person in any jurisdiction where publishing or accessing it, or the products or services it describes, would be contrary to law or regulation.",
        "If you access the site, you are responsible for complying with the laws that apply to you.",
      ],
    },
    {
      id: "forward-looking",
      heading: "Forward-looking and third-party statements",
      paragraphs: [
        "The site may contain forward-looking statements and market-size or growth figures, including projections attributed to third parties such as BCG, Standard Chartered or McKinsey. These are inherently uncertain and are not guarantees of any future outcome.",
        "Such third-party figures are cited directionally, to indicate the scale of interest in asset tokenization, and not as an endorsement of TokSol by those organisations, nor as a representation by us that the figures are accurate or will be realised. Actual results may differ materially.",
      ],
    },
    {
      id: "third-party-information",
      heading: "Third-party information",
      paragraphs: [
        "Where we reference or link to third-party research, data, tools or websites, we do not control that content and do not guarantee its accuracy, completeness or availability. A reference or link does not imply endorsement, and any reliance you place on third-party information is at your own risk.",
      ],
    },
    {
      id: "no-warranty",
      heading: "No warranty",
      paragraphs: [
        "The site and its content are provided \"as is\" without warranty of any kind, express or implied. We do not warrant that the content is accurate, complete or current, and we accept no liability for any reliance placed on it, to the fullest extent permitted by law.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        "If you have questions about this disclaimer, email pablofelipe@me.com.",
      ],
    },
  ],
};
