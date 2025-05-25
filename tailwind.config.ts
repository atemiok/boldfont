import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00274D',
        accent: '#FF6B00',
        neutral: {
          light: '#F4F4F4',
          dark: '#333333',
        },
      },
      fontFamily: {
        sans: ['var(--font-opensans)'],
        heading: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}

export default config;
