import type { LegalDoc } from "../types";

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  description:
    "The terms governing your use of the TokSol website, our informational content, whitepaper and protocol designs.",
  lastUpdated: "10 July 2026",
  intro:
    "These Terms of Service govern your access to and use of the TokSol website and the informational materials published on it. TokSol is a tokenization-engineering company that designs and builds bespoke platforms, protocols and custom bonding curves on Solana for the tokenization of real-world assets. This website is informational only: it has no accounts, no wallet connection, no backend and no payment functionality. By accessing the site you agree to these terms; if you do not agree, please do not use the site.",
  clauses: [
    {
      id: "acceptance",
      heading: "Acceptance of these terms",
      paragraphs: [
        "By accessing, browsing or otherwise using this website you confirm that you have read, understood and agreed to be bound by these Terms of Service and by the policies referenced within them, including our Privacy Policy, Cookie Policy and Regulatory Disclaimer.",
        "If you are using the site on behalf of a company or other organisation, you represent that you have authority to bind that organisation to these terms.",
      ],
    },
    {
      id: "permitted-use",
      heading: "Permitted use of the website",
      paragraphs: [
        "You may view, read and download the materials on this site for your own lawful, informational and evaluation purposes. You may share links to our pages and quote short extracts with attribution.",
        "You agree not to misuse the site. In particular you must not:",
      ],
      list: [
        "Attempt to gain unauthorised access to the site, its hosting infrastructure or any connected systems.",
        "Copy, scrape, republish or resell our content on a systematic or commercial basis without our written permission.",
        "Introduce malware, attempt to disrupt availability, or probe, scan or test the vulnerability of the site.",
        "Use the site in any way that breaches applicable law or the rights of any third party.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      paragraphs: [
        "All content on this website, including text, graphics, diagrams, the whitepaper, and the descriptions of our protocol and bonding-curve designs, is owned by TokSol or its licensors and is protected by intellectual property laws.",
        "The mathematical and architectural designs described on the site, including our bidirectional token and bonding-curve mechanisms, are our proprietary engineering work. Publishing them for explanation does not grant you any licence to reproduce, deploy or create derivative works from them. Any implementation of these designs for a client is delivered exclusively under a separate written agreement.",
        "The TokSol name and logo are our marks. Nothing on the site grants you a right to use them without our prior written consent.",
      ],
    },
    {
      id: "no-advice-no-offer",
      heading: "No advice and no offer",
      paragraphs: [
        "The site is provided for general information about our engineering services and technology. It does not constitute investment, legal, tax, accounting or financial advice, and it creates no advisory or fiduciary relationship.",
        "Nothing on the site is an offer, solicitation or recommendation to buy, sell or hold any token, security, digital asset or financial instrument, nor an offer to provide services on any particular terms. Any tokens described are illustrations of what our technology can build, not products offered by TokSol to the public.",
      ],
    },
    {
      id: "engagements-separate-agreement",
      heading: "Engagements are governed by separate agreements",
      paragraphs: [
        "We provide our services only under individually negotiated, signed written agreements that set out scope, deliverables, fees and responsibilities. No content on this website, and no contact form submission or email exchange arising from it, constitutes a contract, a binding quote, a proposal or a commitment by TokSol to perform any work.",
        "Descriptions of capabilities on the site are indicative. The definitive statement of what we will deliver for you is always the executed agreement between us.",
      ],
    },
    {
      id: "no-warranty",
      heading: "No warranty",
      paragraphs: [
        "The site and its content are provided \"as is\" and \"as available\", without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, accuracy and non-infringement.",
        "We do not warrant that the site will be uninterrupted, secure or error-free, that information is current or complete, or that any statement about future technology, markets or outcomes will prove correct. You rely on the content at your own risk.",
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, TokSol and its owners, personnel and contractors will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of profits, revenue, data, goodwill or investment value, arising out of or in connection with your use of, or inability to use, this website or its content.",
        "Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited. Liability arising from actual service engagements is governed instead by the relevant signed agreement.",
      ],
    },
    {
      id: "third-party-links",
      heading: "Third-party links and content",
      paragraphs: [
        "The site may link to third-party websites and resources, including client websites, blockchain explorers, documentation and news or research publications. These are provided for convenience only.",
        "We do not control and are not responsible for the content, accuracy, availability, security or practices of any third-party site. A link does not imply endorsement. Your dealings with any third party are solely between you and that party.",
      ],
    },
    {
      id: "indemnity",
      heading: "Indemnity",
      paragraphs: [
        "You agree to indemnify and hold harmless TokSol and its owners, personnel and contractors from and against any claims, liabilities, damages, losses and reasonable expenses arising out of your misuse of the site, your breach of these terms, or your violation of any law or third-party right in connection with your use of the site.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these Terms of Service from time to time to reflect changes in our site, services or legal requirements. The date at the top of this page shows when it was last revised.",
        "Continued use of the site after we post changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.",
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law and venue",
      paragraphs: [
        "These terms and any non-contractual obligations arising from them are governed by the laws of [Jurisdiction], without regard to conflict-of-law principles. The courts of [Jurisdiction] have exclusive jurisdiction over any dispute relating to the site or these terms, subject to any mandatory consumer-protection rights you may have where you reside.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        "Questions about these terms can be sent to pablofelipe@me.com.",
      ],
    },
  ],
};
