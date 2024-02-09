/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      animation: ['motion-reduce'],
    },
  },
  plugins: [require("daisyui", "tw-elements/dist/plugin.cjs")],
}
