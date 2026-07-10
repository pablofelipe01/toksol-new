import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui";
import { LEGAL_TEMPLATE_NOTICE, type LegalDoc } from "@/content/types";
import { complianceLinks, site } from "@/lib/site-config";

/** Shared chrome for every `/legal/*` page: notice, mini ToC, clause list. */
export default function LegalLayout({ doc }: { doc: LegalDoc }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(245,138,7,0.10),transparent_70%)]"
      />

      <Container className="py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-[1fr_260px] lg:gap-16">
          <article className="max-w-prose">
            <header>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
                Compliance
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink sm:text-5xl">
                {doc.title}
              </h1>
              <p className="mt-4 text-sm text-ink-muted">
                Last updated: <time>{doc.lastUpdated}</time>
              </p>
            </header>

            <div
              role="note"
              className="mt-8 flex gap-3 rounded-xl border border-solar-500/25 bg-solar-500/[0.06] p-4"
            >
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-solar-400" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-ink-muted">{LEGAL_TEMPLATE_NOTICE}</p>
            </div>

            <p className="mt-8 text-base leading-relaxed text-ink-muted">{doc.intro}</p>

            {/* Mini table of contents. */}
            <nav aria-label="On this page" className="mt-10 rounded-2xl border border-hairline bg-panel/60 p-6">
              <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
                On this page
              </h2>
              <ol className="mt-4 space-y-2">
                {doc.clauses.map((clause, index) => (
                  <li key={clause.id} className="flex gap-3 text-sm">
                    <span className="font-mono text-ink-muted/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${clause.id}`}
                      className="text-ink-muted transition-colors hover:text-solar-400"
                    >
                      {clause.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-12 space-y-12">
              {doc.clauses.map((clause, index) => (
                <section key={clause.id} id={clause.id} className="scroll-mt-28">
                  <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                    <span className="mr-3 font-mono text-base font-normal text-solar-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {clause.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {clause.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-ink-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {clause.list ? (
                    <ul className="mt-5 space-y-2.5">
                      {clause.list.map((item) => (
                        <li key={item.slice(0, 48)} className="flex gap-3 text-base leading-relaxed text-ink-muted">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-solar-500"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <footer className="mt-16 rounded-2xl border border-hairline bg-panel/60 p-6">
              <p className="text-sm leading-relaxed text-ink-muted">
                Questions about this policy? Write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-plasma underline underline-offset-4 hover:text-solar-400"
                >
                  {site.email}
                </a>
                .
              </p>
            </footer>
          </article>

          <aside className="mt-16 lg:mt-0">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
                Compliance library
              </h2>
              <ul className="mt-5 space-y-1">
                {complianceLinks.map((link) => {
                  const active = link.href.endsWith(`/${doc.slug}`);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={
                          active
                            ? "block rounded-lg bg-panel px-3 py-2 text-sm font-medium text-solar-400"
                            : "block rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-panel hover:text-ink"
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
