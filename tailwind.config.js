/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      screens: {
        fm: '1440px'
      },
      colors: {
        primary: {
          600: 'hsla(0, 0%, 100%, 0.6)',
          750: 'hsla(0, 0%, 100%, 0.75)'
        },
        secondary: {
          300: 'hsl(277, 64%, 61%)',
          600: 'hsl(244, 38%, 16%)',
          900: 'hsl(233, 47%, 7%)'
        }
      },
      fontFamily: {
        body: ['Inter'],
        lexand: ['Lexend Deca']
      }
    },
  },
  plugins: [],
}
