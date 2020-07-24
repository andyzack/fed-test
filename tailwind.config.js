module.exports = {
  purge: false /* MANUALLY CONFIGURED PURGECSS IN POSTCSS.CONFIG */,
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['"Open Sans"', '"Helvetica Neue"', "Arial", "sans-serif"]
    },
    fill: theme => ({
      red: theme("colors.red.500")
    }),
    extend: {
      colors: {
        "primary-color":
          "#00A7E1" /* Primary Text Color, Header Background Top Color */,
        "secondary-color":
          "#1A2F5C" /* Secondary Text Color, Ribbon Background Top Color */,
        "near-gray": {
          100: "#E0E1DD",
          700: "#636569"
        },
        "near-white": "#F9F8F8"
      },
      fontSize: {
        "3xl-2": "2rem",
        "5xl-2": "2.8125rem"
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fill: ["responsive", "hover", "focus"]
  },
  plugins: []
};
