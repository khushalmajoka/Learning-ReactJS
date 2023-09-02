/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BlackOps: ["Black Ops One"],
        Itim: ["Itim"],
        Outfit: ["Outfit"],
        Cbo: ["Cherry Bomb One"],
        Gluten: ["Gluten"],
        Rowdies: ["Rowdies"],
      },
      boxShadow: {
        scoreboardShadow: ["rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"],
      }
    }
  },
  plugins: [],
}

