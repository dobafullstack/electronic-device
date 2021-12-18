import axiosClient from './axiosClient';

export default {
  login: async (usernameOrEmail, password) =>
    axiosClient.post('/auth/login', {
      usernameOrEmail,
      password,
    }),
  getUser: async (token) =>
    axiosClient.get('/auth', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
