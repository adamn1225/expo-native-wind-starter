/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"], // Ensure this matches your file structure
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};