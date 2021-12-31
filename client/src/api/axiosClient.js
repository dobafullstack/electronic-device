import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: "https://electronic-device.herokuapp.com",
    headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use(
    (res) => {
        if (res && res.data) {
            return res.data;
        }

        return res.data;
    },
    (err) => {
        throw err;
    }
);

export default axiosClient;
