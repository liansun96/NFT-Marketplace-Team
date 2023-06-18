/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      spacing: {
        '100': '25rem',
        '104': '26rem',
      },
      colors: {
        primary: "#1D1933",
        secondary: "#131129",
        info: "#0e1029",
        warning:"#10112a",
        body_text: "#C9C9C9",
        heading_text: "#fff",
        header_border: "#322C50",
        border: "#2c1933",
        icon: "#59606B",
        icon_border: "#2A2547",
        menu: "#D4CDCD",
        purple: "#E039FD",
        dark_blue: "#6345ED",
        media_bg:"#28243F",
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
  plugins: [require("flowbite/plugin")],
};
