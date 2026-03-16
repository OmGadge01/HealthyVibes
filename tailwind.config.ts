import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",
        lightGreen: "#A5D6A7",
        cream: "#FFF8E1",
        accent: "#FF7043",
        darkText: "#263238",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
  
}

export default config