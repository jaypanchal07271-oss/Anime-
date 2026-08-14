import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#090d18",
        panel: "#101827",
        accent: "#7c5cff",
        accentSoft: "#38bdf8",
        muted: "#9ca3af",
        line: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        glow: "0 20px 45px rgba(124, 92, 255, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
