/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#C5A47E",
        "primary-hover": "#B08D66",
        secondary: "#1A2E35",
        "background-light": "#FAFAF9",
        "background-dark": "#0F172A",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E293B",
        "text-light": "#334155",
        "text-dark": "#E2E8F0",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
