/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/index.html"],
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

