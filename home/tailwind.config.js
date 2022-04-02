// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        tangerine: ["Tangerine", "cursive"],
        poiretOne: ["Poiret One", "cursive"],
        belleza: ["Belleza", "sans-serif"],
       },
      colors: {
        /* classic tailwind css custom colors */
        'color-01-purple-dark': '#40415A',    /* purple-dark */
        'color-02-purple-light': '#54556E',   /* purple-light */
        'color-03-green': '#2A8B9D',          /* green */
        'color-04-pinky': '#A973A2',          /* pinky */
        'color-05-red': '#E02F35',            /* red */ 
        'color-06-white': '#E3F6FC',          /* white */
        'color-07-white-strong': '#DDDDDD',   /* white-strong*/
        
        /* new theme colors */
        primary: "var(--theme-primary)",
        "primary-light": "var(--theme-primary-light)",
        "primary-dark": "var(--theme-primary-dark)",
        secondary: "var(--theme-secondary)",
        "secondary-light": "var(--theme-secondary-light)",
        "secondary-dark": "var(--theme-secondary-dark)",
        
        /* DEFINIR UN TERTIARY CLARO (casi blanco) O OSCURITO (dark) */
        tertiary: "var(--theme-tertiary)",
        "tertiary-light": "var(--theme-tertiary-light)",
        "tertiary-dark": "var(--theme-tertiary-dark)",


        "text-on-primary": "var(--theme-text-on-primary)",
        "text-on-secondary": "var(--theme-text-on-secondary)",
        
        "accent-primary": "var(--theme-accent-primary)",
        "accent-secondary": "var(--theme-accent-secondary)",

        "text-base": "var(--theme-text-base)",

      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
