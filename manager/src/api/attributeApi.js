import axiosClient from './axiosClient';

export default {
  getAllAttributes: async () => axiosClient.get('/attribute'),
  deleteAttribute: async (id) => axiosClient.delete(`/attribute/${id}`),
  createAttribute: async (body) =>
    axiosClient.post('/attribute', {
      ...body,
    }),
  editAttribute: async (id, body) =>
    axiosClient.put(`/attribute/${id}`, { ...body }),
  getDetailAttribute: async (id) => axiosClient.get(`/attribute/${id}`),
};
