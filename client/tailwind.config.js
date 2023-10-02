/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matcha': '#D1F4C9',
        'purple': '#7a66ee'
      }
    },
  },
  plugins: [],
}

