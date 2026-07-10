/**
 * Pre-generates `public/toksol-whitepaper.pdf` from `content/whitepaper.ts`,
 * so the in-site document and the downloadable PDF can never drift apart.
 *
 * Runs automatically via the `prebuild` npm script; run `npm run pdf` to
 * regenerate by hand after editing the whitepaper content.
 *
 * Fonts are vendored under `assets/fonts/` rather than fetched, so the build
 * never depends on the network. The built-in Helvetica/Courier faces are not
 * usable here: they are WinAnsi-encoded and silently mangle the math glyphs
 * (∫ ₀ ˢ Δ ≈) the whitepaper depends on.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
// `tsconfig.json` sets `jsx: preserve` for Next, so tsx transpiles this script
// with the classic runtime — React must be in scope explicitly.
import React from "react";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Svg,
  Circle,
  Path,
  Text,
  View,
  renderToFile,
} from "@react-pdf/renderer";
import { whitepaper } from "../content/whitepaper";
import type { Block } from "../content/types";

// Keep words intact — the default hyphenation splits identifiers like `S_new`.
Font.registerHyphenationCallback((word) => [word]);

const FONT_DIR = path.join(process.cwd(), "assets", "fonts");
const font = (file: string) => path.join(FONT_DIR, file);

Font.register({
  family: "Inter",
  fonts: [
    { src: font("Inter-Regular.ttf"), fontWeight: 400 },
    { src: font("Inter-SemiBold.ttf"), fontWeight: 600 },
    { src: font("Inter-Bold.ttf"), fontWeight: 700 },
  ],
});

Font.register({
  family: "SpaceGrotesk",
  fonts: [{ src: font("SpaceGrotesk-Bold.ttf"), fontWeight: 700 }],
});

Font.register({
  family: "JetBrainsMono",
  fonts: [
    { src: font("JetBrainsMono-Regular.ttf"), fontWeight: 400 },
    { src: font("JetBrainsMono-Bold.ttf"), fontWeight: 700 },
  ],
});

/**
 * JetBrains Mono has no glyph for U+02E2 (modifier letter small S), which the
 * web copy uses as the integral's upper bound. Spell the bound out instead of
 * emitting a missing-glyph box. Inter covers every other character in the
 * document, so prose needs no substitution.
 */
const MONO_SUBSTITUTIONS: Record<string, string> = { "ˢ": "^S" };

function monoSafe(text: string): string {
  return text.replace(/ˢ/g, (char) => MONO_SUBSTITUTIONS[char] ?? char);
}

const COLOR = {
  void: "#070A12",
  panel: "#0E1420",
  panelBorder: "#1E2839",
  ink: "#F5F7FA",
  muted: "#9AA7BD",
  solar: "#FFB020",
  solarDeep: "#F58A07",
  corona: "#FF6A3D",
} as const;

