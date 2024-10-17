/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right top, #18192e, #1d1e3e, #23234e, #2a275e, #322b6e)',
      },
    },
  },
  plugins: [],
}
