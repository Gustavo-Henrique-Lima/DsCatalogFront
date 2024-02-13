import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xsm": { "max": "320px" },
      "sm": { "max": "576px" },
      "md": { "max": "768px" },
      "l": { "max": "992px" },
      "xl": { "max": "1280px" },
    }
  },
  plugins: [],
};
export default config;
