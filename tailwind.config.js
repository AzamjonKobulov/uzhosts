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
          },
          purple: {
            DEFAULT: "#6366F1",
            100: "#D6D4F9",
            200: "#5A4C7D",
            300: "#908EB5",
            400: "#303070",
            500: "#3C3B75",
          },
          green: "#25BB7C",
          gray: {
            DEFAULT: "#A29C9A",
            100: "#9D9DA6",
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
      },
    },
  },
  plugins: [],
};
