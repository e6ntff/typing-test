/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg-color)',
        main: 'var(--main-color)',
        accent: 'var(--accent-color)',
      },
    },
  },
  plugins: [],
};
