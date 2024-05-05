import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "../CartSlice";
import ProductSlice from "../../components/ProductSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductSlice,
  },
});

export default store;
