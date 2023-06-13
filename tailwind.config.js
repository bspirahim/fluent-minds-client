/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2ECC71",

          "secondary": "#a9f9b4",

          "accent": "#d37f47",

          "neutral": "#302A3C",

          "base-100": "#EEEBF4",

          "info": "#82D8F8",

          "success": "#16CA7C",

          "warning": "#EECA5D",

          "error": "#F65A4C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

