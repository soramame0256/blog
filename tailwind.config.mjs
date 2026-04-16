/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme.js"
import typography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
}
