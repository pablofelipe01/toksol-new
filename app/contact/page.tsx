import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Container, Eyebrow, Section } from "@/components/ui";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell TokSol about the asset you want to tokenize. Every engagement is scoped and quoted case-by-case.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — TokSol",
    description: "Tell us about the asset you want to tokenize.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-hairline">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_90%_at_50%_0%,rgba(245,138,7,0.14),transparent_70%)]"
        />
        <Container className="py-20 sm:py-28">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tightest text-ink sm:text-6xl">
              Let&apos;s scope <span className="text-gradient">your asset.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              Engagements are scoped individually and quoted case-by-case. Start by telling us
              what the asset is, where it sits, and what you want holders to be able to do.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="glass group flex items-start gap-4 rounded-2xl p-6 shadow-panel transition-colors duration-300 hover:border-solar-500/25 hover:bg-panel-2"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-solar-500/20 bg-solar-500/[0.07] text-solar-400">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-base font-bold tracking-tight text-ink">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm text-ink-muted transition-colors group-hover:text-solar-400">
                    {site.email}
                  </span>
                </span>
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-start gap-4 rounded-2xl p-6 shadow-panel transition-colors duration-300 hover:border-solar-500/25 hover:bg-panel-2"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-solar-500/20 bg-solar-500/[0.07] text-solar-400">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-base font-bold tracking-tight text-ink">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted transition-colors group-hover:text-solar-400">
                    Connect with us
                  </span>
                </span>
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-start gap-4 rounded-2xl p-6 shadow-panel transition-colors duration-300 hover:border-solar-500/25 hover:bg-panel-2"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-solar-500/20 bg-solar-500/[0.07] text-solar-400">
                  <Github className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-display text-base font-bold tracking-tight text-ink">
                    GitHub
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted transition-colors group-hover:text-solar-400">
                    View the source
                  </span>
                </span>
              </a>

              <div className="rounded-2xl border border-hairline bg-panel/40 p-6">
                <h2 className="font-display text-base font-bold tracking-tight text-ink">
                  Scoped case-by-case
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  We publish no prices, tiers or plans, because there is no standard project.
                  Each engagement is quoted against the asset, its jurisdiction, and the
                  protocol it needs.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
