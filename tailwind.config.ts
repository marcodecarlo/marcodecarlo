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
