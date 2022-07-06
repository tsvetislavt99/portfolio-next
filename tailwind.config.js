/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        dark: {
          primary: '#0F1624',
          accent: '#893168',
        },
        light: {
          primary: '#F1F7ED',
          accent: '#F5B808',
          secondary: '#5da9e9',
        },
      },
    },
  },
  plugins: [],
};
