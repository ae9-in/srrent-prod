/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: {
          50:  '#fdf8f0',
          100: '#f5e6cc',
          200: '#ecd4a8',
          300: '#ddb87a',
          400: '#c9965a',
          500: '#b8834a',
          600: '#9e6b35',
          700: '#7d502a',
          800: '#5c3a1e',
          900: '#3d2510',
        },
        cream: {
          50:  '#fffef9',
          100: '#fdf8ee',
          200: '#f9eedc',
          300: '#f4e0c0',
        },
      },
      fontFamily: {
        cinzel:    ['Cinzel', 'serif'],
        playfair:  ['Playfair Display', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
