import productApi from "../../api/productApi";
import { getAllBestSeller, getAllProducts, getAllNewArrival, getBestSellerByCategoryId, getNewArrivalByCategoryId, getProductById } from "../reducers/product.reducer";
import { AppDispatch } from "../store";

export const getAllBestSellerAction = () => async (dispatch: AppDispatch) => {
    try {
        const {code, result, error} = await productApi.getAllBestSeller();

        if (code !== 200 || error !== null){
            console.log(result)
            console.log(error?.message)
        }

        dispatch(getAllBestSeller(result));
    } catch (error) {
        console.log(error);
    }
}

export const getBestSellerByCategoryIdAction = (categoryId: string) => async (dispatch: AppDispatch) => {
    try {
        const {code, result, error} = await productApi.getBestSellerByCategoryId(categoryId);

        if (code !== 200 || error !== null){
            console.log(result)
            console.log(error?.message)
        }

        dispatch(getBestSellerByCategoryId(result));
    } catch (error) {
        console.log(error);
    }
}

export const getAllNewArrivalAction = () => async (dispatch: AppDispatch) => {
    try {
        const { code, result, error } = await productApi.getAllNewArrival();

        if (code !== 200 || error !== null) {
            console.log(result);
            console.log(error?.message);
        }

        dispatch(getAllNewArrival(result));
    } catch (error) {
        console.log(error);
    }
};

export const getNewArrivalByCategoryIdAction = (categoryId: string) => async (dispatch: AppDispatch) => {
    try {
        const {code, result, error} = await productApi.getNewArrivalByCategoryId(categoryId);

        if (code !== 200 || error !== null){
            console.log(result)
            console.log(error?.message)
        }

        dispatch(getNewArrivalByCategoryId(result));
    } catch (error) {
        console.log(error);
    }
};

export const getProductByIdAction = (productId: string) => async (dispatch: AppDispatch) => {
    try {
        const {code, result, error} = await productApi.getProductById(productId);

        if (code !== 200 || error !== null){
            console.log(result)
            console.log(error?.message)
        }

        dispatch(getProductById(result));
    } catch (error) {
        console.log(error);
    }
}

export const getAllProductsAction = () => async (dispatch: AppDispatch) => {
    try {
        const {code, result, error} = await productApi.getAllProducts();

        if (code !== 200 || error !== null){
            console.log(result)
            console.log(error?.message)
        }

        dispatch(getAllProducts(result));
    } catch (error) {
        console.log(error);
    }
}