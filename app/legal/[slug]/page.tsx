import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalLayout from "@/components/LegalLayout";
import { legalDocs } from "@/content/legal";

/**
 * One dynamic segment renders all six compliance pages. `generateStaticParams`
 * prerenders each of the routes listed in `complianceLinks`, so `/legal/terms`,
 * `/legal/privacy` and the rest are static HTML at build time.
 */

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(legalDocs).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocs[slug];
  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/legal/${doc.slug}` },
    openGraph: {
      title: `${doc.title} — TokSol`,
      description: doc.description,
      url: `/legal/${doc.slug}`,
    },
  };
}

export default async function LegalPage({ params }: Params) {
  const { slug } = await params;
  const doc = legalDocs[slug];
  if (!doc) notFound();

  return <LegalLayout doc={doc} />;
}
