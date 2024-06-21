/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        "brown": {
          100: '#ECE0D1',
          300: '#DBC1AC',
          600: '#967259',
          900: '#634832'
        }
      },
      boxShadow: {
        normal: '0px 1px 10px 0px #0000000D'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily:{
        'Dana':'Dana',
        'DanaMedium':'DanaMedium',
        'DanaBold':'DanaBold',
        'Morabba-Medium':'Morabba-Medium',
        'Morabba-Bold':'Morabba-Bold',
        'Morabba-Light':'Morabba-Light'
      },
      letterSpacing:{
        'tightest':'-0.065em'
      },
      width:{
        '30':'7.5rem',

      },
      height:{
        '30':'7.5rem'
      }
    
      

    }
  },
  plugins: [

    function({addVariant}){
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover');

    }
  ],
}

