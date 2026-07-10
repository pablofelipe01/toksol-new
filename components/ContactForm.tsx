"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/components/ui";
import { site } from "@/lib/site-config";

type Fields = { name: string; company: string; email: string; message: string };

const EMPTY: Fields = { name: "", company: "", email: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-hairline bg-panel px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-colors focus:border-solar-500/50 focus:outline-none focus-visible:outline-none";

/**
 * Composes a `mailto:` link in a click handler — there is no backend, and no
 * field ever leaves the browser until the visitor sends the mail themselves.
 */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [touched, setTouched] = useState(false);

  const missingRequired = !fields.name.trim() || !fields.message.trim();

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((current) => ({ ...current, [key]: event.target.value }));

  const compose = () => {
    setTouched(true);
    if (missingRequired) return;

    const subject = `TokSol enquiry — ${fields.name}${fields.company ? ` (${fields.company})` : ""}`;
    const body = [
      `Name: ${fields.name}`,
      fields.company ? `Company: ${fields.company}` : null,
      fields.email ? `Email: ${fields.email}` : null,
      "",
      fields.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const showError = (value: string) => touched && !value.trim();

  return (
    // Not a <form>: no submit, no action, no server. A click handler builds the mailto URL.
    <div className="glass rounded-2xl p-6 shadow-panel sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink">
            Name <span className="text-corona">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={update("name")}
            aria-invalid={showError(fields.name)}
            aria-describedby={showError(fields.name) ? "contact-name-error" : undefined}
            className={cn(inputClass, showError(fields.name) && "border-corona/60")}
            placeholder="Ada Lovelace"
          />
          {showError(fields.name) ? (
            <p id="contact-name-error" className="mt-2 text-xs text-corona">
              Please tell us your name.
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-ink">
            Company
          </label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            value={fields.company}
            onChange={update("company")}
            className={inputClass}
            placeholder="Analytical Engines Ltd"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={update("email")}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink">
            What would you like to tokenize? <span className="text-corona">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={fields.message}
            onChange={update("message")}
            aria-invalid={showError(fields.message)}
            aria-describedby={showError(fields.message) ? "contact-message-error" : undefined}
            className={cn(inputClass, "resize-y", showError(fields.message) && "border-corona/60")}
            placeholder="Describe the asset, the jurisdiction it sits in, and what you want holders to be able to do."
          />
          {showError(fields.message) ? (
            <p id="contact-message-error" className="mt-2 text-xs text-corona">
              Please describe your asset or use case.
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="button"
        onClick={compose}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-solar-flare px-6 py-3.5 text-sm font-semibold text-void shadow-[0_10px_40px_-12px_rgba(245,138,7,0.7)] transition-all duration-200 hover:brightness-110 sm:w-auto"
      >
        Open in your email client
        <ArrowUpRight className="h-4 w-4" />
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        This form runs entirely in your browser. Pressing the button opens your own mail
        client with the message prefilled — nothing is sent to, or stored on, a TokSol
        server. Prefer to write directly?{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-plasma underline underline-offset-4 hover:text-solar-400"
        >
          {site.email}
        </a>
      </p>
    </div>
  );
}
