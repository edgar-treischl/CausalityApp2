/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./node_modules/@headlessui/vue/dist/*.mjs",   // <-- REQUIRED FOR HOVER/ACTIVE
  ],
}