const styles = StyleSheet.create({
  cover: {
    backgroundColor: COLOR.void,
    color: COLOR.ink,
    padding: 56,
    height: "100%",
    justifyContent: "space-between",
  },
  page: {
    backgroundColor: COLOR.void,
    color: COLOR.ink,
    paddingTop: 56,
    paddingBottom: 64,
    paddingHorizontal: 56,
    fontFamily: "Inter",
    fontSize: 10.5,
    lineHeight: 1.6,
  },
  wordmark: { flexDirection: "row", alignItems: "center", gap: 10 },
  wordmarkText: { fontFamily: "SpaceGrotesk", fontWeight: 700, fontSize: 22, color: COLOR.ink },
  wordmarkAccent: { fontFamily: "SpaceGrotesk", fontWeight: 700, fontSize: 22, color: COLOR.solar },
  coverTitle: {
    fontFamily: "SpaceGrotesk",
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 1.12,
    color: COLOR.ink,
    marginBottom: 18,
  },
  coverSubtitle: { fontSize: 13, lineHeight: 1.5, color: COLOR.muted, maxWidth: 400 },
  coverRule: {
    height: 3,
    width: 96,
    backgroundColor: COLOR.solarDeep,
    marginBottom: 28,
  },
  coverMeta: { fontFamily: "JetBrainsMono", fontSize: 8.5, color: COLOR.muted, letterSpacing: 1.4 },
  coverDisclaimer: { fontSize: 7.5, lineHeight: 1.5, color: COLOR.muted, maxWidth: 430 },

  sectionTitle: {
    fontFamily: "SpaceGrotesk",
    fontWeight: 700,
    fontSize: 16,
    color: COLOR.ink,
    marginTop: 22,
    marginBottom: 10,
  },
  sectionNumber: { color: COLOR.solar },
  paragraph: { fontSize: 10.5, lineHeight: 1.65, color: "#C9D2E0", marginBottom: 10 },

  h2: { fontFamily: "JetBrainsMono", fontWeight: 700, fontSize: 9, letterSpacing: 1.6, color: COLOR.solar, marginBottom: 8 },
  abstractBox: {
    backgroundColor: COLOR.panel,
    borderLeftWidth: 2,
    borderLeftColor: COLOR.solarDeep,
    padding: 16,
    marginBottom: 8,
  },

  formulaBox: {
    backgroundColor: COLOR.panel,
    borderWidth: 0.5,
    borderColor: COLOR.panelBorder,
    borderLeftWidth: 2,
    borderLeftColor: COLOR.solar,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  formulaLine: { fontFamily: "JetBrainsMono", fontWeight: 700, fontSize: 10.5, color: COLOR.solar, lineHeight: 1.8 },
  caption: { fontSize: 8.5, color: COLOR.muted, marginTop: 6, marginBottom: 10 },

  calloutBox: {
    backgroundColor: "#15110A",
    borderWidth: 0.5,
    borderColor: COLOR.solarDeep,
    padding: 16,
    marginVertical: 12,
  },
  calloutTitle: { fontFamily: "SpaceGrotesk", fontWeight: 700, fontSize: 11, color: COLOR.solar, marginBottom: 6 },
  calloutText: { fontSize: 10.5, lineHeight: 1.6, color: COLOR.ink },

  listRow: { flexDirection: "row", marginBottom: 7, paddingRight: 8 },
  bullet: { width: 14, fontSize: 10.5, color: COLOR.solar },
  listText: { flex: 1, fontSize: 10.5, lineHeight: 1.6, color: "#C9D2E0" },

  defTerm: { fontFamily: "JetBrainsMono", fontWeight: 700, fontSize: 9.5, color: COLOR.solar, marginBottom: 2 },
  defBody: { fontSize: 10, lineHeight: 1.55, color: "#C9D2E0", marginBottom: 9 },
  defBox: {
    backgroundColor: COLOR.panel,
    borderWidth: 0.5,
    borderColor: COLOR.panelBorder,
    padding: 16,
    marginVertical: 10,
  },

  refRow: { flexDirection: "row", marginBottom: 8 },
  refIndex: { width: 26, fontFamily: "JetBrainsMono", fontSize: 9, color: COLOR.muted },
  refText: { flex: 1, fontSize: 9.5, lineHeight: 1.55, color: "#C9D2E0" },

  disclaimerBox: {
    borderWidth: 0.5,
    borderColor: COLOR.solarDeep,
    backgroundColor: "#15110A",
    padding: 14,
    marginBottom: 18,
  },
  disclaimerText: { fontSize: 8, lineHeight: 1.55, color: COLOR.muted },

  footer: {
    position: "absolute",
    bottom: 28,
    left: 56,
    right: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: COLOR.panelBorder,
    paddingTop: 8,
  },
  footerText: { fontSize: 7.5, color: COLOR.muted },
});

const RAY_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

/** The sun/token mark, drawn with react-pdf primitives. */
function Mark({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      {RAY_ANGLES.map((angle) => (
        <Path
          key={angle}
          d="M24 5.5 L25.5 18 L22.5 18 Z"
          fill={COLOR.solarDeep}
          transform={`rotate(${angle}, 24, 24)`}
        />
      ))}
      <Circle cx="24" cy="24" r="14.25" stroke={COLOR.solarDeep} strokeWidth={0.75} />
      <Circle cx="24" cy="24" r="11" fill={COLOR.solar} />
      <Circle cx="24" cy="24" r="4.25" fill={COLOR.void} />
    </Svg>
  );
}

function Wordmark({ size = 22 }: { size?: number }) {
  return (
    <View style={styles.wordmark}>
      <Mark size={size + 8} />
      <Text>
        <Text style={{ ...styles.wordmarkText, fontSize: size }}>Tok</Text>
        <Text style={{ ...styles.wordmarkAccent, fontSize: size }}>Sol</Text>
      </Text>
    </View>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return <Text style={styles.paragraph}>{block.text}</Text>;

    case "formula":
      return (
        <View wrap={false}>
          <View style={styles.formulaBox}>
            {block.lines.map((line) => (
              <Text key={line} style={styles.formulaLine}>
                {monoSafe(line)}
              </Text>
            ))}
          </View>
          {block.caption ? <Text style={styles.caption}>{block.caption}</Text> : null}
        </View>
      );

    case "callout":
      return (
        <View style={styles.calloutBox} wrap={false}>
          {block.title ? <Text style={styles.calloutTitle}>{block.title}</Text> : null}
          <Text style={styles.calloutText}>{block.text}</Text>
        </View>
      );

    case "list":
      return (
        <View style={{ marginVertical: 6 }}>
          {block.items.map((item, index) => (
            <View key={item} style={styles.listRow} wrap={false}>
              <Text style={styles.bullet}>{block.ordered ? `${index + 1}.` : "•"}</Text>
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      );

    case "definitions":
      return (
        <View style={styles.defBox}>
          {block.items.map((item) => (
            <View key={item.term} wrap={false}>
              <Text style={styles.defTerm}>{item.term}</Text>
              <Text style={styles.defBody}>{item.def}</Text>
            </View>
          ))}
        </View>
      );

    case "references":
      return (
        <View style={{ marginTop: 6 }}>
          {block.items.map((item, index) => (
            <View key={item} style={styles.refRow} wrap={false}>
              <Text style={styles.refIndex}>[{String(index + 1).padStart(2, "0")}]</Text>
              <Text style={styles.refText}>{item}</Text>
            </View>
          ))}
        </View>
      );
  }
}

function Whitepaper() {
  return (
    <Document
      title={`${whitepaper.title} — TokSol Whitepaper`}
      author="TokSol"
      subject={whitepaper.subtitle}
      creator="TokSol"
      producer="TokSol"
    >
      {/* ── Cover ──────────────────────────────────────────────────────── */}
      <Page size="A4" style={styles.cover}>
        <Wordmark />

        <View>
          {/* Oversized mark as the cover's solar core. */}
          <View style={{ marginBottom: 34, opacity: 0.95 }}>
            <Mark size={110} />
          </View>
          <View style={styles.coverRule} />
          <Text style={styles.coverTitle}>{whitepaper.title}</Text>
          <Text style={styles.coverSubtitle}>{whitepaper.subtitle}</Text>
        </View>

        <View>
          <Text style={{ ...styles.coverMeta, marginBottom: 18 }}>
            {`VERSION ${whitepaper.version.toUpperCase()}  ·  ${whitepaper.date.toUpperCase()}`}
          </Text>
          <Text style={styles.coverDisclaimer}>{whitepaper.disclaimer}</Text>
        </View>
      </Page>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <Page size="A4" style={styles.page}>
        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerText}>{whitepaper.disclaimer}</Text>
        </View>

        <View style={styles.abstractBox}>
          <Text style={styles.h2}>ABSTRACT</Text>
          <Text style={{ ...styles.paragraph, marginBottom: 0 }}>{whitepaper.abstract}</Text>
        </View>

        {whitepaper.sections.map((section) => (
          <View key={section.id}>
            <Text style={styles.sectionTitle}>
              <Text style={styles.sectionNumber}>{section.number}. </Text>
              {section.title}
            </Text>
            {section.blocks.map((block, index) => (
              <BlockView key={`${section.id}-${index}`} block={block} />
            ))}
          </View>
        ))}

        <View style={{ ...styles.disclaimerBox, marginTop: 24, marginBottom: 0 }} wrap={false}>
          <Text style={styles.disclaimerText}>{whitepaper.disclaimer}</Text>
        </View>

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            TokSol · {whitepaper.title} · v{whitepaper.version}
          </Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          />
        </View>
      </Page>
    </Document>
  );
}

async function main() {
  const outDir = path.join(process.cwd(), "public");
  const outFile = path.join(outDir, "toksol-whitepaper.pdf");

  await mkdir(outDir, { recursive: true });
  await renderToFile(<Whitepaper />, outFile);

  console.log(`✔ Whitepaper PDF written to ${path.relative(process.cwd(), outFile)}`);
}

main().catch((error) => {
  console.error("✖ Failed to generate whitepaper PDF");
  console.error(error);
  process.exit(1);
});
