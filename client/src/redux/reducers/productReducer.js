import { createSlice } from "@reduxjs/toolkit";

const initState = {
  bestSeller: [],
  newArrival: [],
  product: {},
  products,
};

const ProductSlice = createSlice({
  name: "product",
  initState,
  reducers: {
    getAllBestSeller(state, { payload }) {
      state.bestSeller.splice(0, state.bestSeller.length);
      payload.forEach((item) => state.bestSeller.push(item));
    },
    getBestSellerByCategoryId(state, { payload }) {
      state.bestSeller.splice(0, state.bestSeller.length);
      payload.forEach((item) => state.bestSeller.push(item));
    },
    getAllNewArrival(state, { payload }) {
      state.newArrival.splice(0, state.newArrival.length);
      payload.forEach((item) => state.newArrival.push(item));
    },
    getNewArrivalByCategoryId(state, { payload }) {
      state.newArrival.splice(0, state.newArrival.length);
      payload.forEach((item) => state.newArrival.push(item));
    },
    getProductById(state, { payload }) {
      state.product = payload;
    },
    getAllProducts(state, { payload }) {
      state.products.splice(0, state.products.length);
      payload.forEach((item) => state.products.push(item));
    },
  },
});

export default ProductSlice.reducer;

export const {
  getAllBestSeller,
  getBestSellerByCategoryId,
  getAllNewArrival,
  getNewArrivalByCategoryId,
  getProductById,
  getAllProducts,
} = ProductSlice.actions;
