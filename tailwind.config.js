/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: [
          "Roboto", {
            fontFeatureSettings: '"cv11", "ss01"'
          },
        ],
      },
    },
  },
  plugins: [],
}

