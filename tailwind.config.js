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
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        dark: {
          primary: '#0d1608',
          accent: '#FB8E1C',
        },
        light: {
          primary: '#F1F7ED',
          accent: '#FB8E1C',
          secondary: '#fdbd7a',
        },
      },
    },
  },
  plugins: [],
};
