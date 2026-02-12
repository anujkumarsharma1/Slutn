export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#231818",
        darkBg: "#1a1010",
        "f1-red": "#E25E5E",
      },
      fontFamily: {
        display: ['"Libre Bodoni"', "serif"],
        nav: ['"Montserrat"', "sans-serif"],
        tech: ['"Orbitron"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
