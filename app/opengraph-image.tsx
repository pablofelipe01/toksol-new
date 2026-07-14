import { ImageResponse } from "next/og";
import { markDataUri } from "@/lib/mark-svg";
import { site, taglines } from "@/lib/site-config";

export const alt = `${site.name} — ${taglines.hero}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070A12",
          padding: "72px",
          position: "relative",
        }}
      >
        {/* Solar core glow, bled off the right edge. */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -220,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(245,138,7,0.42) 0%, rgba(255,106,61,0.16) 40%, rgba(7,10,18,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={markDataUri()} width={72} height={72} alt="" />
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}>
            <span style={{ color: "#F5F7FA" }}>{site.wordmark.lead}</span>
            <span style={{ color: "#FFB020" }}>{site.wordmark.accent}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              color: "#F5F7FA",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
            }}
          >
            {taglines.hero}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#9AA7BD", lineHeight: 1.4 }}>
            We design and build a bespoke platform, protocol and bonding curve for the assets
            you already own.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22, color: "#9AA7BD" }}>
          <span style={{ color: "#FFB020" }}>Built on Solana</span>
          <span>·</span>
          <span>On-chain verifiable</span>
          <span>·</span>
          <span>Reserve untouchable by design</span>
        </div>
      </div>
    ),
    size,
  );
}
