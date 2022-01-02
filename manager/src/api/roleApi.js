import axiosClient from './axiosClient';

export default {
  getAllRoles: async () => axiosClient.get('/role'),
  createRole: async (body) => axiosClient.post('/role', { ...body }),
  getDetailRole: async (id) => axiosClient.get(`/role/${id}`),
  updateRole: async (id, body) => axiosClient.put(`/role/${id}`, { ...body }),
};
