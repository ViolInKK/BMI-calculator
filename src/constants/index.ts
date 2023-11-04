export const buttons = [
  {
    name: "7",
    type: "input",
    isWide: false,
  },
  {
    name: "4",
    type: "input",
    isWide: false,
  },
  {
    name: "1",
    type: "input",
    isWide: false,
  },
  {
    name: ".",
    type: "input",
    isWide: false,
  },
  {
    name: "RESET",
    type: "erase",
    isWide: true,
  },
  {
    name: "8",
    type: "input",
    isWide: false,
  },
  {
    name: "5",
    type: "input",
    isWide: false,
  },
  {
    name: "2",
    type: "input",
    isWide: false,
  },
  {
    name: "0",
    type: "input",
    isWide: false,
  },
  {
    name: "9",
    type: "input",
    isWide: false,
  },
  {
    name: "6",
    type: "input",
    isWide: false,
  },
  {
    name: "3",
    type: "input",
    isWide: false,
  },
  {
    name: "/",
    type: "action",
    isWide: false,
  },
  {
    name: "=",
    type: "equal",
    isWide: true,
  },
  {
    name: "DEL",
    type: "erase",
    isWide: false,
  },
  {
    name: "+",
    type: "action",
    isWide: false,
  },
  {
    name: "-",
    type: "action",
    isWide: false,
  },
  {
    name: "x",
    type: "action",
    isWide: false,
  },
];

export const typeStyles: any = {
  default: {
    input: `transition delay-50 bg-inputButtonBg_1 text-textPrimary_1 border-inputButtonShadow_1 hover:bg-inputButtonActive_1 cursor-pointer`,
    action: `transition delay-50 bg-inputButtonBg_1 text-textPrimary_1 border-inputButtonShadow_1 hover:bg-inputButtonActive_1 cursor-pointer`,
    erase: `transition delay-50 bg-eraseButtonBg_1 text-textSecondary_1 border-eraseButtonShadow_1 hover:bg-eraseButtonActive_1 cursor-pointer`,
    equal: `transition delay-50 bg-equalButtonBg_1 text-textSecondary_1 border-equalButtonShadow_1 hover:bg-equalButtonActive_1 cursor-pointer`,
  },
  light: {
    input: `transition delay-50 bg-inputButtonBg_2 text-textPrimary_2 border-inputButtonShadow_2 hover:bg-inputButtonActive_2 cursor-pointer`,
    action: `transition delay-50 bg-inputButtonBg_2 text-textPrimary_2 border-inputButtonShadow_2 hover:bg-inputButtonActive_2 cursor-pointer`,
    erase: `transition delay-50 bg-eraseButtonBg_2 text-textSecondary_2 border-eraseButtonShadow_2 hover:bg-eraseButtonActive_2 cursor-pointer`,
    equal: `transition delay-50 bg-equalButtonBg_2 text-textSecondary_2 border-equalButtonShadow_2 hover:bg-equalButtonActive_2 cursor-pointer`,
  },
  dark_neon: {
    input: `transition delay-50 bg-inputButtonBg_3 text-textPrimary_3 border-inputButtonShadow_3 hover:bg-inputButtonActive_3 cursor-pointer`,
    action: `transition delay-50 bg-inputButtonBg_3 text-textPrimary_3 border-inputButtonShadow_3 hover:bg-inputButtonActive_3 cursor-pointer`,
    erase: `transition delay-50 bg-eraseButtonBg_3 text-textSecondary_3 border-eraseButtonShadow_3 hover:bg-eraseButtonActive_3 cursor-pointer`,
    equal: `transition delay-50 bg-equalButtonBg_3 text-textSecondary_3 border-equalButtonShadow_3 hover:bg-equalButtonActive_3 cursor-pointer`,
  },
};
