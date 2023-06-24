/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        mainBg: "#ededed",
        footerGreen: "#297e7b",
      },
      fontSize: {
        secondMenuText: "14px",
      },
      boxShadow: {
        footerShadow: '0px -3px 2px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

