import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bestSeller: [],
  newArrival: [],
  saleItems: [],
  product: {
    loading: true,
    data: null,
  },
  products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllBestSeller(state, { payload }) {
      state.bestSeller.splice(0, state.bestSeller.length);
      payload.forEach((item) => state.bestSeller.push(item));
    },
    getBestSellerByCategoryId(state, { payload }) {
      state.bestSeller.splice(0, state.bestSeller.length);
      payload.forEach((item) => state.bestSeller.push(item));
    },
    getAllSaleItems(state, { payload }) {
      state.saleItems.splice(0, state.saleItems.length);
      payload.forEach((item) => state.saleItems.push(item));
    },
    getAllSaleItemsByCategoryId(state, { payload }) {
      state.saleItems.splice(0, state.saleItems.length);
      payload.forEach((item) => state.saleItems.push(item));
    },
    getAllNewArrival(state, { payload }) {
      state.newArrival.splice(0, state.newArrival.length);
      payload.forEach((item) => state.newArrival.push(item));
    },
    getNewArrivalByCategoryId(state, { payload }) {
      state.newArrival.splice(0, state.newArrival.length);
      payload.forEach((item) => state.newArrival.push(item));
    },
    getProductByIdLoading(state) {
      state.product.loading = true;
    },
    getProductByIdSuccess(state, { payload }) {
      state.product.loading = false;
      state.product.data = payload;
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
  getProductByIdLoading,
  getProductByIdSuccess,
  getAllProducts,
  getAllSaleItems,
  getAllSaleItemsByCategoryId,
} = ProductSlice.actions;
