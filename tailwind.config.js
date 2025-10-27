/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2a0d45', // Dark purple background
        'secondary': '#4c1d95', // Brighter purple for elements
        'accent': '#7c3aed', // A lighter purple for hover effects
        'text-primary': '#ffffff',
        'text-secondary': '#d8b4fe', // A light purple for secondary text
        'highlight': '#a78bfa', // A soft violet for buttons/links
      },
    },
  },
  plugins: [],
}