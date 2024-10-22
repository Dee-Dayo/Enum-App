import type { Config } from "tailwindcss";

const config: {
  plugins: any[];
  theme: {
    extend: {
      colors: {
        background: string;
        customLightBlue: string;
        customGray: string;
        customBlue: string;
        customBlue_dark: string;
        foreground: string
      }
    }
  };
  content: string[]
} = {
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
        customGray: '#475661',
        customBlue: '#008eef',
        customBlue_dark: '#557790',
        customLightBlue: '#f6fcff',
      },
    },
  },
  plugins: [],
};

export default config;
