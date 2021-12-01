import { createSlice } from "@reduxjs/toolkit";
import ProductModel from "../../models/Product";

type InitialType = {
    bestSeller: ProductModel[],
    newArrival: ProductModel[]
}

const initialState: InitialType = {
    bestSeller: [],
    newArrival: []
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
    },
});

export default ProductSlice.reducer;

export const {
    getBestSellerByCategoryId,
    getNewArrivalByCategoryId,
    getAllBestSeller,
    getAllNewArrival,
} = ProductSlice.actions;