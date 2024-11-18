/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '400px',
      'xs': '414px',
      'ssm': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'mxl': '1366px',
      'lxl': '1480px',
      '2xl': '1536px',
      '3xl': '2048px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      mono: ["Share Tech Mono", "monospace"],
      abhaya: ["Abhaya Libre", "serif"],
    },
    extend: {},
  },
  plugins: [],
}

