import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Formula, { Callout } from "@/components/Formula";
import Reveal from "@/components/Reveal";
import { Button, Container, Eyebrow, GlowDivider, Section } from "@/components/ui";
import { consultationHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The bidirectional token engine: bonding-curve pricing, the reserve invariant, the solvency theorem, and an untouchable reserve — built on Solana with Anchor.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "Technology — TokSol",
    description:
      "Bonding-curve pricing, the reserve invariant, the solvency theorem, and an untouchable reserve.",
    url: "/technology",
  },
};

const SUBSECTIONS = [
  { id: "bidirectional-tokens", number: "6.1", title: "Bidirectional cryptographic tokens" },
  { id: "price-function", number: "6.2", title: "The price function" },
  { id: "reserve-function", number: "6.3", title: "The reserve function" },
  { id: "invariant-pricing", number: "6.4", title: "Invariant pricing" },
  { id: "solvency-theorem", number: "6.5", title: "The solvency theorem" },
  { id: "untouchable-reserve", number: "6.6", title: "The untouchable reserve" },
  { id: "stack", number: "6.7", title: "Technical stack" },
  { id: "fees", number: "6.8", title: "Configurable fees" },
];

const STACK_FACTS = [
  { label: "Throughput", value: "~65,000 TPS" },
  { label: "Finality", value: "~400 ms" },
  { label: "Cost per transaction", value: "~$0.00025" },
];

function Heading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
      <span className="mr-3 font-mono text-lg font-normal text-solar-500">{number}</span>
      {title}
    </h2>
  );
}

