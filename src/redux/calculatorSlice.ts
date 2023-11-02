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
  reducers: {},
});

export const {} = calculatorSlice.actions;
export default calculatorSlice.reducer;
