/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "cubic-bezier": "cubic-bezier(0.58, 1.06, 0.51, 0.98)",
      },
    },
  },
  plugins: [],
};
