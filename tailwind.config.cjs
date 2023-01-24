/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customviolet: "hsl(257, 40%, 49%)",
        customsoftmagenta: "hsl(300, 69%, 71%)",
      },
      fontFamily: {
        opensans: ["Open Sans"],
        poppins: ["Poppins"],
      },

      backgroundImage: {
        desktop: "url('/bg-desktop.svg')",
        mobile: "url('/bg-mobile.svg')",
      },
    },
  },
  plugins: [],
};
