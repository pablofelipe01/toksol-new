import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  Button,
  Card,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  billingStatement,
  consultationHref,
  deliverables,
  pricingStatement,
  processSteps,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "TokSol studies your asset and builds a bespoke platform, protocol and custom bonding curve. Engagements are scoped and quoted case-by-case.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — TokSol",
    description:
      "Bespoke platform, bespoke protocol, custom bonding curve. Scoped case-by-case.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-hairline">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_90%_at_50%_0%,rgba(245,138,7,0.14),transparent_70%)]"
        />
        <Container className="py-20 sm:py-28">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tightest text-ink sm:text-6xl">
              A bespoke platform, protocol, and{" "}
              <span className="text-gradient">bonding curve.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              TokSol is an engineering house, not a product. We study your specific case of
              tokenized assets, then design and build the system that fits it — tuned to the
              asset, its jurisdiction, and what your holders need to be able to do.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ── What we do ───────────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="What we do" title="We start with the asset." />
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              A tokenization engine is not a template you drop onto a balance sheet. The
              supply profile of a fractionalised building is nothing like that of a music
              catalogue; the redemption mechanics of a warehouse receipt are nothing like
              those of a private credit facility.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              So we study each client&apos;s specific case, then design and build a bespoke
              platform, a bespoke protocol, and a custom bonding curve tuned to that asset and
              to the client&apos;s goals. The guarantees stay constant. Everything else is
              engineered for the case in front of us.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Card interactive={false} className="h-full p-8">
              <h2 className="font-display text-lg font-bold tracking-tight text-ink">
                What you get
              </h2>
              <ul className="mt-6 space-y-4">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-solar-500/30 bg-solar-500/10">
                      <Check className="h-3 w-3 text-solar-400" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* ── Engagement process ───────────────────────────────────────────── */}
      <Section className="border-y border-hairline bg-panel/20">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement"
            title="How a project runs."
            intro="Five stages, from first conversation to a deployed protocol you own."
          />
        </Reveal>

        <ol className="mt-14 space-y-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.05}>
              <li className="glass relative rounded-2xl p-6 shadow-panel transition-colors duration-300 hover:border-solar-500/25 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-8">
                  <span
                    aria-hidden="true"
                    className="font-mono text-3xl font-medium text-solar-500/40 sm:text-4xl"
                  >
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* ── Pricing (there isn't one) ────────────────────────────────────── */}
      <Section>
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center shadow-panel sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_50%_0%,rgba(245,138,7,0.14),transparent_70%)]"
            />
            <div className="relative">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
                {pricingStatement}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
                There are no tiers and no plans, because there is no standard project. Tell us
                about the asset and we will tell you what building it properly involves.
              </p>
              <div className="mt-10">
                <Button href={consultationHref}>
                  Request a consultation
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── How we bill ──────────────────────────────────────────────────── */}
      <Section className="border-t border-hairline bg-panel/20">
        <Reveal>
          <SectionHeading eyebrow="Billing" title="How we bill." />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-muted">
            {billingStatement}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