export default function TechnologyPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-hairline">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_90%_at_50%_0%,rgba(245,138,7,0.14),transparent_70%)]"
        />
        <Container className="py-20 sm:py-28">
          <Reveal>
            <Eyebrow>Technology</Eyebrow>
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tightest text-ink sm:text-6xl">
              The bidirectional token engine.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              A bonding curve prices a token against a base asset as a deterministic function
              of circulating supply. Because it quotes both sides of the trade, liquidity is
              permanent and two-way, and solvency stops being a promise and becomes a
              property of the system.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="mb-14 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
                On this page
              </h2>
              <ol className="mt-5 space-y-2.5">
                {SUBSECTIONS.map((item) => (
                  <li key={item.id} className="flex gap-3 text-sm">
                    <span className="font-mono text-ink-muted/50">{item.number}</span>
                    <a
                      href={`#${item.id}`}
                      className="text-ink-muted transition-colors hover:text-solar-400"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="max-w-prose">
            <section>
              <Heading {...SUBSECTIONS[0]} />
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                A bonding curve is an automated market maker (AMM) that sets a token&apos;s
                price against a base asset — in our deployments, USDC — as a function of
                circulating supply. Buying mints new tokens and moves the price up the curve;
                selling burns tokens and moves it back down.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Because the curve prices both buys and sells, liquidity is permanent and
                two-way. A holder can always exit at the curve price without any external
                liquidity provider, any counterparty willing to take the other side, or any
                order book deep enough to absorb the trade. The protocol is the counterparty,
                and it is always solvent.
              </p>
            </section>

            <GlowDivider />

            <section className="mt-14">
              <Heading {...SUBSECTIONS[1]} />
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                The default price function is the square-root curve:
              </p>
              <Formula
                lines={["P = S^0.5"]}
                caption="P is the price in the base asset; S is circulating supply."
              />
              <p className="text-base leading-relaxed text-ink-muted">
                Early buyers get a low price. Increases decelerate as supply grows, so the
                curve rewards conviction without producing the runaway convexity of a linear
                or exponential shape. It is continuous and deterministic: the same supply
                always yields the same price, computed on-chain, with no oracle in the loop.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                The exponent is not sacred. It is the first parameter we tune per asset —
                a curve for a fractionalised building behaves differently from a curve for a
                royalty stream, and both differ from a curve for a commodity warehouse
                receipt.
              </p>
            </section>

            <GlowDivider />

            <section className="mt-14">
              <Heading {...SUBSECTIONS[2]} />
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                The reserve <code className="font-mono text-solar-400">R</code> — the base
                asset actually held by the protocol — is the area under the price curve:
              </p>
              <Formula
                lines={["R = ∫₀ˢ x^0.5 dx = (2/3) · S^1.5 ≈ 0.666667 · S^1.5"]}
                caption="The reserve is the definite integral of price over circulating supply."
              />
              <p className="text-base leading-relaxed text-ink-muted">
                This is the entire trick, and it is worth stating plainly: the reserve is not
                a number chosen by a treasurer. It is the integral of the function used to
                price every purchase. Whatever was paid in, along the curve, is exactly what
                is owed back out along the same curve.
              </p>
            </section>

            <GlowDivider />

            <section className="mt-14">
              <Heading {...SUBSECTIONS[3]} />
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                When supply moves from <code className="font-mono text-solar-400">S</code> to{" "}
                <code className="font-mono text-solar-400">S + ΔS</code> and a buyer deposits{" "}
                <code className="font-mono text-solar-400">ΔR</code>, the system holds the
                invariant:
              </p>
              <Formula
                lines={[
                  "S_new = ( S^1.5 · (R + ΔR) / R )^(2/3)",
                  "R_new = R · (S + ΔS)^1.5 / S^1.5",
                ]}
                caption="Evaluated on-chain on every buy and every sell."
              />
              <p className="text-base leading-relaxed text-ink-muted">
                These run on-chain on every transaction, so the invariant holds regardless of
                the order in which trades arrive or the size of any one of them. There is no
                sequencing assumption to violate, and no state in which a large trade leaves
                the reserve short.
              </p>
            </section>

            <GlowDivider />

            <section className="mt-14">
              <Heading {...SUBSECTIONS[4]} />
              <Callout title="The Solvency Theorem">
                At all times, the reserve holds exactly the funds required for every holder to
                sell simultaneously. Solvency is a mathematical property, not a contractual
                promise.
              </Callout>
              <p className="text-base leading-relaxed text-ink-muted">
                The proof sketch is the reserve function itself. If the reserve is by
                construction the definite integral of the price function over the circulating
                supply, then redeeming all{" "}
                <code className="font-mono text-solar-400">S</code> tokens back down the same
                curve returns exactly{" "}
                <code className="font-mono text-solar-400">R</code>. Not approximately.
                Exactly. A bank run is not a failure mode of this design; it is just every
                holder walking down the curve they walked up.
              </p>
            </section>

            <GlowDivider />

            <section className="mt-14">
              <Heading {...SUBSECTIONS[5]} />
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                There is no instruction that can withdraw the base asset from the reserve
                except a holder selling — and therefore burning — their tokens. Any
                administrative &quot;transfer reserves&quot; path is removed from the program
                before deployment, and its absence is verifiable by anyone reading the
                deployed bytecode.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">The consequences follow directly:</p>
              <ul className="mt-5 space-y-3">
                {[
                  "The token issuer cannot defraud buyers — there is no function that would let them.",
                  "The platform cannot defraud users, including TokSol. We hold no key that reaches the reserve.",
                  "A compromise of the website or front end cannot reach on-chain funds. There is nothing on the front end that could.",
                  "Solvency is auditable by anyone, in real time, directly from chain state.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-ink-muted">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-solar-500"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <GlowDivider />

            <section className="mt-14">
              <Heading {...SUBSECTIONS[6]} />
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                Programs are written in Rust using the{" "}
                <strong className="font-semibold text-ink">Anchor</strong> framework and
                deployed on <strong className="font-semibold text-ink">Solana</strong>. The
                rationale is throughput and cost: asset transactions are frequently small and
                frequently repeated, and a chain whose fees exceed the value of the trade
                cannot host them.
              </p>

              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                {STACK_FACTS.map((fact) => (
                  <div key={fact.label} className="glass rounded-xl p-5">
                    <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-mono text-lg font-medium text-solar-400">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-base leading-relaxed text-ink-muted">
                On-chain state is verifiable on Solana Explorer. Anyone can read the reserve
                balance and the circulating supply and check the invariant themselves, without
                asking TokSol or the issuer for anything.
              </p>
            </section>

            <GlowDivider />

            <section className="mt-14">
              <Heading {...SUBSECTIONS[7]} />
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                Fees are set at creation and verifiable on-chain: a platform fee and a
                configurable issuer fee, applied symmetrically to buys and to sells. They are
                distributed <em>before</em> the reserve state updates, so the solvency
                invariant always holds on the net reserve — a fee can never be paid out of the
                money owed to holders.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                Exact parameters are defined per engagement, alongside the curve. We do not
                publish rates here because there is no single rate to publish.
              </p>

              <Callout>
                <span className="text-base text-ink-muted">
                  TokSol does not promise price appreciation or investment returns. The engine
                  guarantees that a holder can always sell at the curve price. It does not, and
                  cannot, guarantee what that price will be.
                </span>
              </Callout>
            </section>

            <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button href="/whitepaper" variant="secondary" className="w-full sm:w-auto">
                Read the whitepaper
              </Button>
              <Button href={consultationHref} className="w-full sm:w-auto">
                Request a consultation
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </article>
        </div>
      </Section>
    </>
  );
}
