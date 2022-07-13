/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-mode': '#F6F5F5',
        'dark-mode': '#00334E',
        'primary-color': '#145374',
        'secondary-color': '#EE6F57',
        'button-color': '#FA5739',
        'button-hover-color': '#D2624D',
        'gray-color': '#F6F5F5',
      },
      fontFamily: {
        'inter' : ['Inter'],
        'roboto' : ['Roboto'],
      },
      container: {
        padding: {
          'DEFAULT': '1rem',
          'sm': '2rem',
          'lg': '4rem',
          'xl': '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
