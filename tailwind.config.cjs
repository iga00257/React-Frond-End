/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary:'#8AC187',
      black:'#3B3C5A',
      secondary:'#F5F5F5',
      gray:'#BBBBBB',
      settingToggle:'#FFFFFF99'
    }
  },
  plugins: [],
}
