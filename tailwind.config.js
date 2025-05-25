/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FF6B6B',
        background: 'rgb(0, 39, 77)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        sans: ['var(--font-opensans)'],
      },
    },
  },
  plugins: [],
} 