/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {}
    },
  },
  plugins: [require("daisyUi"),require('@tailwindcss/forms')], 

  daisyUi:{
    themes:["luxury"]
  },
}
