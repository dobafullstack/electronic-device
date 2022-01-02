import axiosClient from "./axiosClient";

export default {
    getAllOrders: async () => axiosClient.get('/order'),
    getDetailOrder: async (id) => axiosClient.get(`/order/${id}`),
    updateOrder: async (id, body) => axiosClient.put(`/order/${id}`, {
        ...body
    }) 
}