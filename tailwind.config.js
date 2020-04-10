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
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1440px',
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
