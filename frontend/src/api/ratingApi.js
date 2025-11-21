import axiosClient from './axiosClient'

export const ratingApi = {
  getAll: () => axiosClient.get('/ratings'),
  getById: (id) => axiosClient.get(`/ratings/${id}`),
  create: (data) => axiosClient.post('/ratings', data),
  update: (id, data) => axiosClient.put(`/ratings/${id}`, data),
  delete: (id) => axiosClient.delete(`/ratings/${id}`),
  getAverage: () => axiosClient.get('/ratings/average'),
}

