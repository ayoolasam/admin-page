/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1d2939",
        secondary:"#ffffff",
        tertiary:"#f9f9fc",
        texto:"#939aa9",
        hover:"#1d2939",
        bColor:"#eef0f3"
      }
    },
  },
  plugins: [],
}

