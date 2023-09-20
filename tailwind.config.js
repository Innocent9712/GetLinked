/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash-bold': 'Clash Display Bold',
        'clash-semibold': 'Clash Display Semibold',
        'montserrat': ["Montserrat", "sans"],
        'unica': ["Unica One", "cursive"],
      },
      colors: {
        custom: {
          purple: {
            "one": "#150E28",
            "two": "#903AFF",
            "three": "#D434FE",
            "gradient": "linear-gradient(90deg, #D434FE 0%, #903AFF 100%)",
          }
        }
      }
    },
  },
  plugins: [],
}
