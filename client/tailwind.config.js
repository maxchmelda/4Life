/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "custom-border": "rgba(177, 58, 140, 0.3)", // #B13A8C with 30% opacity
      },
    },
  },
  plugins: [],
};
