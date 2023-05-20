/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'inter' : 'Inter',
        'roboto' : 'Roboto',
      },
      colors: {
        'light-mode' : '#E7E7E9',
        'dark-mode' : '#161618',
        'primary-color' : '#3376BC',
        'secondary-color' : '#91BBE5',
        'third-color' : '#9A8873',
        'hover-color' : '#2D6DB0',
      },
      container: {
        padding: {
          'DEFAULT': '2rem',
          'sm': '2rem',
          'lg': '4rem',
          'xl': '5rem',
          '2xl': '6rem',
        },
      },
      screens: {
        'sm': '530px',
        'md': '801px',
        'xl': '1280px',
        
      },
    },
  },
  plugins: [],
}
