import axiosClient from './axiosClient'

export const paymentApi = {
  getAll: () => axiosClient.get('/payments'),
  getById: (id) => axiosClient.get(`/payments/${id}`),
  create: (data) => axiosClient.post('/payments', data),
  update: (id, data) => axiosClient.put(`/payments/${id}`, data),
  uploadProof: (id, formData) => axiosClient.post(`/payments/${id}/proof`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
}

