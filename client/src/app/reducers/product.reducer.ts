import { createSlice } from "@reduxjs/toolkit";
import ProductModel from "../../models/Product";

type InitialType = {
    bestSeller: ProductModel[],
    newArrival: ProductModel[],
    product: ProductModel[],
    products: ProductModel[],
}

const initialState: InitialType = {
    bestSeller: [],
    newArrival: [],
    product: [],
    products: [],
};

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllBestSeller(state, { payload }) {
            state.bestSeller.splice(0, state.bestSeller.length);
            payload.forEach((item: ProductModel) =>
                state.bestSeller.push(item)
            );
        },
        getBestSellerByCategoryId(state, { payload }) {
            state.bestSeller.splice(0, state.bestSeller.length);
            payload.forEach((item: ProductModel) =>
                state.bestSeller.push(item)
            );
        },
        getAllNewArrival(state, { payload }) {
            state.newArrival.splice(0, state.newArrival.length);
            payload.forEach((item: ProductModel) =>
                state.newArrival.push(item)
            );
        },
        getNewArrivalByCategoryId(state, { payload }) {
            state.newArrival.splice(0, state.newArrival.length);
            payload.forEach((item: ProductModel) =>
                state.newArrival.push(item)
            );
        },
        getProductById(state, { payload }) {
            state.product.push(payload);
        },
        getAllProducts(state, { payload }) {
            state.products.splice(0, state.products.length);
            payload.forEach((item: ProductModel) =>
                state.products.push(item)
            );
        }
    },
});

export default ProductSlice.reducer;

export const {
    getBestSellerByCategoryId,
    getNewArrivalByCategoryId,
    getAllBestSeller,
    getAllNewArrival,
    getProductById,
    getAllProducts,
} = ProductSlice.actions;