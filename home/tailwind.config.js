// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '300px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        oxanium: ["Oxanium", "cursive"],
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

        'progresslevel-purple': {                    /* we can define levels */
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },

        'progresslevel': {                    /* we can define levels */
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },


        /* new theme colors */
        primary: "var(--theme-primary)",
        "primary-light": "var(--theme-primary-light)",
        "primary-dark": "var(--theme-primary-dark)",
        secondary: "var(--theme-secondary)",
        "secondary-light": "var(--theme-secondary-light)",
        "secondary-dark": "var(--theme-secondary-dark)",

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
  plugins: [
    require('tw-elements/dist/plugin'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
}
