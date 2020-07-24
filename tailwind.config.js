module.exports = {
  purge: false, /* MANUALLY CONFIGURED PURGECSS IN POSTCSS.CONFIG */
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ],
    },
    fill: theme => (
      {
        'red': theme('colors.red.500'),
      }
    ),
    extend: {
      colors: {
        'primary-color': '#1A2F5C', /* Primary Text Color, Header Background Top Color */
        'secondary-color': '#00A7E1', /* Secondary Text Color, Ribbon Background Top Color */
        'primary-gradient-mid': '#0D6C9F', /* Header Background Mid Color */
        'primary-gradient-bot': '#00A7E1', /* Header Background Bottom Color */
        'secondary-gradient-bot': '#6DC9B1', /* Top Header Background Bottom Color */
        'near-gray': {
           100: '#E0E1DD',
           700: '#636569'
        },
        'near-white': '#F9F8F8'
      },
      fontSize: {
        '3xl-2': '2rem',
        '5xl-2': '2.8125rem',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fill: ['responsive', 'hover', 'focus']
  },
  plugins: [],
}
