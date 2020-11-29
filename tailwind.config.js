const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
      lineHeight: {
        "point-75": "0.75",
        "point-80": "0.80",
        "point-85": "0.85",
        "point-90": "0.90",
        "point-95": "0.95",
        tighter: "1.085",
        tightest: "1.17",
      },
    },
  },
  variants: {},
  plugins: [],
};
