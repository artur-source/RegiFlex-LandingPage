/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E40AF',
        'primary-green': '#00A651',
        'primary-yellow': '#FFC107',
        'primary-gray': '#282828',
      },
    },
  },
  plugins: [],
}
