import LoginInput from "../types/LoginInput";
import RegisterInput from "../types/RegisterInput";
import axiosClient, { ResponseType } from "./axiosClient";

const authApi = {
    login: async ({
        usernameOrPassword,
        password,
    }: LoginInput): Promise<ResponseType> => {
        return await axiosClient.post(`/auth/login`, {
            usernameOrPassword,
            password,
        });
    },
    register: async ({
        username,
        name,
        email,
        password,
        phone,
    }: RegisterInput): Promise<ResponseType> => {
        return await axiosClient.post('/auth/login', {
            username,
            email,
            password,
            name,
            phone
        });
    },
};

export default authApi;
