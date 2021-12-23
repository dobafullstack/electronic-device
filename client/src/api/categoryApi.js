import axiosClient from "./axiosClient";

const categoryApi = {
    getAllCategoryApi: async () => {
        return await axiosClient.get('/category');
    }
}

export default categoryApi;