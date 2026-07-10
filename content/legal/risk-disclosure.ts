import type { LegalDoc } from "../types";

export const riskDisclosure: LegalDoc = {
  slug: "risk-disclosure",
  title: "Risk Disclosure",
  description:
    "The material risks of tokenized real-world assets and bonding-curve protocols, including why guaranteed liquidity is not a guaranteed exit price.",
  lastUpdated: "10 July 2026",
  intro:
    "This Risk Disclosure describes material risks associated with the tokenization technology that TokSol designs and builds, including bonding-curve protocols and tokenized real-world assets (RWAs). It is provided so that anyone evaluating this technology, or any token built with it, understands that these instruments carry significant risk and can lose value. It is general information, not advice, and it is not exhaustive. If you are considering issuing or acquiring any token, obtain your own independent professional advice first.",
  clauses: [
    {
      id: "purpose",
      heading: "Purpose of this disclosure",
      paragraphs: [
        "TokSol builds engineering that can guarantee on-chain liquidity through a bonding curve. This document exists to make the limits of that guarantee, and the other risks involved, explicit and easy to understand. Reading it is essential context for anything else stated on this site.",
      ],
    },
    {
      id: "market-price-risk",
      heading: "Market and price risk",
      paragraphs: [
        "The price of a token on a bonding curve moves as tokens are bought and sold. Prices can be volatile and can fall sharply. Demand can disappear, and the value of a holding can decline substantially or, in an extreme case, to little or nothing.",
      ],
    },
    {
      id: "liquidity-not-price",
      heading: "Guaranteed liquidity is not a guaranteed price",
      paragraphs: [
        "This is the single most important point in this document. A bonding-curve protocol can guarantee that a holder is always able to sell back to the curve and receive the current curve price. That is a liquidity guarantee, not a price guarantee.",
        "The protocol does not, and cannot, guarantee what that price will be at the moment you sell. The curve price depends on how many tokens are in circulation, which changes as others buy and sell. If the price on the curve is lower when you exit than when you entered, you will realise a loss. Always-available liquidity means you can get out; it never means you will get out at a profit, or even at your original cost.",
      ],
    },
    {
      id: "smart-contract-risk",
      heading: "Smart-contract and technical risk",
      paragraphs: [
        "Tokenization protocols are software and carry technical risk. Despite careful engineering, review and testing, smart contracts may contain bugs or vulnerabilities that could be exploited or could cause unexpected behaviour or loss.",
        "There is also dependency risk from the libraries, tooling and oracles a deployment relies on, and network risk from Solana itself, including congestion, degraded performance, outages or changes to the protocol, any of which can delay or disrupt transactions.",
      ],
    },
    {
      id: "rwa-risk",
      heading: "Real-world-asset risk",
      paragraphs: [
        "When a token represents a real-world asset, the token's ultimate value depends on that underlying asset, and the most important facts about the asset live off-chain and outside the protocol's guarantees.",
        "These off-chain factors include the existence, condition and custody of the asset, its valuation and whether that valuation is accurate, and the legal enforceability of the rights the token is supposed to represent. A flawless on-chain mechanism cannot fix a problem with the real-world asset behind it, such as a title dispute, a mis-valuation, custody failure or an unenforceable claim.",
      ],
    },
    {
      id: "issuer-counterparty-risk",
      heading: "Issuer and counterparty risk",
      paragraphs: [
        "Tokens are issued and operated by clients, not by TokSol. The issuer's honesty, solvency, competence and continued operation all affect a token's value and the delivery of any off-chain obligations, such as redemption, servicing or asset management.",
        "If an issuer or a key counterparty fails, misbehaves or disappears, holders may be unable to realise the value the token was intended to represent, regardless of what happens on-chain.",
      ],
    },
    {
      id: "regulatory-risk",
      heading: "Regulatory risk",
      paragraphs: [
        "The legal and regulatory treatment of digital assets and tokenized RWAs is evolving and differs between jurisdictions. A token could be classified as a security or another regulated instrument, and rules can change with retrospective effect.",
        "Regulatory action, new legislation or reclassification could restrict transfer, reduce value, impose obligations on issuers and holders, or make a token unlawful to hold or trade in a given place.",
      ],
    },
    {
      id: "base-asset-risk",
      heading: "Base-asset and stablecoin risk",
      paragraphs: [
        "A bonding curve is typically denominated in a base asset such as a stablecoin. That base asset carries its own risk. A stablecoin like USDC may lose its peg, and its issuer may freeze, blacklist or fail to honour balances.",
        "If the base asset falls in value or becomes unusable, the reserve and every price expressed in it are affected, independently of how the token itself is performing.",
      ],
    },
    {
      id: "key-management-risk",
      heading: "Key management and self-custody risk",
      paragraphs: [
        "Holding tokens means holding the private keys that control them. If you lose your keys or seed phrase, your tokens are irrecoverable. If your keys are stolen or you are tricked into signing a malicious transaction, your tokens can be taken.",
        "These self-custody risks sit entirely with the holder. No one, including TokSol, can reverse an on-chain transfer or restore lost keys.",
      ],
    },
    {
      id: "no-profit-promise",
      heading: "No promise of profit or appreciation",
      paragraphs: [
        "TokSol makes no promise, projection or representation that any token will hold its value, appreciate, generate income or produce any return. Nothing on this site should be read as such a promise.",
        "This document is not investment, legal, tax or financial advice, and TokSol does not act as your adviser.",
      ],
    },
    {
      id: "reserve-reduces-not-eliminates",
      heading: "The reserve design reduces but does not eliminate risk",
      paragraphs: [
        "Our reserve-backed, no-withdrawal design is intended to remove certain failure modes, notably the operator draining the reserve, and to make on-chain liquidity dependable. This meaningfully reduces some risks.",
        "It does not eliminate risk. The market, technical, real-world-asset, issuer, regulatory, base-asset and self-custody risks described above all remain. You should assume that you can lose money.",
      ],
    },
  ],
};
