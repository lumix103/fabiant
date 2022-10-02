/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulsing: {
          "0%, 100%": { opacity: 1 },
          "25%": { opacity: 0.5 },
          "50%": { opacity: 0.25 },
        },
      },
      animation: {
        pulsing: "pulsing 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
