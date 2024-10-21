import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // Includes all page files
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Includes all component files
    "./app/**/*.{js,ts,jsx,tsx,mdx}",     // If you're using the `/app` directory (e.g., Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Custom background color
        foreground: "var(--foreground)",  // Custom foreground color
      },
    },
  },
  plugins: [],
};

export default config;
