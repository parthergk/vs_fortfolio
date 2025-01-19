import type { Config } from "tailwindcss";

export default {
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
        customBlackPri: '#181818',
        customBlackSec: '#1f1f1f'
      },
      scrollbar: {
        DEFAULT: {
          /* Basic Scrollbar */
          '::-webkit-scrollbar': {
            width: '6px',
          },
          '::-webkit-scrollbar-track': {
            background: '#1a1a1a',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#4f46e5',
            borderRadius: '9999px',
          },
        },
        HOVER: {
          /* On Hover */
          '::-webkit-scrollbar-thumb:hover': {
            background: '#6366f1',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
