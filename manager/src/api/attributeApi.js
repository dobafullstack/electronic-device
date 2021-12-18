import axiosClient from './axiosClient';

export default {
  getAllAttributes: async () => axiosClient.get('/attribute'),
};
