import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Logo from "@/components/Logo";
import { Container } from "@/components/ui";
import { billingStatement, complianceLinks, navLinks, site } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-hairline bg-void">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-solar-500/30 to-transparent"
      />

      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block rounded-md" aria-label="TokSol — home">
              <Logo idPrefix="footer" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.positioning} We design and build a bespoke platform, protocol and bonding
              curve for the assets you already own.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TokSol on LinkedIn"
                className="rounded-lg border border-hairline p-2.5 text-ink-muted transition-colors hover:border-solar-500/40 hover:text-solar-400"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TokSol on GitHub"
                className="rounded-lg border border-hairline p-2.5 text-ink-muted transition-colors hover:border-solar-500/40 hover:text-solar-400"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.email}`}
                className="rounded-lg border border-hairline p-2.5 text-ink-muted transition-colors hover:border-solar-500/40 hover:text-solar-400"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Company">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Compliance">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
              Compliance
            </h2>
            <ul className="mt-5 space-y-3">
              {complianceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 max-w-3xl space-y-3 border-t border-hairline pt-8">
          <p className="text-xs leading-relaxed text-ink-muted">{billingStatement}</p>
          <p className="text-xs leading-relaxed text-ink-muted">{site.microDisclaimer}</p>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} TokSol. All rights reserved.</p>
        </div>

        {/* Required verbatim, and last. */}
        <p className="mt-4 text-xs text-ink-muted">{site.trademark}</p>
      </Container>
    </footer>
  );
}
