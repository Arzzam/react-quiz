/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-darkest": "#343a40",
        "color-dark": "#495057",
        "color-medium": "#ced4da",
        "color-light": "#f1f3f5",
        "color-theme": "#1098ad",
        "color-accent": "#ffa94d",
      },
    },
  },
  plugins: [],
};
