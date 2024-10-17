/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "primary-gradinet":
          "linear-gradient(180.96deg, #000000 0.82%, #4A2800 129.1%)",
      },
      colors: {
        primary: {
          light: "#FCC182",
          DEAFULT: "#FA9021",
          dark: "AF5B04",
        },
      },
    },
  },
  plugins: [],
};
