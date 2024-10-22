/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Roboto", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        "warn-color": "#EB5757",
        heading: "#252525",
        "base-text": "#4f4f4f",
        "placeholder-text-color": "#979797",
        "action-color": "#2b56f6",
        "card-bg-color": "#f6f6f6",
        "fiat-green": "#27AE60",
        "secondary-btn-color": "#F0F0F0",
        "secondary-gray": "#BDBDBD",
        "transactions-heading": "#272727",
        BGVeryLightGrey: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
