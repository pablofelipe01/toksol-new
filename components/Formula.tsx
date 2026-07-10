import { cn } from "@/components/ui";

/**
 * Typographic treatment for the engine's math. Plain styled monospace rather
 * than KaTeX — the expressions are short enough to read cleanly, and it keeps
 * the bundle free of a math renderer.
 */
export default function Formula({
  lines,
  caption,
  className,
}: {
  lines: string[];
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("my-6", className)}>
      <div className="relative overflow-hidden rounded-xl border border-solar-500/20 bg-panel/70 px-5 py-5 sm:px-7 sm:py-6">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-solar-500/60 to-transparent"
        />
        <div className="overflow-x-auto">
          <pre className="font-mono text-sm leading-loose text-ink sm:text-base">
            {lines.map((line) => (
              <code key={line} className="block whitespace-pre">
                {line}
              </code>
            ))}
          </pre>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-ink-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function Callout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="my-8 rounded-2xl border border-solar-500/25 bg-[linear-gradient(135deg,rgba(255,176,32,0.07),rgba(255,106,61,0.03))] p-6 sm:p-8">
      {title ? (
        <h3 className="mb-3 font-display text-lg font-bold tracking-tight text-solar-400">
          {title}
        </h3>
      ) : null}
      <div className="text-base leading-relaxed text-ink sm:text-lg">{children}</div>
    </aside>
  );
}
