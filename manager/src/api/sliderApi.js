import axiosClient from "./axiosClient";

export default {
    getAllSlider: async () => axiosClient.get('/slider'),
    createSlider: async (body) => axiosClient.post('/slider', {...body}),
    deleteSlider: async (id) => axiosClient.delete(`/slider/${id}`)
}