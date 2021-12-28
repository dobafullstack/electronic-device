import axiosClient from "./axiosClient";

const productApi = {
    getAllProducts: async () => {
        return await axiosClient.get("/product");
    },
    getProductsByCategoryId: async (categoryId, query) => {
        return await axiosClient.get(`/product/category/${categoryId}${query}`);
    },
    getAllBestSeller: async () => {
        return await axiosClient.get("/product?limit=8&type=bestSeller");
    },
    getBestSellerByCategoryId: async (categoryId) => {
        return await axiosClient.get(`/product/category/${categoryId}`);
    },
    getAllSaleItems: async () => {
        return await axiosClient.get("/product?limit=8&type=sale");
    },
    getSaleItemsByCategoryId: async (categoryId) => {
        return await axiosClient.get(`/product/category/${categoryId}`);
    },
    getAllNewArrival: async () => {
        return await axiosClient.get("/product?limit=8&type=newArrival");
    },
    getNewArrivalByCategoryId: async (categoryId) => {
        return await axiosClient.get(`/product/category/${categoryId}`);
    },
    getProductsByCategoryDetailId: async (categoryDetailId) => {
        return await axiosClient.get(
            `/product/category-detail/${categoryDetailId}`
        );
    },
    getProductById: async (productId) => {
        return await axiosClient.get(`/product/${productId}`);
    },
    getProductByCategoryId: async (categoryId) =>
        axiosClient.get(`/product/category/${categoryId}`),
    getProductByCategoryDetailId: async (categoryDetailId) =>
        axiosClient.get(`/product/category-detail/${categoryDetailId}`),
};

export default productApi;
