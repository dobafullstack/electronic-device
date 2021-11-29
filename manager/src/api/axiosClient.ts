import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: "https://electronic-device.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
        type: "aa-pet",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
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

export interface ResponseType {
    code: number;
    result: any;
    error?: {
        message: string;
    };
}
