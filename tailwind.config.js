/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-custom": "#160647",
        "red-custom": "#F22E52",
        "light-blue-custom": "#47BEBA",
        "gray-custom": "#6C6C6C",
      },
      fontFamily: {},
      screens: {
        mini: "320px",
      },
    },
  },
  plugins: [],
};
