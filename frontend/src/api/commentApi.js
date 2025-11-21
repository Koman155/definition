import axiosClient from './axiosClient'

export const commentApi = {
  getAll: () => axiosClient.get('/comments'),
  getById: (id) => axiosClient.get(`/comments/${id}`),
  create: (data) => axiosClient.post('/comments', data),
  update: (id, data) => axiosClient.put(`/comments/${id}`, data),
  delete: (id) => axiosClient.delete(`/comments/${id}`),
}

