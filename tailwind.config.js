/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#2C3333",
        "light-grey": "#353e3e ",
        green: "#2E4F4F",
        teal: "#0E8388",
        mint: "#CBE4DE",
        beige: "#f5f4ed",
      },
      minWidth: {
        20: "5rem",
      },
      aspectRatio: {
        "9/16": "9 / 16",
        mobile: "9 / 19",
      },
      height: {
        "1/10": "10%",
        "1/12": "8.33%",
        "1/20": "5%",
        "1/40": "2.5%",
      },
      width: {
        "1/20": "5%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
