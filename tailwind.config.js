/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        primary: "#1D1933",
        secondary: "#131129",
        body_text: "#C9C9C9",
        heading_text: "#fff",
        header_border: "#322C50",
        icon: "#59606B",
        icon_border: "#2A2547",
        menu: "#D4CDCD",
        purple: "#E039FD",
        dark_blue: "#6345ED",
        dark: {
          100: "#52575b",
          200: "#3c4043",
          300: "#43474a",
        },
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};