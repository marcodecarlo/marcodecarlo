import type { Config } from "tailwindcss";
import  plugin  from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        grow: 'grow 0.6s ease-out forwards',
        fadeIn: 'fadeIn 1.5s ease-out',
      },
    },
  },
  plugins: [
    plugin(function({addBase, theme}){
      addBase({
        ".layout-sm": {
          "grid-template-columns": `1fr min(${theme("screens.sm")},100%) 1fr`,
        },
        ".layout-xl": {
          "grid-template-columns": `1fr minmax(auto,${theme("spacing.60")}) min(${theme("screens.sm")},100%) minmax(auto,${theme("spacing.60")}) 1fr`,
        },
      })
    })
  ],
};
export default config;
