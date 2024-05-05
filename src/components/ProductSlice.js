import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  status: "idle",
};
const productSlice = createSlice({
  name: "product", //Name of slice
  initialState,
  reducers: {
    // as we will use creatAsync thunk so no need to for reducer, it will work with extraReducers
    /* fetchProducts(state, action) {
      state.data = action.payload;
    }, */
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "idle";
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.data = action.payload;
      state.status = "error";
    });
  },
});
export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

/*
export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    dispatch(fetchProducts(result));
  };
}

*/

//lets do the same thing with createAsync thunk

export const getProducts = createAsyncThunk("products", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});
