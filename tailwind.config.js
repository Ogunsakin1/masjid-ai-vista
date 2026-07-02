/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	'./index.html'
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: '#E5E5E5',
        input: '#E5E5E5',
        ring: '#008080',
        background: '#FFFFFF',
        foreground: '#1A1A1A',
        primary: {
          DEFAULT: '#008080',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F2F2F2',
          foreground: '#1A1A1A',
        },
        destructive: {
          DEFAULT: '#FF0000',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F2F2F2',
          foreground: '#808080',
        },
        accent: {
          DEFAULT: '#FFD700',
          foreground: '#1A1A1A',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1A1A',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1A1A',
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
