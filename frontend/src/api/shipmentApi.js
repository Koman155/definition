import axiosClient from './axiosClient'

export const shipmentApi = {
  getAll: () => axiosClient.get('/shipments'),
  getById: (id) => axiosClient.get(`/shipments/${id}`),
  create: (data) => axiosClient.post('/shipments', data),
  update: (id, data) => axiosClient.put(`/shipments/${id}`, data),
  delete: (id) => axiosClient.delete(`/shipments/${id}`),
  track: (trackingNumber) => axiosClient.get(`/shipments/track/${trackingNumber}`),
}

