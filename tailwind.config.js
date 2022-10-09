/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {}
    },
  },
  plugins: [require("daisyUi")],

  daisyUi:{
    themes:["retro"]
  },
}
