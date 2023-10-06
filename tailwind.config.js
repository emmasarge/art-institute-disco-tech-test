/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        dark: '#221C07',
        mustard: '#F1B417'
      },
      borderColor: {
        mustard: '#F1B417',
        offWhite: '#FAFAFA',
      }
    },
  },
  plugins: [],
}

