import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'https://electronic-device.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
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
