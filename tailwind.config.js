/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          50: '#F5E8C8',
          100: '#F0DFB0',
          200: '#E6CC80',
          300: '#DCB950',
          400: '#D4AF37',
          500: '#B8941F',
          600: '#9A7A1A',
          700: '#7C6015',
          800: '#5E4610',
          900: '#402C0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
