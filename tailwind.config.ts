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
      // padding: {"1.25rem"},
      // screens: {
      //   xl: "1200px",
      //   "2xl": "1200px",
      // },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff6bab",

          secondary: "#9306ef",

          accent: "#ffd56e",

          neutral: "#d1d5db",

          "base-100": "#03101C",

          info: "#00a1b9",

          success: "#32d34b",

          warning: "#ea580c",

          error: "#dc2626",
        },
      },
    ],
  },
};
export default config;
