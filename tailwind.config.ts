import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // display = Bricolage Grotesque, serif = Instrument Serif, body = Space Grotesk
        condensed: ["var(--font-display)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#060606",
        cream: "#fafafa",
        muted: "#8a8a8a",
        dim: "#6b6b6b",
        border: "rgba(255,255,255,0.08)",
        footer: "#060606",
        accent: "#d4ff00",
      },
    },
  },
  plugins: [],
};
export default config;
