import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/category.reducer";
import productReducer from "./reducers/product.reducer";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
  },
});
