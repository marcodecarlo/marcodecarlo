import type { Config } from "tailwindcss";
import  plugin  from "tailwindcss/plugin";
import  defaultTheme  from "tailwindcss/defaultTheme";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-exo)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0.5)', opacity: '0.2' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        loadingAnim: {
          '0%': { clipPath: 'polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)' },
          '50%': { clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)' },
          '75%': { clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)' },
          '100%': { clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)' }
        }
      },
      animation: {
        grow: 'grow 0.6s ease-out forwards',
        fadeIn: 'fadeIn 1.5s ease-out',
        loader: 'rotate 1s linear infinite',
        loading: 'loadingAnim 2s linear infinite',
      },
      rotate: {
        '3d': 'rotate3d(90, 90, 0, 180deg)',
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
