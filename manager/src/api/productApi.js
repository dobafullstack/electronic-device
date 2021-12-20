import axiosClient from "./axiosClient";

export default {
    getAllProducts: async () => axiosClient.get('/product')
}