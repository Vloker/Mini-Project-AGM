/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'green': '#259F6C',
        'black': '#131313',
        'grey': '#484848',
        'red': '#FA3131',
        'white': '#FFFFFF',
        'griy': '#EDEDED'
      },
      fontFamily: {
        montserrat : ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

