const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // <--- aggiungi questa riga!
    flowbite.content(),
  ],
  plugins: [flowbite.plugin()],
};
