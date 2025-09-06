import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../shared/**/*.{js,ts,jsx,tsx}" // if you use shared components outside client/src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
