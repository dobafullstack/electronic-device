import axiosClient from './axiosClient';

export default {
  getAllProducts: async () => axiosClient.get('/product'),
  createProduct: async (body) =>
    axiosClient.post('/product', {
      ...body,
    }),
  deleteProduct: async (productId) => axiosClient.delete(`/product/${productId}`)
};
