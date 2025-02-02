/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        customgrid: '1fr 0.5fr 0.5fr 0.5fr',
        customgrid2: '1fr 0.4fr',
      },
      colors: {
        herobg: '#ceebe9',
        customcolor: '#080B2A',
        servicecolor: '#EBDDC3',
        coral: '#FF7F50',
      },
      screens: {
        md2 : '960px',
      },
    },
  },
  plugins: [],
}