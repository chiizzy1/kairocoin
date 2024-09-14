import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        'RoadBg': "rgba(250, 202, 153, 1)",
        'BuyBg': "rgba(250, 202, 0, 1)",
        'BlueBg': "rgba(75, 156, 255, 1)",
        'Line': "rgba(217, 217, 217, 1)",
      },
      fontFamily: {
        laila: "var(--font-laila)",
        detacher: "var(--font-detacher)",
      },
    },
  },
  plugins: [],
};
export default config;
