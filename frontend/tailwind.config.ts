import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        secondary: "#2B2B2B",
        navbarText: "#4FC3F7",
        text_color: '#afadad',
        title_color: '#eae3e3',
        input_border_color: '#D6DDED',
        footerBg: '#051c32',
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
