/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        inputButtonBg_1: "#eae3db",
        inputButtonBg_2: "#e5e4e0",
        inputButtonBg_3: "#331b4d",

        eraseButtonBg_1: "#647299",
        eraseButtonBg_2: "#378286",
        eraseButtonBg_3: "#57067d",

        equalButtonBg_1: "#d13f30",
        equalButtonBg_2: "#ff8b38",
        equalButtonBg_3: "#00decf",

        inputButtonShadow_1: "#b4a398",
        inputButtonShadow_2: "#a59f90",
        inputButtonShadow_3: "#861e9d",

        eraseButtonShadow_1: "#424e73",
        eraseButtonShadow_2: "#1c6067",
        eraseButtonShadow_3: "#bf16f5",

        equalButtonShadow_1: "#902317",
        equalButtonShadow_2: "#893b03",
        equalButtonShadow_3: "#6af8ee",

        inputButtonActive_1: "#ffffff",
        inputButtonActive_2: "#ffffff",
        inputButtonActive_3: "#6b34ac",

        eraseButtonActive_1: "#a1b3e3",
        eraseButtonActive_2: "#62b5be",
        eraseButtonActive_3: "#8730b0",

        equalButtonActive_1: "#f96c5b",
        equalButtonActive_2: "#ff8b38",
        equalButtonActive_3: "#94fff9",

        textPrimary_1: "#44485a",
        textPrimary_2: "#34342c",
        textPrimary_3: "#ffe139",

        textSecondary_1: "#f8fbf9",
        textSecondary_2: "#faffff",
        textSecondary_3: "#fff9ff",
      },
    },
  },
  plugins: [
    createThemes({
      default: {
        pageBg: "#3B4664",
        IOdisplayBg: "#181f32",
        buttonsContainerBg: "#252d44",
        slider: "#d13f30",
        textTitle: "#f8fbf9",
        textPrimary: "#44485a",
        textSecondary: "#f8fbf9",
        textIOdisplay: "#f8fbf9",
      },
      light: {
        pageBg: "#e6e6e6",
        IOdisplayBg: "#eeeeee",
        buttonsContainerBg: "#d3cdcd",
        slider: "#ff8b38",
        textTitle: "#34342c",
        textPrimary: "#34342c",
        textSecondary: "#faffff",
        textIOdisplay: "#34342c",
      },
      dark_neon: {
        pageBg: "#17062a",
        IOdisplayBg: "#1e0836",
        buttonsContainerBg: "#1e0836",
        slider: "#00decf",
        textTitle: "#ffe139",
        textPrimary: "#ffe139",
        textSecondary: "#fff9ff",
        textIOdisplay: "#ffe139",
      },
    }),
  ],
};
