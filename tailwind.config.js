/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      sec: "Josefin Sans",
    },
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#10F8B2",
      },
      animation: {
        slide: "slide 12s infinite",
      },
      keyframes: {
        slide: {
          "0%": { "margin-top": "0px" },
          "100%": { "margin-top": "0px" },
          "16%": { "margin-top": "-60px" },
          "82%": { "margin-top": "-60px" },
          "33%": { "margin-top": "-120px" },
          "66%": { "margin-top": "-120px" },
          "50%": { "margin-top": "-150px" },
        },
      },
      lineHeight: {
        "leading-11": "54px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
