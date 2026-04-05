/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        display: ["'DM Serif Display'", "serif"],
      },
      colors: {
        bg: "#0f0f11",
        bg2: "#17171a",
        bg3: "#1e1e23",
        card: "#1a1a1f",
        card2: "#222228",
        accent: "#c8f135",
        violet: "#7c6fff",
        success: "#34d399",
        danger: "#f87171",
        warning: "#fbbf24",
        muted: "#9898a8",
        faint: "#5a5a6a",
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.07)",
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease both",
        "fade-in": "fadeIn 0.3s ease both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
