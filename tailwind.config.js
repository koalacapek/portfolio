/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deepblue: "rgb(4, 12, 24)",
        tertiary: "#151030",
        greyBorder: "rgb(163, 163, 163)",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
