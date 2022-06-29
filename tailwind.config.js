/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        dark: {
          primary: '#0F1624',
        },
        light: {
          primary: '#fff',
        },
      },
    },
  },
  plugins: [],
};
