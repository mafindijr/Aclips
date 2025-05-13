module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#57370d", // Dark brown
        secondary: "#ffe998", // Light yellow
        white: "#ffffff", // Complementary white
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"], // Default font family
      },
    },
  },
  plugins: [],
};

