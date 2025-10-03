/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcdcfe',
          300: '#90c6fd',
          400: '#5aa9fa',
          500: '#2a88f3',
          600: '#176ee0',
          700: '#1558b4',
          800: '#144c93',
          900: '#143f77',
        },
      },
    },
  },
  plugins: [],
}
