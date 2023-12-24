/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {

  content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        "blue" : "#0071BC",
        "yellow" : "#FFCB45",
        "orange" : "#FF7644",
        "dark-blue" : "#0A1128",
        "red" : "#FF4D4D",
        "disable" : "#777675",
        "placeholder" : "#666666",
        "placeholder-typed"  : "#393938",
        "alert-success" : "#00C814",
        "alert-warning" : "#FFCB45",
        "alert-cancel"  : "#E10000",
        
        
      }
    },
  },
  plugins: [],
}
