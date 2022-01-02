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
  getAllUsers: async () => axiosClient.get('/auth/users'),
  updateUser: async (id, body) => axiosClient.put(`/auth/update/${id}`, {...body}),
  createUser: async (body) => axiosClient.post('/auth/createUser', {
    ...body
  }),
  getUserById: async (id) => axiosClient.get(`/auth/user/${id}`)
};
