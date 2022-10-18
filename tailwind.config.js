/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    fontFamily:{
      apotheke:['BadScript','GreatVibes','icomoon','KaushanScript'],
      bad:['"Bad Script"'],
      greatVibes:['"Great Vibes"'],
      kaushan:['"Kaushan Script"'],
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
