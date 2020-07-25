module.exports = {
  purge: false /* MANUALLY CONFIGURED PURGECSS IN POSTCSS.CONFIG */,
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif", '"Helvetica Neue"', "Arial"]
    },
    extend: {
      colors: {
        "primary-color":
          "#00a4c7" /* Primary Text Color, Header Background Top Color */,
        "secondary-color":
          "#0e766f" /* Secondary Text Color, Ribbon Background Top Color */,
        "complimentary-color":
          "#00ad87" /* Complimentaty Text Color, Ribbon Background Top Color */
      }
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fill: ["responsive", "hover", "focus"]
  },
  plugins: []
};
