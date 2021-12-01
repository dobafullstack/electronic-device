import ProductModel from "../models/Product";
import axiosClient, { ResponseType } from "./axiosClient";

const productApi = {
    getAllProducts: async (): Promise<ResponseType<ProductModel[]>> => {
        return await axiosClient.get('/product');
    },
    getProductsByCategoryId: async (categoryId: string): Promise<ResponseType<ProductModel[]>> => {
        return await axiosClient.get(`/product/category/${categoryId}?limit=8`);
    },
    getAllBestSeller: async (): Promise<ResponseType<ProductModel[]>> => {
        return await axiosClient.get('/product?limit=8');
    },
    getBestSellerByCategoryId: async (categoryId: string): Promise<ResponseType<ProductModel[]>> => {
        return await axiosClient.get(`/product/category/${categoryId}?limit=8`);
    },
    getAllNewArrival: async (): Promise<ResponseType<ProductModel[]>> => {
        return await axiosClient.get("/product?limit=8");
    },
    getNewArrivalByCategoryId: async (categoryId: string): Promise<ResponseType<ProductModel[]>> => {
        return await axiosClient.get(`/product/category/${categoryId}?limit=8`);
    },
    getProductsByCategoryDetailId: async (categoryDetailId: string): Promise<ResponseType<ProductModel[]>> => {
        return await axiosClient.get(
            `/product/category-detail/${categoryDetailId}?limit=8`
        );
    }
}

export default productApi;