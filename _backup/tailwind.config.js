/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#112A22',
          dark: '#0A1914',
        },
        secondary: {
          DEFAULT: '#C5A059',
          light: '#E3CDA4',
        },
        azure: '#FDFBF7',
        cream: '#FDFBF7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        '32': '32px',
      },
    },
  },
  plugins: [],
}
