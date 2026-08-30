/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Near-black used for buttons, footer/CTA banner background
        dark: {
          DEFAULT: "#0B0B0F",
          soft: "#14141B",
        },
        // Violet/indigo brand scale used for logo gradient, links, icons, accents
        brand: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
        indigo: {
          500: "#6366F1",
          600: "#4F46E5",
        },
      },
      fontFamily: {
        // Headings — bold geometric sans, matches the hero/section titles
        heading: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        // Body copy — clean, highly readable sans
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        // Logo wordmark — brush script used only for "Portfolio"
        logo: ["Pacifico", "cursive"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
