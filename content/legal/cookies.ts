import type { LegalDoc } from "../types";

export const cookies: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  description:
    "This TokSol website sets no cookies and uses no trackers by default; this policy explains the one exception, the click-to-play YouTube embed.",
  lastUpdated: "10 July 2026",
  intro:
    "This Cookie Policy explains how cookies and similar technologies are, and are not, used on the TokSol website. The short version is simple: by default this site sets no cookies of its own and runs no analytics or advertising trackers. This page explains what that means, describes the one third-party exception, the click-to-play YouTube video, and tells you how to stay in control of cookies in your browser.",
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
      heading: "This site sets no cookies by default",
      paragraphs: [
        "TokSol's website is a static, informational site with no accounts and no backend. It does not set any first-party cookies, and it does not use analytics, advertising, fingerprinting or social-media tracking technologies.",
        "You can browse the whole site, including the whitepaper, without being tracked and without any cookie being placed by TokSol.",
      ],
    },
    {
      id: "youtube-embed",
      heading: "The embedded YouTube video",
      paragraphs: [
        "One page includes an embedded YouTube video. To protect your privacy the video is not loaded when the page opens; nothing is requested from YouTube until you actively click to play.",
        "When you do click play, the video is loaded from Google/YouTube. At that point Google may set its own cookies on your device and will receive your IP address and technical information as part of serving the video, under Google's own control and its own policies. This only happens because of your click; if you never play the video, YouTube receives nothing.",
        "For details of how Google and YouTube handle this data, refer to YouTube's and Google's own privacy and cookie policies.",
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
        "Analytics or performance: measure how visitors use a site. This site uses none by default.",
        "Marketing or advertising: track visitors to build profiles and target ads. This site uses none. The click-to-play YouTube embed may involve Google's own cookies once you play the video.",
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
        "You remain fully in control. Every major browser lets you view, block and delete cookies, including cookies that Google might set after you play the embedded video. Look in your browser's privacy or site-settings menu.",
        "Blocking third-party cookies will not break this site, since it does not depend on cookies to work. It may, however, affect playback or features of the embedded YouTube video.",
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
