/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        heroHeight:"750px"
      },
      colors: {
        googlebuttom: "#1A202C;",
        entrar: "#04C35C"
      }
    },
  },
  plugins: [],
}