const defaultTheme = require('tailwindcss/defaultTheme')
const {transform} = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
          colors: {
            fake: '#11FF11'
          },
          animation: {
              blob: 'blob 7s infinite'
          },
          keyframes: {
              blob: {
                  "0%" : {
                      transform: "translate(0px, 0px) scale(1)"
                  },
                  "33%": {
                      transform: "translate(30px, -50px) scale(1.2)"
                  },
                  "66%": {
                      transform: "translate(-20px, 20px) scale(0.8)"
                  },
                  "100%": {
                      transform: "translate(0px, 0px) scale(1)"
                  }
              }
          },
        fontFamily: {
          sans: ['Test Calibre', ...defaultTheme.fontFamily.sans],
        },
      },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  }

