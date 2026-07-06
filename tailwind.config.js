/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E12",
        surface: "#12181F",
        "surface-hi": "#171F29",
        line: "#232B35",
        "line-soft": "#1B222B",
        ivory: "#E8EDF2",
        muted: "#8592A0",
        dim: "#5B6672",
        amber: "#FFB86B",
        "amber-dim": "#8A5B34",
        mint: "#6EE7B7",
        "mint-dim": "#3E6A5A"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1B222B 1px, transparent 1px), linear-gradient(to bottom, #1B222B 1px, transparent 1px)"
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "40" },
          "100%": { strokeDashoffset: "0" }
        },
        pulse: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" }
        }
      },
      animation: {
        flow: "flow 1.2s linear infinite",
        pulse: "pulse 2.4s ease-in-out infinite",
        rise: "rise 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 5s ease-in-out infinite",
        blink: "blink 1s step-end infinite"
      }
    }
  },
  plugins: []
};
