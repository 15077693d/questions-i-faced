import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/tailwind/safe-list/page.tsx",
  ],
  theme: {},
  plugins: [],
  safelist: [
    {
      pattern:
        /^text-(red|yellow|green|orange)-200/,
    },
  ],
};
export default config;
