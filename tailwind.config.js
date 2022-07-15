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
          accent: '#009393',
        },
        light: {
          primary: '#F1F7ED',
          accent: '#009393',
          secondary: '#00e0c6',
        },
      },
    },
  },
  plugins: [],
};
