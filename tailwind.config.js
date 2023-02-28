/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#F7F9FB",
      orange1: "#FFCA00",
      orange2: "#FFA400",
      orange3: "#FF7F03",
      orange4: "#FF4C00",
      noodle1: "#FFC1A6",
      noodle2: "#F7A987",
      noodle3: "#EC916A",
      noodle4: "#DD561C",
      purple1: "#C099FF",
      purple2: "#9555FF",
      purple3: "#7325F4",
      purple4: "#5519B7",
      french1: "#F9ABF2",
      french2: "#E973DE",
      french3: "#DF2ECE",
      french4: "#B719A7",
      italian1: "#ADFEC4",
      italian2: "#90F7AD",
      italian3: "#69EB8D",
      italian4: "#48DB71",
      main: "#FF7D46",
      transparent: "transparent",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};