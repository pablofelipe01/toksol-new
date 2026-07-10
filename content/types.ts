/**
 * Structured content model shared by the in-site whitepaper page and the
 * build-time PDF generator, so both render from a single source.
 */

export type Block =
  | { kind: "p"; text: string }
  | { kind: "formula"; lines: string[]; caption?: string }
  | { kind: "callout"; title?: string; text: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "definitions"; items: { term: string; def: string }[] }
  | { kind: "references"; items: string[] };

export type Section = {
  /** Anchor id — must be unique and URL-safe. */
  id: string;
  /** Section number as displayed, e.g. "4". */
  number: string;
  title: string;
  blocks: Block[];
};

export type Whitepaper = {
  title: string;
  subtitle: string;
  version: string;
  date: string;
  abstract: string;
  disclaimer: string;
  sections: Section[];
};

/** Legal pages share this shape so `LegalLayout` can render any of them. */
export type LegalClause = {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  intro: string;
  clauses: LegalClause[];
};

export const LEGAL_TEMPLATE_NOTICE =
  "This is a template for informational purposes and must be reviewed by qualified legal counsel before reliance.";
