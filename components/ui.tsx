import Link from "next/link";
import type { ReactNode } from "react";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-solar-500">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-500";

const buttonVariants = {
  primary:
    "bg-solar-flare text-void shadow-[0_10px_40px_-12px_rgba(245,138,7,0.7)] hover:brightness-110 hover:shadow-[0_14px_50px_-10px_rgba(245,138,7,0.85)] active:brightness-95",
  secondary:
    "border border-solar-500/40 text-solar-400 hover:border-solar-500 hover:bg-solar-500/10",
  ghost: "text-ink-muted hover:text-ink",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const classes = cn(buttonBase, buttonVariants[variant], className);
  // mailto: and http(s): targets bypass the client router.
  const isExternal = external ?? /^(https?:|mailto:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass relative rounded-2xl p-6 shadow-panel",
        interactive &&
          "transition-colors duration-300 hover:border-solar-500/25 hover:bg-panel-2",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Thin amber rule used to separate major bands. */
export function GlowDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-solar-500/25 to-transparent"
    />
  );
}
