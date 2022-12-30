/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#252836",
                principal: "#1F1D2B",
                secondary: "#EA7C69",
          }
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('prettier-plugin-tailwindcss'),
    ],
}