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
          "'Space Grotesk'",
          ...defaultTheme.fontFamily.sans,
        ],
        tdspace: ["'Space Grotesk'", ...defaultTheme.fontFamily.sans],
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
      letterSpacing: {
        snug: "-0.0125em",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
        96: "24rem",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
      },
    },
  },
  variants: {},
  plugins: [],
};
