/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blueviolet: {
          "100": "#5030e5",
          "300": "rgba(80, 48, 229, 0.59)",
          "400": "rgba(80, 48, 229, 0.06)",
        },
        indianred: "#d25b68",
        mistyrose: "#f4d7da",
        slategray: "#787486",
        black: "#000",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0.03)",
        },
        lightcoral: {
          "100": "#d8727d",
          "200": "rgba(216, 114, 125, 0.1)",
        },
        darkseagreen: "rgba(131, 194, 157, 0.2)",
        mediumseagreen: "#68b266",
        gray: "#0d062d",
        burlywood: "rgba(223, 168, 116, 0.2)",
        peru: "#d58d49",
        whitesmoke: "#f5f5f5",
        silver: "#c4c4c4",
        dimgray: "#625f6d",
        cornflowerblue: "#76a5ea",
        orange: "#ffa500",
        thistle: "#e4ccfd",
        lightgreen: "#7ac555",
        gold: {
          "100": "rgba(251, 203, 24, 0.37)",
          "200": "rgba(251, 203, 24, 0.22)",
        },
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      mini: "15px",
      xs: "12px",
      lg: "18px",
      "27xl": "46px",
      sm: "14px",
      xl: "20px",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
