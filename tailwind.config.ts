import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Caviar Dreams", "system-ui"],
      body: ["Proxima Nova", "system-ui"],
    },
    extend: {
      backgroundImage: {
        landing: "url(/images/landing/PH2025_WebsiteLanding.svg')",
      },
      colors: {
        brown: {
          DEFAULT: "#9a5c38",
          transition: "#713f12",
        },
        pink: {
          200: "#FAE3E1",
          DEFAULT: "#ffd0cc",
          accent: "#f18e87",
          transition: "#DE6F67",
        },
        green: {
          DEFAULT: "#96b548",
          transition: "#65a30d",
        },
        yellow: {
          DEFAULT: "#fad53f",
        },
        discord: {
          DEFAULT: "#7289da",
        },
        background: {
          top: "#E3938B",
          transition: "#DE6F67",
          secondary: "#F7D2CD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
