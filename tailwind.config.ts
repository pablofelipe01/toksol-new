import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--bg-void)",
        panel: {
          DEFAULT: "var(--bg-panel)",
          2: "var(--bg-panel-2)",
        },
        ink: {
          DEFAULT: "var(--text-primary)",
          muted: "var(--text-muted)",
        },
        solar: {
          400: "var(--solar-400)",
          500: "var(--solar-500)",
          600: "var(--solar-600)",
        },
        corona: "var(--corona)",
        plasma: "var(--plasma)",
        hairline: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "solar-flare":
          "linear-gradient(135deg,#FFC94D 0%,#F58A07 45%,#FF6A3D 100%)",
        "solar-text":
          "linear-gradient(135deg,#FFC94D 0%,#F58A07 60%,#FF6A3D 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,176,32,0.16), 0 18px 60px -24px rgba(245,138,7,0.55)",
        panel: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.9)",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        prose: "72ch",
      },
      keyframes: {
        "core-pulse": {
          "0%, 100%": { opacity: "0.75", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "core-pulse": "core-pulse 7s ease-in-out infinite",
        "spin-slow": "spin-slow 48s linear infinite",
        "spin-reverse": "spin-slow 72s linear infinite reverse",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
