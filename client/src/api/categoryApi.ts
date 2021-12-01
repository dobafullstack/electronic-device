import Category from "../models/Category";
import axiosClient, { ResponseType } from "./axiosClient";

const categoryApi = {
    getAllCategoryApi: async (): Promise<ResponseType<Category[]>> => {
        return await axiosClient.get('/category');
    }
}

export default categoryApi;