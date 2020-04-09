const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      'body': '#4a4a4a',
      black: '#000000',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        sans: ['Gotham', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: '640px',
      md: '1280px',
      lg: '1600px',
    },
    container: {
      center: true,
      padding: '0'
    },
  },
  corePlugins: {
    gridTemplateColumns: false,
    gridColumn: false,
    gridColumnStart: false,
    gridColumnEnd: false,
    gridTemplateRows: false,
    gridRow: false,
    gridRowStart: false,
    gridRowEnd: false,
  },
};
