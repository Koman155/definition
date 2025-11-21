import axiosClient from './axiosClient'

export const authApi = {
  clientLogin: (credentials) => axiosClient.post('/auth/client/login', credentials),
  clientRegister: (data) => axiosClient.post('/auth/client/register', data),
  staffLogin: (credentials) => axiosClient.post('/auth/staff/login', credentials),
  staffRegister: (data) => axiosClient.post('/auth/staff/register', data),
  adminLogin: (credentials) => axiosClient.post('/auth/admin/login', credentials),
  adminRegister: (data) => axiosClient.post('/auth/admin/register', data),
  logout: () => axiosClient.post('/auth/logout'),
  getCurrentUser: () => axiosClient.get('/auth/me'),
}

