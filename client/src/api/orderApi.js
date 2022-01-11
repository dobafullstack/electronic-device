import axiosClient from "./axiosClient";

export default {
  createOrder: async (order) => await axiosClient.post("/order", { ...order }),
  getAllOrder: async () => await axiosClient.get("/order"),
  getMyOrder: async () => await axiosClient.get(`/order/my-order`),
  updateOrder: async (id, body) =>
    axiosClient.put(`/order/${id}`, {
      ...body,
    }),
};
