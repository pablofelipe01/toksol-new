"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/components/ui";
import { site } from "@/lib/site-config";

type Fields = { name: string; company: string; email: string; message: string };
type FieldErrors = Partial<Record<keyof Fields, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: Fields = { name: "", company: "", email: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-hairline bg-panel px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-colors focus:border-solar-500/50 focus:outline-none focus-visible:outline-none disabled:opacity-60";

/** Builds a prefilled mailto: as the fallback when the API is unreachable. */
function mailtoFor(fields: Fields): string {
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

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Submits consultation requests to `/api/consultation`, which persists them to
 * Supabase server-side. If the API is unavailable it degrades to a prefilled
 * `mailto:` so a lead is never lost.
 */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const update = (key: keyof Fields) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!fields.name.trim()) next.name = "Please tell us your name.";
    if (!fields.message.trim()) next.message = "Please describe your asset or use case.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async () => {
    setFormError(null);
    if (!validate()) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, website: honeypot }),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      const data = (await response.json().catch(() => ({}))) as {
        fields?: FieldErrors;
        fallback?: boolean;
      };

      if (data.fields) {
        setErrors(data.fields);
        setStatus("idle");
        return;
      }

      // Server told us to fall back, or an unexpected error: open the mail client.
      if (data.fallback || response.status >= 500) {
        window.location.href = mailtoFor(fields);
        setStatus("idle");
        return;
      }

      setStatus("error");
      setFormError("Please check the form and try again.");
    } catch {
      // Network failure — don't lose the lead.
      window.location.href = mailtoFor(fields);
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 shadow-panel sm:p-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-solar-500/25 bg-solar-500/[0.08] text-solar-400">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink">
          Request received.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
          Thanks{fields.name ? `, ${fields.name.split(" ")[0]}` : ""} — your consultation
          request is in. We&apos;ll get back to you at{" "}
          {fields.email ? (
            <span className="text-ink">{fields.email}</span>
          ) : (
            "the address you provide"
          )}
          . Every engagement is scoped case-by-case.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setErrors({});
            setStatus("idle");
          }}
          className="mt-7 text-sm font-medium text-solar-400 underline underline-offset-4 hover:text-solar-500"
        >
          Send another request
        </button>
      </div>
    );
  }

  const busy = status === "submitting";
  const showError = (key: keyof Fields) => Boolean(errors[key]);

  return (
    // Not posting to a backend via native submit — we call the API in JS so we
    // can show inline state and fall back to mailto on failure.
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
            disabled={busy}
            aria-invalid={showError("name")}
            aria-describedby={showError("name") ? "contact-name-error" : undefined}
            className={cn(inputClass, showError("name") && "border-corona/60")}
            placeholder="Ada Lovelace"
          />
          {showError("name") ? (
            <p id="contact-name-error" className="mt-2 text-xs text-corona">
              {errors.name}
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
            disabled={busy}
            aria-invalid={showError("company")}
            aria-describedby={showError("company") ? "contact-company-error" : undefined}
            className={cn(inputClass, showError("company") && "border-corona/60")}
            placeholder="Analytical Engines Ltd"
          />
          {showError("company") ? (
            <p id="contact-company-error" className="mt-2 text-xs text-corona">
              {errors.company}
            </p>
          ) : null}
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
            disabled={busy}
            aria-invalid={showError("email")}
            aria-describedby={showError("email") ? "contact-email-error" : undefined}
            className={cn(inputClass, showError("email") && "border-corona/60")}
            placeholder="you@company.com"
          />
          {showError("email") ? (
            <p id="contact-email-error" className="mt-2 text-xs text-corona">
              {errors.email}
            </p>
          ) : null}
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
            disabled={busy}
            aria-invalid={showError("message")}
            aria-describedby={showError("message") ? "contact-message-error" : undefined}
            className={cn(inputClass, "resize-y", showError("message") && "border-corona/60")}
            placeholder="Describe the asset, the jurisdiction it sits in, and what you want holders to be able to do."
          />
          {showError("message") ? (
            <p id="contact-message-error" className="mt-2 text-xs text-corona">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {/* Honeypot: hidden from users, catches naive bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {formError ? (
        <p role="alert" className="mt-5 text-sm text-corona">
          {formError}
        </p>
      ) : null}

      <button
        type="button"
        onClick={submit}
        disabled={busy}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-solar-flare px-6 py-3.5 text-sm font-semibold text-void shadow-[0_10px_40px_-12px_rgba(245,138,7,0.7)] transition-all duration-200 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {busy ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Request a consultation
            <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        Your details are sent securely to TokSol and stored only to respond to your
        enquiry — never sold or shared. Prefer to write directly?{" "}
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
