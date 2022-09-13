/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        myGif: "url(/assets/img/stars.gif)",
      },
    },
  },
  plugins: [],
};
