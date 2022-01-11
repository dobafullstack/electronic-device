import axiosClient from './axiosClient';

export default {
  createBill: async (body) => axiosClient.post('/bill', { ...body }),
  getAllBills: async () => axiosClient.get('/bill'),
  getDetailBill: async (id) => axiosClient.get(`/bill/${id}`),
};
