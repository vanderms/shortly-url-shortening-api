/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm: "22.5rem",
      md: "43rem",
      lg: "74rem",
    },

    extend: {
      colors: {
        primary: "#2bd0d0",
        secondary: "#4b3f6b",
        stress: "#34313d",
        text: "#9e9aa8",
        danger: "#f46363",
        bglight: "#eff1f7",
        bgdark: "#3A3054",
        bgdarkest: "#232127",
      },

      spacing: {
        "align": '6.4%',
        "lg-align": "calc(50vw - 34.6875rem)"
      }
    },
  },
  plugins: [],
}