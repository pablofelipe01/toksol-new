import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

// Touches the database and reads request headers — never prerender.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = { name: 200, company: 200, email: 320, message: 5000 } as const;

type Payload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  message?: unknown;
  /** Honeypot — real users never fill this hidden field. */
  website?: unknown;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

// Deliberately permissive: reject only what is obviously not an address.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept bots so they get no signal to adapt, but store nothing.
  if (asString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name);
  const company = asString(body.company);
  const email = asString(body.email);
  const message = asString(body.message);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please tell us your name.";
  if (!message) errors.message = "Please describe your asset or use case.";
  if (email && !EMAIL_RE.test(email)) errors.email = "That email doesn't look right.";
  if (name.length > LIMITS.name) errors.name = "That's too long.";
  if (company.length > LIMITS.company) errors.company = "That's too long.";
  if (email.length > LIMITS.email) errors.email = "That's too long.";
  if (message.length > LIMITS.message) errors.message = "Please shorten your message.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please check the form.", fields: errors }, { status: 422 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Env not configured (e.g. a preview without secrets) — tell the client to
    // fall back to the mailto link rather than pretend the lead was captured.
    return NextResponse.json({ error: "Storage unavailable.", fallback: true }, { status: 503 });
  }

  const { error } = await supabase.from("consultation_requests").insert({
    name,
    company: company || null,
    email: email || null,
    message,
    source: "website",
    user_agent: request.headers.get("user-agent")?.slice(0, 500) ?? null,
  });

  if (error) {
    console.error("consultation insert failed:", error.message);
    return NextResponse.json({ error: "Something went wrong.", fallback: true }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
