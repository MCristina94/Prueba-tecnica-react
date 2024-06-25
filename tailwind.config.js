/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        headerColor: "#f8f9fa",
      },
      colors: {
        "cod-gray": {
          "header-namePage": "#00bfba",
          "header-hover" : "#6d6d6e"
        },
      },
    },
  },
  plugins: [],
};
