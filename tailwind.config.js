/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      maxWidth: {
        base: "1022px",
      },
      fontFamily: {
        circe: ["Circe", "sans-serif"],
      },
      colors: {
        brand: {
          dark: {
            DEFAULT: "#18183E",
            100: "#2D2763",
            200: "#151516",
            300: "#272856",
            400: "#1D1C48",
            500: "#25244E",
            600: "#1F1E48",
          },
          purple: {
            DEFAULT: "#6366F1",
            100: "#D6D4F9",
            200: "#5A4C7D",
            300: "#908EB5",
            400: "#303070",
            500: "#3C3B75",
            600: "#7C799D",
            700: "#362C71",
            800: "#585382",
          },
          green: "#25BB7C",
          gray: {
            DEFAULT: "#A29C9A",
            100: "#9D9DA6",
            200: "#CAC7DD",
            300: "#F2F2F2",
            400: "#737097",
            500: "#5C5A78",
            600: "#7C799D",
          },
          brown: {
            DEFAULT: "#978686",
            100: "#8E898C",
          },
        },
      },
      borderRadius: {
        3: "3px",
      },
      backgroundImage: {
        base: "linear-gradient(86.41deg, #191D42 0%, #192D51 6.5%, #321E59 19%, #321E59 33%, #363583 60%, #321E59 87%, #1C2B52 100%);",
        ssl: "linear-gradient(180deg, #18183E 0%, #2B295A 100%);",
        "comparison-2": "linear-gradient(90deg, #C638FF 0%, #5D92E2 100%);",
        "comparison-3": "linear-gradient(90deg, #BD1F76 0%, #6C53D4 100%);",
        "comparison-4": "linear-gradient(90deg, #382A87 0%, #7A6EDA 100%);",
        "comparison-5": "linear-gradient(90deg, #1A90CD 0%, #3BDDD0 100%);",
      },
    },
  },
  plugins: [],
};
