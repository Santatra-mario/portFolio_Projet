/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // ← cette ligne est obligatoire
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}