import { createSlice } from "@reduxjs/toolkit";

interface CalculatorState {
  mainValue: number[];
  bufferValue: number[];
  isBuffer: boolean;
}

const initialState: CalculatorState = {
  mainValue: [],
  bufferValue: [],
  isBuffer: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputDigit(state, payload) {
      if (state.isBuffer) {
        state.bufferValue.push(payload.payload);
      }
      state.mainValue.push(payload.payload);
    },
  },
});

export const { inputDigit } = calculatorSlice.actions;
export default calculatorSlice.reducer;
