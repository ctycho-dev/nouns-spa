/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'nouns-red': '#d63c5e',
        'nouns-yellow': '#f3ad39',
        'nouns-blue': '#5b93db',
        'nouns-green': '#51b86a',
        'nouns-orange': '#e58c4b',
        'nouns-beige': '#e1d7d5',
        'charcoal': '#212121',
        'cream': '#fdfaf5',
      },
      fontFamily: {
        'heading': ['Londrina Solid', 'cursive'],
        'mono': ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'nouns': '8px 8px 0px 0px #212121',
        'nouns-sm': '4px 4px 0px 0px #212121',
      },
    },
  },
  plugins: [],
}
