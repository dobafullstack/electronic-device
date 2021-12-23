import axiosClient from "./axiosClient";

export default {
    login: async (usernameOrEmail, password) =>
        await axiosClient.post("/auth/login", {
            usernameOrEmail,
            password,
        }),
    register: async (username, email, password, name, phone) =>
        await axiosClient.post("/auth/register", {
            username,
            email,
            password,
            name,
            phone,
        }),
    getUser: async (token) =>
        await axiosClient.get("/auth", {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }),
};
