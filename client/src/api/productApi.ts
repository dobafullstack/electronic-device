import axiosClient from "./axiosClient";

const productApi = {
    getAllProducts: async () => {
        return await axiosClient.get('/product');
    },
    getProductsByCategoryId: async (categoryId) => {
        return await axiosClient.get(`/product/category/${categoryId}?limit=8`);
    },
    getAllBestSeller: async () => {
        return await axiosClient.get('/product?limit=8');
    },
    getBestSellerByCategoryId: async (categoryId) => {
        return await axiosClient.get(`/product/category/${categoryId}?limit=8`);
    },
    getAllNewArrival: async () => {
        return await axiosClient.get("/product?limit=8");
    },
    getNewArrivalByCategoryId: async (categoryId) => {
        return await axiosClient.get(`/product/category/${categoryId}?limit=8`);
    },
    getProductsByCategoryDetailId: async (categoryDetailId) => {
        return await axiosClient.get(
            `/product/category-detail/${categoryDetailId}?limit=8`
        );
    },
    getProductById: async (productId) => {
        return await axiosClient.get(`/product/${productId}`);
    }
}

export default productApi;