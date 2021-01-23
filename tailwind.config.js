const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    // "./pages/**/*.js",
    // "./pages/**/*.jsx",
    // "./components/**/*.js",
    // "./components/**/*.jsx",
  ],
  darkMode: false,
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "8rem",
      "10xl": "10rem",
    },
    extend: {
      fontFamily: {
        tdserif: ["Canela", ...defaultTheme.fontFamily.sans],
        tdsans: [
          "Sharp Grotesk",
          "'Space Grotesk'",
          ...defaultTheme.fontFamily.sans,
        ],
        tdspace: [
          // "Telegraf",
          "Neue Machina",
          "'Space Grotesk'",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      lineHeight: {
        "point-75": "0.75",
        "point-80": "0.80",
        "point-85": "0.85",
        "point-90": "0.90",
        "point-95": "0.95",
        tighter: "1.17",
        tightest: "1.085",
      },
      letterSpacing: {
        snug: "-0.0125em",
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
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
        "16/9": "56.25%",
        "2/1": "200%",
        full: "100%",
        "10vh": "10vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "95vh": "95vh",
        "100vh": "100vh",
        "10vw": "10vw",
        "20vw": "20vw",
        "25vw": "25vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "75vw": "75vw",
        "80vw": "80vw",
        "85vw": "85vw",
        "90vw": "90vw",
        "95vw": "95vw",
        "100vw": "100vw",

      },
      maxHeight: (theme) => ({
        ...theme("spacing"),
        full: "100%", // You can add additional custom options below it too
        screen: "100vh",
      }),
    },
  },
  variants: {},
  plugins: [],
};
