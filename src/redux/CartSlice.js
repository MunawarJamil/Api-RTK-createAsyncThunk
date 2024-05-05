import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart", //Name of slice
  initialState,
  reducers: {
    // action to give command for task to do
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
