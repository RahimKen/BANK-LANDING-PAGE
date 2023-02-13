/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,svg}",
  ],
  theme: {
    extend: {
      colors : {
        "dark-blue" : "#2d314d",
        "lime-green" : "#31d35c",
        "blue-cyan" :"#2bb7da",
        "grayish-blue" : "#9698a6",
        "light-gray" : "#f3f4f6",
        "very-light-gray" : "#fafafa",
        "white" : "#ffffff"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
