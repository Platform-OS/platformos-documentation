const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      './app/forms/**/*.liquid',
      './app/views/**/*.liquid',
      './src/js/**/*.js',
      './modules/graphql/template/*.mustache',
    ],
  },
  theme: {
    extend: {
      colors: {
        'body': '#4a4a4a',
        pos: {
          'blue': '#3A8DDE',
          'darkblue': '#194F90',
          'searchblue': '#2173C4',
          'page-bg': '#F5F6FC',
          'divider': '#dddddd',
          'search': '#767676',
          'green': '#45A041',
          'tip-bg': '#EEEEF2',
          'tip-text': '#6F7286',
          'note-bg': '#E2EEFA',
          'note-text': '#2E71B2',
          'important-bg': '#FFF3E6',
          'important-text': '#B35C00',
          'warning-bg': '#FFE9EE',
          'warning-text': '#AA002C',
          'success-bg': '#E9F3E8',
          'success-text': '#166D12',
          'icon-feedback': '#8589A0'
        },
      },
      boxShadow: {
        box: '0px 8px 18px rgba(52, 61, 75, 0.3)'
      },
      fontFamily: {
        sans: ['Gotham', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
    container: {
      center: true,
      padding: '0'
    },
    variants: {
      textColor: ['responsive',  'group-hover', 'hover', 'focus']
    }
  },
};
