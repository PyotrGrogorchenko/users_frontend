import axios from 'axios'
import { AuthResponse } from '@src/models/responses/AuthResponse'

export const API_URL = 'http://localhost:3000/api'

export const http = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  validateStatus: () => true
})

http.interceptors.request.use((config) => {
  if (!config.headers) {
    return config
  }
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

http.interceptors.response.use((config) => {
  return config
}, (async (err) => {
  const originalRequest = err.config
  if (err.response.status === 401 && err.config && !err.config._isRetry) {
    try {
      originalRequest._isRetry = true
      const res = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, { withCredentials: true })
      localStorage.setItem('token', res.data.accessToken)
      return http.request(originalRequest)
    } catch (e) {
      console.error('Не авторизован')
    }
  }
  throw err
}))
