import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { clients, clientsNote, consultationMailto } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Selected TokSol engagements. Every project is scoped and priced case-by-case.",
  alternates: { canonical: "/clients" },
  openGraph: {
    title: "Clients — TokSol",
    description: "Selected TokSol engagements.",
    url: "/clients",
  },
};

export default function ClientsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-hairline">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_90%_at_50%_0%,rgba(245,138,7,0.14),transparent_70%)]"
        />
        <Container className="py-20 sm:py-28">
          <Reveal>
            <Eyebrow>Clients</Eyebrow>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tightest text-ink sm:text-6xl">
              Selected <span className="text-gradient">engagements.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {clientsNote}
            </p>
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {clients.map((client, index) => (
            <Reveal key={client.name} delay={index * 0.06}>
              <article className="glass group flex h-full flex-col rounded-2xl p-8 shadow-panel transition-colors duration-300 hover:border-solar-500/25 hover:bg-panel-2">
                {/*
                  Typographic logo-card. To use a real logo, add the file to
                  `public/logos/` and set `logo` on the client in `lib/site-config.ts`.
                */}
                <div className="flex h-24 items-center justify-center rounded-xl border border-hairline bg-void/40">
                  <span className="font-display text-2xl font-bold tracking-tightest text-ink sm:text-3xl">
                    {client.name.split(" ")[0]}
                    {client.name.includes(" ") ? (
                      <span className="text-gradient">
                        {" "}
                        {client.name.split(" ").slice(1).join(" ")}
                      </span>
                    ) : null}
                  </span>
                </div>

                <h2 className="mt-7 font-display text-xl font-bold tracking-tight text-ink">
                  {client.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-solar-400">{client.descriptor}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink-muted">
                  {client.blurb}
                </p>

                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-1.5 self-start rounded-full border border-solar-500/30 px-5 py-2.5 text-sm font-semibold text-solar-400 transition-colors hover:border-solar-500 hover:bg-solar-500/10"
                >
                  {new URL(client.url).hostname.replace(/^www\./, "")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-start gap-6 rounded-2xl border border-hairline bg-panel/40 p-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-base leading-relaxed text-ink-muted">
              Every project is scoped and priced case-by-case, against the asset and the
              jurisdiction it sits in.
            </p>
            <Button href={consultationMailto} className="shrink-0">
              Request a consultation
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
