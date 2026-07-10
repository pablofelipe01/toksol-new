import type { LegalDoc } from "../types";

export const amlKyc: LegalDoc = {
  slug: "aml-kyc",
  title: "AML / KYC Policy",
  description:
    "TokSol's approach to anti-money-laundering and know-your-customer diligence across its tokenization-engineering engagements.",
  lastUpdated: "10 July 2026",
  intro:
    "TokSol is committed to preventing its technology and its business from being used for money laundering, terrorist financing, sanctions evasion or other financial crime. This policy describes the anti-money-laundering (AML) and know-your-customer (KYC) principles we apply to the clients we work with. It is written to be honest about our role: we are an engineering firm that designs and builds tokenization protocols, not an operator of an exchange, and by design our protocols never take custody of client or end-user funds.",
  clauses: [
    {
      id: "purpose",
      heading: "Purpose and commitment",
      paragraphs: [
        "We take financial-crime risk seriously and apply diligence proportionate to our role as a technology provider. Our aim is to know who we are building for, to avoid engagements that carry unacceptable risk, and to support clients in meeting their own compliance obligations.",
      ],
    },
    {
      id: "scope",
      heading: "Scope: what this policy covers",
      paragraphs: [
        "This policy applies to TokSol's client engagements, the businesses that retain us to design platforms, protocols and bonding curves for tokenizing real-world assets.",
        "It is not the policy of a TokSol-operated exchange, because TokSol does not operate one. We do not custody, hold, pool or move client or end-user funds. Our diligence therefore focuses on knowing our clients and their projects, not on operating a customer-facing money service.",
      ],
    },
    {
      id: "client-onboarding",
      heading: "Client onboarding and verification",
      paragraphs: [
        "Before we take on an engagement we carry out risk-based due diligence on the client. Depending on the client and the project this may include collecting and verifying:",
      ],
      list: [
        "Corporate formation and registration documents and evidence of good standing.",
        "The identity of directors, authorised signatories and the individuals we will deal with.",
        "Beneficial ownership, to understand who ultimately owns or controls the client.",
        "The nature of the business, the asset to be tokenized and the intended structure.",
        "Source of funds or source of wealth information where the risk profile warrants it.",
      ],
    },
    {
      id: "sanctions-pep",
      heading: "Sanctions and PEP screening",
      paragraphs: [
        "We screen prospective clients, their beneficial owners and their key individuals against applicable sanctions lists and for politically exposed person (PEP) status and adverse media.",
        "A positive or unresolved screening result may lead us to seek further information, escalate for review, or decline the engagement.",
      ],
    },
    {
      id: "ongoing-monitoring",
      heading: "Ongoing monitoring and periodic review",
      paragraphs: [
        "Diligence is not only performed at onboarding. During an engagement we remain alert to changes in a client's ownership, activity or risk profile, and we periodically review clients on a schedule set by their assessed risk.",
        "Material changes or red flags trigger renewed review and, where appropriate, escalation.",
      ],
    },
    {
      id: "risk-based-approach",
      heading: "Risk-based approach and prohibited clients",
      paragraphs: [
        "We apply a risk-based approach, devoting more scrutiny to higher-risk clients, jurisdictions and asset types, and we reserve the right to decline any engagement.",
        "We will not knowingly work with clients or projects that:",
      ],
      list: [
        "Are subject to applicable sanctions, or are owned or controlled by sanctioned persons.",
        "Are engaged in, or intend to facilitate, illegal activity or the laundering of proceeds of crime.",
        "Refuse to provide the information reasonably required for our due diligence.",
        "Are structured deliberately to obscure ownership, control or the true purpose of the project.",
      ],
    },
    {
      id: "transaction-layer-kyc",
      heading: "KYC at the transaction layer is the client's obligation",
      paragraphs: [
        "Depending on the jurisdiction, the nature of the token and the on- and off-ramp providers involved, a specific token deployment may require KYC and AML checks on the end holders who buy, sell or redeem tokens.",
        "Implementing and operating that transaction-layer KYC, including selecting compliant on- and off-ramp partners and any allow-listing of wallets, is the client's responsibility, not TokSol's. We can architect the technical hooks to support such controls, but the compliance programme around live token activity belongs to the client as the issuer or operator.",
      ],
    },
    {
      id: "untouchable-reserve",
      heading: "Untouchable reserve: no custody by design",
      paragraphs: [
        "A deliberate feature of our protocol designs is that the reserve backing a bonding curve has no administrative withdrawal path. There is no owner key, back door or privileged function that lets TokSol, or anyone else, extract reserve funds.",
        "Because the reserve is untouchable by design, TokSol never takes custody of it. This structurally removes a major money-laundering and misappropriation vector: funds move only through the mathematical rules of the curve, not at the discretion of an operator.",
      ],
    },
    {
      id: "record-keeping",
      heading: "Record keeping",
      paragraphs: [
        "We retain the due-diligence records we collect, and records of the decisions we make, for the period required by applicable law, and we protect them with appropriate security. These records support audit, review and any legitimate request from a competent authority.",
      ],
    },
    {
      id: "reporting",
      heading: "Reporting suspicious activity",
      paragraphs: [
        "Where we form a suspicion that an engagement or transaction is connected to money laundering, terrorist financing or other financial crime, we will act in accordance with applicable law, which may include reporting to the competent authorities and refraining from tipping off the client.",
      ],
    },
    {
      id: "training",
      heading: "Training and awareness",
      paragraphs: [
        "Our personnel receive guidance appropriate to their role so they can recognise financial-crime red flags, apply this policy consistently, and know when and how to escalate a concern.",
      ],
    },
    {
      id: "refusal-termination",
      heading: "Refusal and termination of engagements",
      paragraphs: [
        "We may decline to begin, or may suspend or terminate, any engagement where due diligence cannot be satisfactorily completed, where screening raises unresolved concerns, or where continuing would expose TokSol to unacceptable legal or reputational risk.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        "Questions about this AML / KYC Policy can be directed to pablofelipe@me.com.",
      ],
    },
  ],
};
