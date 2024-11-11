/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/*.{html,php,js,jsx}",
    "./src/components/*.{js,jsx}",
    "./src/scripts/*.{js,jsx}"
  ],
  theme: {
    extend: {
      "colors": {
        "blue2": {
          "50": "#e6f2fe",
          "100": "#cde4fe",
          "200": "#9bc9fc",
          "300": "#6aaefb",
          "400": "#3893f9",
          "500": "#0678f8",
          "600": "#0560c6",
          "700": "#044895",
          "800": "#023063",
          "900": "#011832"
        }
      }
    }
  },
  plugins: [],
}

