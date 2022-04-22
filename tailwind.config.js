const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: "#0369a1 ",
        main: "#075985",
        dark: "#0c4a6e",
      },
      gray: colors.gray,
      white: colors.white,
    },
  },
};
