import { ResponseType } from "./axiosClient";
import axiosClient from "./axiosClient";

const productTypeApi = {
    getAllProductTypes: async (): Promise<ResponseType> => {
        return await axiosClient.get('/product-type');
    }
}

export default productTypeApi;