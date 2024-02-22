/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '68': '17rem', // Corresponds to 272 px (height in figma)
        '98': '24.5rem' // Corresponds to 392 px (width in figma)
      }
    },
  },
  plugins: [],
}

