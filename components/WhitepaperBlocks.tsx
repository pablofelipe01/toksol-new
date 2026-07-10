import Formula, { Callout } from "@/components/Formula";
import type { Block } from "@/content/types";

/** Renders one structured whitepaper block. Mirrors the PDF generator's cases. */
export default function WhitepaperBlock({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return <p className="mt-5 text-base leading-relaxed text-ink-muted">{block.text}</p>;

    case "formula":
      return <Formula lines={block.lines} caption={block.caption} />;

    case "callout":
      return <Callout title={block.title}>{block.text}</Callout>;

    case "list": {
      const items = block.items.map((item) => (
        <li key={item.slice(0, 48)} className="flex gap-3 text-base leading-relaxed text-ink-muted">
          <span
            aria-hidden="true"
            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-solar-500"
          />
          <span>{item}</span>
        </li>
      ));

      return block.ordered ? (
        <ol className="mt-6 space-y-3">{items}</ol>
      ) : (
        <ul className="mt-6 space-y-3">{items}</ul>
      );
    }

    case "definitions":
      return (
        <dl className="mt-6 space-y-4 rounded-2xl border border-hairline bg-panel/50 p-6">
          {block.items.map((item) => (
            <div key={item.term}>
              <dt className="font-mono text-sm font-medium text-solar-400">{item.term}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.def}</dd>
            </div>
          ))}
        </dl>
      );

    case "references":
      return (
        <ol className="mt-6 space-y-4">
          {block.items.map((item, index) => (
            <li key={item.slice(0, 48)} className="flex gap-4 text-sm leading-relaxed text-ink-muted">
              <span className="font-mono text-ink-muted/50">
                [{String(index + 1).padStart(2, "0")}]
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
  }
}
