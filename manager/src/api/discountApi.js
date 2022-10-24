import axiosClient from './axiosClient';

export default {
  getAllDiscounts: async () => axiosClient.get('/discount'),
  deleteDiscount: async (discountId) =>
    axiosClient.delete(`/discount/${discountId}`),
  createDiscount: async (body) => axiosClient.post(`/discount`, { ...body }),
};
