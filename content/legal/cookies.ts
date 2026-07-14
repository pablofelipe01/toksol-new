import type { LegalDoc } from "../types";

export const cookies: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  description:
    "The TokSol website sets no cookies and uses no analytics or advertising trackers. This policy explains what that means and how to stay in control.",
  lastUpdated: "14 July 2026",
  intro:
    "This Cookie Policy explains how cookies and similar technologies are, and are not, used on the TokSol website. The short version is simple: this site sets no cookies of its own, embeds no third-party content, and runs no analytics or advertising trackers. This page explains what that means and tells you how to stay in control of cookies in your browser.",
  clauses: [
    {
      id: "what-are-cookies",
      heading: "What cookies are",
      paragraphs: [
        "Cookies are small text files that a website can ask your browser to store on your device. Similar technologies include local storage, pixels and fingerprinting scripts. They can be used to remember preferences, keep you signed in, or track behaviour across sites for analytics and advertising.",
      ],
    },
    {
      id: "we-set-none",
      heading: "This site sets no cookies",
      paragraphs: [
        "TokSol's website is a static, informational site with no accounts. It does not set any first-party cookies, and it does not use analytics, advertising, fingerprinting or social-media tracking technologies.",
        "It also embeds no third-party content — no video players, no social widgets, no advertising pixels — so no other company is placed in a position to set a cookie on your device through this site.",
        "You can browse the whole site, including the whitepaper, without being tracked and without any cookie being placed.",
      ],
    },
    {
      id: "categories",
      heading: "Cookie categories explained",
      paragraphs: [
        "For clarity, cookies are commonly grouped into the following categories, so you can see where things stand on this site:",
      ],
      list: [
        "Strictly necessary: required for a site to function. This site currently uses none.",
        "Analytics or performance: measure how visitors use a site. This site uses none.",
        "Marketing or advertising: track visitors to build profiles and target ads. This site uses none.",
      ],
    },
    {
      id: "future-analytics",
      heading: "If analytics are added later",
      paragraphs: [
        "If we ever decide to introduce analytics or any non-essential cookies in the future, we will first put a consent banner in place so you can accept or reject them, and we will update this policy before any such technology is activated.",
        "In other words, non-essential cookies would only ever run after you have been asked and have agreed.",
      ],
    },
    {
      id: "control-cookies",
      heading: "How to control cookies in your browser",
      paragraphs: [
        "You remain fully in control. Every major browser lets you view, block and delete cookies. Look in your browser's privacy or site-settings menu.",
        "Blocking cookies entirely will not break this site, since it does not depend on cookies to work.",
      ],
    },
    {
      id: "do-not-track",
      heading: "Do Not Track",
      paragraphs: [
        "Because this site does no tracking by default, there is nothing here for a browser \"Do Not Track\" or Global Privacy Control signal to switch off. We honour the spirit of those signals simply by not tracking you in the first place.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      paragraphs: [
        "We may revise this Cookie Policy if our use of cookies or embedded content changes. The date at the top shows the most recent revision.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        "If you have any questions about cookies on this site, email pablofelipe@me.com.",
      ],
    },
  ],
};
