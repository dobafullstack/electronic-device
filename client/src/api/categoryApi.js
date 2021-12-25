import axiosClient from "./axiosClient";

const categoryApi = {
  getAllCategoryApi: async () => {
    return await axiosClient.get("/category");
  },
  getCategoryById: async (id) => {
    return await axiosClient.get(`/category/${id}`);
  },
};

export default categoryApi;
