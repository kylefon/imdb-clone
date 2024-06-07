/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      light: {
        textPrimary: '#121212',
        textSecondary: '#777777',
        bgPrimary: '#ECECEC',
        bgSecondary: '#D7D7D7',      
        yellow: '#E0B519',
      },
      dark: {
        textPrimary: '#C3C3C3',
        textSecondary: '#797979',
        bgPrimary: '#0E0E0E',
        bgSecondary: '#1A1A1A',
        bgNav: '#080808',
        white: '#FFFFFF',
        card: '#151515'
      }, 
      gray: '#A3A3A3'
    },
    fontSize: {
      h1: '36',
      h2: '28',
      h3: '20',
      h5: '18',
      p: '16',
    }, 
    extend: {
        minWidth: {
        "62.5": '15.625rem', 
      },
      fontSize: {
        header: '235px',
        h1: '36px',
        h2: '28px',
        h3: '20px',
        h5: '18px',
        p: '16px'
      },
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

