import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SolarCore from "@/components/SolarCore";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Formula from "@/components/Formula";
import VideoEmbed from "@/components/VideoEmbed";
import {
  Button,
  Card,
  Container,
  Eyebrow,
  GlowDivider,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  clients,
  clientsNote,
  consultationHref,
  institutional,
  taglines,
  trustRow,
  useCases,
  useCasesNote,
  valueCards,
} from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <SolarCore />
        <Container className="relative py-24 text-center sm:py-32 lg:py-40">
          <Reveal>
            <p className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-solar-500/25 bg-solar-500/[0.06] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-solar-400">
              Bidirectional tokenization engineering
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tightest text-ink sm:text-6xl lg:text-7xl">
              Blockchain engineering for{" "}
              <span className="text-gradient">real-world assets.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              TokSol is an engineering firm. We study your asset, then design and build the
              platform, protocol, and bonding curve it needs — systems whose solvency anyone
              can verify on-chain, rather than take on trust.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href={consultationHref} className="w-full sm:w-auto">
                Request a consultation
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href="/whitepaper" variant="secondary" className="w-full sm:w-auto">
                Read the whitepaper
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-ink-muted sm:text-sm">
              {trustRow.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-solar-500/50">
                      ·
                    </span>
                  ) : null}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <GlowDivider />

      {/* ── What is bidirectional tokenization ───────────────────────────── */}
      <Section id="what">
        <Reveal>
          <SectionHeading
            eyebrow="What it is"
            title="What is bidirectional tokenization?"
            intro={taglines.liquidity}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {valueCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <Card className="h-full">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-solar-500/20 bg-solar-500/[0.07] text-solar-400">
                  <Icon name={card.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── The engine ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(245,138,7,0.10),transparent_70%)]"
        />
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>The engine</Eyebrow>
              <h2 className="font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
                A bonding curve that prices both sides of the trade.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                Price is a deterministic function of circulating supply. The reserve is the
                area under that curve. Because the protocol quotes buys and sells from the
                same function, the funds required to redeem every token in circulation are
                always present — by construction, on every transaction.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                There is no market maker to withdraw, no order book to go thin, and no
                administrative path to move the reserve.
              </p>
              <Link
                href="/technology"
                className="group mt-8 inline-flex items-center gap-2 font-semibold text-solar-400 transition-colors hover:text-solar-500"
              >
                Learn the math
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6 shadow-panel sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
                  Price function
                </p>
                <Formula lines={["P = S^0.5"]} caption="Spot price as a function of circulating supply." />
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
                  Reserve function
                </p>
                <Formula
                  lines={["R = ∫₀ˢ x^0.5 dx = (2/3) · S^1.5"]}
                  caption="The reserve is the definite integral of the price function."
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <GlowDivider />

      {/* ── RWA use cases ────────────────────────────────────────────────── */}
      <Section id="use-cases">
        <Reveal>
          <SectionHeading
            eyebrow="Applications"
            title="Real-world assets, on-chain."
            intro={taglines.protocol}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Reveal key={useCase.title} delay={index * 0.04}>
              <Card className="h-full p-5">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 text-solar-500">
                    <Icon name={useCase.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight text-ink">
                      {useCase.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {useCase.body}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-muted">
            {useCasesNote}
          </p>
        </Reveal>
      </Section>

      {/* ── Video ────────────────────────────────────────────────────────── */}
      <Section id="video" className="border-y border-hairline bg-panel/20">
        <Reveal>
          <SectionHeading
            eyebrow="Overview"
            title="See the approach."
            intro="A short introduction to bidirectional tokens, the reserve invariant, and what it means to make solvency a property of the protocol rather than a claim in a prospectus."
            align="center"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-4xl">
            <VideoEmbed />
          </div>
        </Reveal>
      </Section>

      {/* ── Clients ──────────────────────────────────────────────────────── */}
      <Section id="clients">
        <Reveal>
          <SectionHeading eyebrow="Clients" title="Selected engagements." intro={clientsNote} />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {clients.map((client, index) => (
            <Reveal key={client.name} delay={index * 0.06}>
              <a
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex h-full flex-col justify-between rounded-2xl p-6 shadow-panel transition-colors duration-300 hover:border-solar-500/25 hover:bg-panel-2"
              >
                <div>
                  {/* Typographic logo-card. Drop a real asset into `client.logo` to replace. */}
                  <span className="font-display text-2xl font-bold tracking-tightest text-ink">
                    {client.name}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {client.descriptor}
                  </p>
                  {client.note ? (
                    <p className="mt-3 text-xs leading-relaxed text-ink-muted/80">
                      {client.note}
                    </p>
                  ) : null}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-solar-400">
                  Visit site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10">
            <Link
              href="/clients"
              className="group inline-flex items-center gap-2 font-semibold text-solar-400 transition-colors hover:text-solar-500"
            >
              All clients
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ── Institutional context ────────────────────────────────────────── */}
      <Section id="why-now" className="border-y border-hairline bg-panel/20">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Why now</Eyebrow>
            <h2 className="font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
              {institutional.intro}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted">{institutional.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col justify-center rounded-2xl p-8 shadow-panel sm:p-10">
              <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                {institutional.requirementsTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {institutional.requirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-solar-500"
                    />
                    <span className="text-sm leading-relaxed text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(245,138,7,0.16),transparent_70%)]"
        />
        <Container className="text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tightest text-ink sm:text-5xl">
              Have an asset worth tokenizing?{" "}
              <span className="text-gradient">Let&apos;s scope it.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
              Every engagement begins with the asset — what it is, who holds it, and what
              holders need to be able to do. Engagements are scoped individually.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href={consultationHref} className="w-full sm:w-auto">
                Request a consultation
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="secondary" className="w-full sm:w-auto">
                How we work
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
