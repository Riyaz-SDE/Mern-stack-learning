/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        primary: '16px',
        secondary: '13px',
      },colors: {
        customGray: '#99a2ab',
        customBlue: '#0d6efd',
        customWhite : '#ececec'
      },
    },
  },
  plugins: [],
}

