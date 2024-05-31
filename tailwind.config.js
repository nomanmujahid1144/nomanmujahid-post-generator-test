/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#000',
        'card-gray' : '#151911',
        'color': '#e4e4e4',
        'green' : '#a9ff5c'
      }
    },
  },
  fontFamily: {
    'futura-condensed': ['Futura-Condensed-Extra-Bold', 'sans-serif']
  },
  plugins: [],
}

