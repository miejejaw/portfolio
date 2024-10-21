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
        bgShade: "#F5FCFF",
        textColor: "#160E47",
        surface: "#FBF8FF",
        onPrimaryContainer: "#06164B",
        secondary: "#5A5D72",
        outline: "#637381",
        tableStripe: "#F7FBFD",
        onSurface: "#F9FCFF",
        navbarText: "#1C1E53",
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
