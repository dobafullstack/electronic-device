import axiosClient from "./axiosClient";

export default {
    login: async (usernameOrEmail, password) =>
        await axiosClient.post("/auth/login", {
            usernameOrEmail,
            password,
        }),
    register: async (body) =>
        await axiosClient.post("/auth/register", {
            ...body
        }),
    getUser: async (token) =>
        await axiosClient.get("/auth", {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }),
};
