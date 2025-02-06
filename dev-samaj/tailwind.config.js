/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f97316",
          dark: "#ea580c",    // Darker shade of your primary color
          light: "#fb923c"    // Lighter shade of your primary color
        },
        secondary: {
          DEFAULT: "#0A3981",
          dark: "#082b61",    // Darker shade of your secondary color
          light: "#0c47a1"    // Lighter shade of your secondary color
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem"
        }
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        lora: ['Lora', 'serif'],
      }
    },
  },
  plugins: [],
}