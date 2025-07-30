/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
  themes: ["light", "dark", "cupcake"],
  darkTheme: "dark", // auto-uses when user prefers dark mode
  base: true,         // includes base styling (optional)
},
};
