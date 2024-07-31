/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        tdown: {
          "0%": { transform: "translate(-50%, -70px)" },
          "100%": { transform: "translate(-50%, 20px)" },
        },
        tup: {
          "0%": { transform: "translate(-50%, 20px)" },
          "100%": { transform: "translate(-50%, -70px)" },
        },
      },
    },
  },
  plugins: [],
};
