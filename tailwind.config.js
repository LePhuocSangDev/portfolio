/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "#ffff",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        neon: "0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3",
      },
    },
  },
  plugins: [],
};
