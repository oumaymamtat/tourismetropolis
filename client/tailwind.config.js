module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor : theme => ({
      ...theme("colors"),
      primary : "#515DA3",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
