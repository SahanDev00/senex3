/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '5xs': '344px',
      '4xs': '360px',
      'xxxs': '390px',
      'xxs': '400px',
      'xs': '414px',
      '2xs': '430px',
      'ssm': '540px',
      'sm': '640px',
      'md': '768px',
      '1md': '820px',
      'mmd': '853px',
      '2md': '912px',
      'lg': '1024px',
      'xl': '1280px',
      'mxl': '1366px',
      'lxl': '1480px',
      '2xl': '1536px',
      'xxl': '1920px',
      '3xl': '2048px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      mono: ["Share Tech Mono", "monospace"],
      abhaya: ["Abhaya Libre", "serif"],
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

