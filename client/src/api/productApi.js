import axiosClient from "./axiosClient";

const productApi = {
    getAllProducts: async () => {
        return await axiosClient.get("/product");
    },
    getProductsByCategoryId: async (categoryId) => {
        return await axiosClient.get(`/product/category/${categoryId}`);
    },
    getAllBestSeller: async () => {
        return await axiosClient.get("/product?limit=8");
    },
    getBestSellerByCategoryId: async (categoryId) => {
        return await axiosClient.get(`/product/category/${categoryId}`);
    },
    getAllSaleItems: async () => {
        return await axiosClient.get("/product?limit=8");
    },
    getSaleItemsByCategoryId: async (categoryId) => {
        return await axiosClient.get(`/product/category/${categoryId}`);
    },
    getAllNewArrival: async () => {
        return await axiosClient.get("/product?limit=8");
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
