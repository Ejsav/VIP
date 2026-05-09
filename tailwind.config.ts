import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0B",
        ink: "#050507",
        charcoal: {
          DEFAULT: "#14141A",
          light: "#1C1C24",
          lighter: "#22222C",
        },
        smoke: {
          DEFAULT: "#2A2A30",
          light: "#3A3A42",
        },
        ivory: {
          DEFAULT: "#EDE6D6",
          soft: "#B8B0A0",
          dim: "#6B6760",
        },
        champagne: {
          DEFAULT: "#C9A961",
          bright: "#E0C176",
          deep: "#9C8447",
        },
        velvet: {
          DEFAULT: "#7A1428",
          bright: "#A02340",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      backgroundImage: {
        "champagne-shine":
          "linear-gradient(135deg, #C9A961 0%, #E0C176 40%, #9C8447 100%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
      boxShadow: {
        "glow-champagne": "0 0 40px -10px rgba(201, 169, 97, 0.35)",
        "glow-soft": "0 0 80px -20px rgba(201, 169, 97, 0.15)",
        "panel": "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.04), 0 30px 60px -30px rgba(0,0,0,0.6)",
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "spotlight": "spotlight 8s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.6s linear infinite",
        "ping-soft": "pingSoft 2.4s cubic-bezier(0,0,0.2,1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spotlight: {
          "0%": { transform: "translate3d(-10%, -10%, 0)" },
          "100%": { transform: "translate3d(10%, 10%, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pingSoft: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "75%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
