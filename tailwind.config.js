const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        GalanoGrotesque: ["Galano Grotesque", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: { blue: "#146EB4" },
      },
    },
  },
  plugins: [],
};
