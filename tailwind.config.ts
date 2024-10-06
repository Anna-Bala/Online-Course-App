import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        absolute: {
          black: "#000",
          white: "#FFF",
        },
        grey: {
          10: "#191919",
          15: "#262626",
          20: "#333333",
          30: "#4C4C4D",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          70: "#B3B3B3",
        },
        orange: {
          50: "#FF9500",
          70: "#FFBF66",
          75: "#FFCA80",
          80: "#FFD499",
          90: "#FFEACC",
          95: "#FFF4E5",
          97: "#FFF9F0",
          99: "#FFFDFA",
        },
        red: {
          50: "#ff6666",
        },
        white: {
          90: "#E4E4E7",
          95: "#F1F1F3",
          97: "#F7F7F8",
          99: "#FCFCFD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
