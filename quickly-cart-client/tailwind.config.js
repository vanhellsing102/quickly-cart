 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}", "./src/**/*.{html,js,jsx,tsx}"],
    theme: {
      extend: {
      },
    },
    plugins: [require('daisyui')],
  }