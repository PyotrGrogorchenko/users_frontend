import { AxiosResponse } from 'axios'
import { http } from '../http'
import { AuthResponse } from '../models/responses/AuthResponse'


export const authService = {
  login: async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return http.post<AuthResponse>('/users/login', { email, password })
  },
  registration: async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return http.post<AuthResponse>('/users/registration', { email, password })
  },
  logout: async (): Promise<void> => {
    return http.post('/users/logout')
  }

}
