const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    colors: {
      primary: {
        base: colors.purple[600],
        light: colors.purple[100],
        dark: colors.purple[900],
      },
      secondary: {
        base: colors.blue[600],
        light: colors.blue[100],
        dark: colors.blue[900],
      },
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
