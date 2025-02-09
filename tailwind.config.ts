import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBrown: "#2E1818",
        lightBrown: "#623C1A",
        wheat: "#E3B072",
      },
      fontFamily: {
        albert_sans: ["var(--font-albert_sans)"],
        iceberg: ["var(--font-iceberg)"],
        jacquard_24: ["var(--font-jacquard_24)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
