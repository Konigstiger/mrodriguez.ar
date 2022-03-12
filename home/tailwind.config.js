// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        /* please check the names of the colors */
        'color-01-purple-dark': '#40415A',    /* purple-dark */
        'color-02-purple-light': '#54556E',   /* purple-light */
        'color-03-green': '#2A8B9D',          /* green */
        'color-04-pinky': '#A973A2',          /* pinky */
        'color-05-red': '#E02F35',            /* red */ 
        'color-06-white': '#E3F6FC',          /* white */
        'color-07-white-strong': '#DDDDDD',   /* white-strong*/
      }      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
