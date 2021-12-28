import axiosClient from "./axiosClient";

export default {
    createOrder: async (order) => await axiosClient.post('/order', {...order})
}