import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      base: "640px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
