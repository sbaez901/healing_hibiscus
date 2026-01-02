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
        primary: {
          DEFAULT: '#000000',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#3D3D3D',
          dark: '#3D3D3D',
        },
        neutral: {
          DEFAULT: '#7A7A7A',
          medium: '#7A7A7A',
          light: '#E8E8E8',
          lighter: '#F5F5F5',
        },
        accent: {
          DEFAULT: '#D4B5B0',
          rose: '#D4B5B0',
        },
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;




