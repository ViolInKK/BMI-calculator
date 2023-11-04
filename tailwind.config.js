/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pageBg_1: "#3B4664",
        pageBg_2: "#e6e6e6",
        pageBg_3: "#17062a",

        IOdisplayBg_1: "#181f32",
        IOdisplayBg_2: "#eeeeee",
        IOdisplayBg_3: "#1e0836",

        buttonsContainerBg_1: "#252d44",
        buttonsContainerBg_2: "#d3cdcd",
        buttonsContainerBg_3: "#1e0836",

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
        inputButtonBg: "#eae3db",
        eraseButtonBg: "#647299",
        equalButtonBg: "#d13f30",
        inputButtonShadow: "#b4a398",
        eraseButtonShadow: "#424e73",
        equalButtonShadow: "#902317",
        inputButtonActive: "#ffffff",
        eraseButtonActive: "#a1b3e3",
        equalButtonActive: "#f96c5b",
        textPrimary: "#44485a",
        textSecondary: "#f8fbf9",
      },
      light: {
        pageBg: "#e6e6e6",
        IOdisplayBg: "#eeeeee",
        buttonsContainerBg: "#d3cdcd",
        inputButtonBg: "#e5e4e0",
        eraseButtonBg: "#378286",
        equalButtonBg: "#ff8b38",
        inputButtonShadow: "#a59f90",
        eraseButtonShadow: "#1c6067",
        equalButtonShadow: "#893b03",
        inputButtonActive: "#ffffff",
        eraseButtonActive: "#62b5be",
        equalButtonActive: "#ff8b38",
        textPrimary: "#34342c",
        textSecondary: "#faffff",
      },
      dark_neon: {
        pageBg: "#17062a",
        IOdisplayBg: "#1e0836",
        buttonsContainerBg: "#1e0836",
        inputButtonBg: "#331b4d",
        eraseButtonBg: "#57067d",
        equalButtonBg: "#00decf",
        inputButtonShadow: "#861e9d",
        eraseButtonShadow: "#bf16f5",
        equalButtonShadow: "#6af8ee",
        inputButtonActive: "#6b34ac",
        eraseButtonActive: "#8730b0",
        equalButtonActive: "#94fff9",
        textPrimary: "#ffe139",
        textSecondary: "#fff9ff",
      },
    }),
  ],
};
