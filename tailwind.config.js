/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        mainBg: "#ededed",
      },
      fontSize: {
        secondMenuText: "14px",
      },

    },
  },
  plugins: [],
}

