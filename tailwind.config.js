/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: "#383838",
      "grey-dark": "#505050",
      "grey-light": "#757575",
    },
    fontFamily: { mjs: ["Encode Sans Semi Expanded", "sans-serif"] },
    extend: {},
  },
  plugins: [],
};
