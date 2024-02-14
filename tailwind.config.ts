import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xsm": { "max": "575px" },
        "sm": { "min": "576px", "max": "767px" },
        "md": { "min": "768px", "max": "991px" },
        "lg": { "min": "992px", "max": "1199px" },
        "xl": { "min": "1200px", "max": "1399px" },
        "xxl": { "min": "1400px" },
      },
      colors: {
        "orange-base":"#F78B00",
        "blue-base":"#00285F",
        "custom-blue-base":"rgba(0, 40, 95, 1)",
      },
      height: {
        "seventy": "70px",
      },
      margin: {
        "seventy": "70px",
      },
    },
  },
  plugins: [],
};
export default config;
