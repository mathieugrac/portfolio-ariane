import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        serif: ["var(--font-poppins)", "Georgia", "serif"],
        mono: ["var(--font-poppins)", "monospace"],
        bethany: ["BethanyElingston", "serif"],
        "bethany-italic": ["BethanyElingston", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
