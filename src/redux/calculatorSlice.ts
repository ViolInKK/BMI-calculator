import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CalculatorState {
  mainValue: string;
  bufferValue: string;
  actionType: string;
  isBuffer: boolean;
  styleTheme: string;
}

const initialState: CalculatorState = {
  mainValue: "",
  bufferValue: "",
  actionType: "",
  isBuffer: false,
  styleTheme: "default",
};

const calculateResult = (type: string, mainValue: string, bufferValue: string) => {
  switch (type) {
    case "+":
      return (+mainValue + +bufferValue).toFixed(2);
    case "-":
      return (+mainValue - +bufferValue).toFixed(2);
    case "/":
      return (+mainValue / +bufferValue).toFixed(2);
    case "x":
      return (+mainValue * +bufferValue).toFixed(2);
    default:
      return "0";
  }
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputDigit(state, action: PayloadAction<string>) {
      if (state.isBuffer) {
        if (state.bufferValue.length === 15) {
          return;
        }
        state.bufferValue += action.payload;
      } else {
        if (state.mainValue.length === 15) {
          return;
        }
        state.mainValue += action.payload;
      }
    },
    inputAction(state, action: PayloadAction<string>) {
      state.isBuffer = true;
      state.actionType = action.payload;
    },
    inputErase(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "DEL":
          if (state.isBuffer) {
            state.bufferValue = state.bufferValue.slice(0, state.bufferValue.length - 1);
          }
          state.mainValue = state.mainValue.slice(0, state.mainValue.length - 1);
          break;
        case "RESET":
          return { ...initialState, styleTheme: state.styleTheme };
      }
    },
    inputEqual(state) {
      var result = calculateResult(state.actionType, state.mainValue, state.bufferValue);
      if (result === "NaN" || result === "Infinity") {
        state.mainValue = "0";
      } else {
        state.mainValue = result;
      }
      state.bufferValue = "";
      state.actionType = "";
      state.isBuffer = false;
    },
    switchTheme(state, action: PayloadAction<string>) {
      state.styleTheme = action.payload;
    },
  },
});

export const { inputDigit, inputAction, inputEqual, inputErase, switchTheme } = calculatorSlice.actions;
export default calculatorSlice.reducer;
