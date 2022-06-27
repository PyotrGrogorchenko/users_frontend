import axios from 'axios'

export const API_URL = 'http://localhost:3000/api'

export const http = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

http.interceptors.request.use((config) => {
  if (!config.headers) {
    return config
  }
  config.headers.Autorization = `Bearer ${localStorage.getItem('token')}`
  return config
})
