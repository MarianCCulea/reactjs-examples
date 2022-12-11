import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    getProperties(state) {},
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  propertySlice.actions;
export default propertySlice.reducer;
