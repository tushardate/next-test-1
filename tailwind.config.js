const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        tdserif: ["Canela", ...defaultTheme.fontFamily.sans],
        tdsans: [
          "TT Firs Neue",
          "'Space Mono'",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
        "10xl": "10rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
