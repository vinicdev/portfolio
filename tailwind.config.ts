import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Blue shades
        blue: "var(--blue)",
        "blue-light": "var(--blue-light)",
        "blue-dark": "var(--blue-dark)",
        600: "var(--600)",
        500: "var(--500)",
        400: "var(--400)",
        300: "var(--300)",
        200: "var(--200)",
        100: "var(--100)",

        // Black/White
        "white-dark": "var(--white-dark)",
        "white-normal": "var(--white-normal)",
        "white-light": "var(--white-light)",
        "black-dark": "var(--black-dark)",
        "black-normal": "var(--black-normal)",
        "black-light": "var(--black-light)",

        // Gray shades
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        "gray-4": "var(--gray-4)",
        "gray-5": "var(--gray-5)",
        "gray-6": "var(--gray-6)",
        "gray-7": "var(--gray-7)",

        // Auxiliary colors
        red: "var(--red)",
        "blue-auxiliary": "var(--blue-auxiliary)",
        yellow: "var(--yellow)",
      },
      backgroundImage: {
        "gradient-1": "var(--gradiend-1)",
        "gradient-2": "var(--gradiend-2)",
        "gradient-3": "var(--gradiend-3)",
        "gradient-4": "var(--gradiend-4)",
      },
    },
  },
  plugins: [],
};

export default config;
