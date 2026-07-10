import type { Metadata } from "next";
import { Download, ShieldAlert } from "lucide-react";
import Reveal from "@/components/Reveal";
import WhitepaperBlock from "@/components/WhitepaperBlocks";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { whitepaper } from "@/content/whitepaper";

export const metadata: Metadata = {
  title: "Whitepaper",
  description:
    "The TokSol Protocol — bidirectional cryptographic tokens for real-world asset tokenization. Bonding-curve mathematics, protocol architecture, and the solvency theorem.",
  alternates: { canonical: "/whitepaper" },
  openGraph: {
    title: "Whitepaper — TokSol",
    description:
      "Bidirectional cryptographic tokens for real-world asset tokenization.",
    url: "/whitepaper",
  },
};

const PDF_PATH = "/toksol-whitepaper.pdf";

function Disclaimer({ text }: { text: string }) {
  return (
    <aside
      role="note"
      className="flex gap-3 rounded-xl border border-solar-500/25 bg-solar-500/[0.06] p-5"
    >
      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-solar-400" aria-hidden="true" />
      <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
    </aside>
  );
}

export default function WhitepaperPage() {
  return (
    <>
      {/* ── Cover ────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden border-b border-hairline">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_90%_at_50%_0%,rgba(245,138,7,0.14),transparent_70%)]"
        />
        <Container className="py-20 sm:py-28">
          <Reveal>
            <Eyebrow>Whitepaper · v{whitepaper.version} · {whitepaper.date}</Eyebrow>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tightest text-ink sm:text-6xl">
              {whitepaper.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              {whitepaper.subtitle}
            </p>

            <div className="mt-10">
              <Button href={PDF_PATH} external>
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* ── Table of contents ──────────────────────────────────────── */}
          <nav aria-label="Table of contents" className="mb-14 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
                Contents
              </h2>
              <ol className="mt-5 space-y-2.5">
                {whitepaper.sections.map((section) => (
                  <li key={section.id} className="flex gap-3 text-sm">
                    <span className="font-mono text-ink-muted/50">{section.number}</span>
                    <a
                      href={`#${section.id}`}
                      className="text-ink-muted transition-colors hover:text-solar-400"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="max-w-prose">
            <Disclaimer text={whitepaper.disclaimer} />

            <div className="mt-12 rounded-2xl border border-hairline bg-panel/50 p-6 sm:p-8">
              <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
                Abstract
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink">{whitepaper.abstract}</p>
            </div>

            <div className="mt-16 space-y-16">
              {whitepaper.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    <span className="mr-3 font-mono text-lg font-normal text-solar-500">
                      {section.number}
                    </span>
                    {section.title}
                  </h2>
                  {section.blocks.map((block, index) => (
                    <WhitepaperBlock key={`${section.id}-${index}`} block={block} />
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-16">
              <Disclaimer text={whitepaper.disclaimer} />
            </div>

            <div className="mt-12">
              <Button href={PDF_PATH} external>
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
