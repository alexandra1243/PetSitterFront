const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/spacer-ui-kit/dist/**/*.js'
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            'white-space': 'nowrap',
            'overflow': 'hidden',
            'opacity': 0
          },
          '100%': {
            'overflow': 'auto',
            'white-space': 'normal'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 1.4s'
      },
      fontFamily: {
        'pacifico': ['Pacifico'],
        'protest-riot': ['Protest Riot'],
      }
    },
    colors: {
      ...colors,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
