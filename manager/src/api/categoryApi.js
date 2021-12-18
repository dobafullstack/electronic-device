import axiosClient from './axiosClient';

export default {
  getAllCategories: async () => axiosClient.get(`/category`),
  getCategory: async (categoryId) => axiosClient.get(`/category/${categoryId}`),
  updatedCategory: async (categoryId, body) =>
    axiosClient.put(`/category/${categoryId}`, {
      ...body,
    }),
  deleteCategory: async (categoryId) =>
    axiosClient.delete(`/category/${categoryId}`),
  createCategory: async (body) =>
    axiosClient.post('/category', {
      ...body,
    }),
  addChildCate: async (categoryId, body) =>
    axiosClient.post(`/category/child/${categoryId}/${categoryId}`, {
      ...body,
    }),
  updateChildCate: async (categoryId, categoryChild, body) =>
    axiosClient.put(`/category/child/${categoryId}/${categoryChild}`, {
      ...body,
    }),
  deleteChildCate: async (categoryId, categoryChild) =>
    axiosClient.delete(`/category/child/${categoryId}/${categoryChild}`),
};
