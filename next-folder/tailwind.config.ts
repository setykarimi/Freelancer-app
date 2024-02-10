import type { Config } from "tailwindcss";



const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        900: "--color-primary-900",
        800: "--color-primary-800",
        700: "--color-primary-700",
        600: "--color-primary-600",
        500: "--color-primary-500",
        400: "--color-primary-400",
        300: "--color-primary-300",
        200: "--color-primary-200",
        100: "--color-primary-100",
      },
      secondary: {
        900: "--color-secondary-900",
        800: "--color-secondary-800",
        700: "rgba(var(--color-secondary-700))",
        600: "--color-secondary-600",
        500: "--color-secondary-500",
        400: "--color-secondary-400",
        300: "--color-secondary-300",
        200: "--color-secondary-200",
        100: "--color-secondary-100",
        50: "--color-secondary-50",
        0: "--color-secondary-0",
      },
      success: "--color-success",
      warning: "--color-warning",
      error: "rgba(var(--color-error))",
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
export default config;
