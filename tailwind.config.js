module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00ff00",

          secondary: "#4CAF50",

          accent: "#00ffff",

          neutral: "#333333",

          "base-100": "#151515",

          info: "#00ccff",

          success: "#33cc33",

          warning: "#ffcc00",

          error: "#F44336",
        },
      },
    ],
  },
};
