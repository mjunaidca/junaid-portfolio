/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "#FF0000",
      grey: "#383838",
      "grey-dark": "#505050",
      "grey-light": "#757575",
      "blue-light": "#BFE2FF",
      "purple-light": "#C7C7FF",
      "pink-light": "#FFC6D7",
      "yellow-light": "#FFF9DA",
      "pink-white": "#FFEDF3",
      "grey-white": "#F8FFF2",
      skin: "#FCECDC",
      parrot: "#E8F6CA",
      royalblue: "#E1EDFF",
    },
    fontFamily: { mjs: ["Encode Sans Semi Expanded", "sans-serif"] },
    extend: {},
  },
  plugins: [],
};
