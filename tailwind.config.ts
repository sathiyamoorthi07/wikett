

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        
        customBlue: {
          light: '#85d7ff', 
          DEFAULT: '#1fb6ff', 
          dark: '#009eeb', 
          primblue:'#211468',
          pink:'#EB5193'
        },
        customGreen: '#22c55e',
      },
    },
  },
  plugins: [],
};

export default config;


