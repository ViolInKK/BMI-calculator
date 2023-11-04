import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CalculatorState {
  mainValue: string;
  bufferValue: string;
  actionType: string;
  isBuffer: boolean;
}

const initialState: CalculatorState = {
  mainValue: "",
  bufferValue: "",
  actionType: "",
  isBuffer: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputDigit(state, action: PayloadAction<string>) {
      if (state.mainValue.length === 15 || state.bufferValue.length === 15) {
        return;
      }
      if (state.isBuffer) {
        state.bufferValue += action.payload;
      } else {
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
          return initialState;
      }
    },
    inputEqual(state) {
      switch (state.actionType) {
        case "+":
          state.mainValue = (Number(state.mainValue) + Number(state.bufferValue)).toString();
          state.bufferValue = "";
          break;
        case "-":
          break;
        case "/":
          break;
        case "x":
          break;
      }
      state.isBuffer = false;
    },
  },
});

export const { inputDigit, inputAction, inputEqual, inputErase } = calculatorSlice.actions;
export default calculatorSlice.reducer;
