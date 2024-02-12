/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f3f5f7',
          100: '#e5e9f2',
          200: '#cfd9eb',
          300: '#b2c8d6',
          400: '#9aaacf',
          500: '#7f94af',
          600: '#667fa0',
          700: '#4d6587',
          800: '#344a6e',
          900: '#1a2e49',
        },
        yellow: {
          50: '#fffbeb',
          100: '#fff5d9',
          200: '#fff0b3',
          300: '#ffeab3',
          400: '#ffe0aa',
          500: '#ffda9d',
          600: '#ffd28f',
          700: '#ffc680',
          800: '#ffbb71',
          900: '#ffae62',
        },
      },
    },
  },
  plugins: [],
}

