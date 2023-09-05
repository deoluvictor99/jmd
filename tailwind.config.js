/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

