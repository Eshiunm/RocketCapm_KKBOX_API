/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    //
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1380px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    // 設定容器並水平置中
    container: {
      center: true,
    },
    backgroundSize: {
      "70%": "70%",
    },
    extend: {
      backgroundImage: {
        "header-logo":
          "url('https://pkg.kfs.io/kk-web/img/logo/kkbox-rebrand-blue.svg')",
      },
    },
  },
  plugins: [],
};
