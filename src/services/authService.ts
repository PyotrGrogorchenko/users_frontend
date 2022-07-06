import { AxiosResponse } from 'axios'
import { http } from '../http'
import { AuthResponse } from '../models/responses/AuthResponse'
import { UserLogin, UserRegistration } from '../models/User'


export const authService = {
  login: async (data: UserLogin): Promise<AxiosResponse<AuthResponse>> => {
    return http.post<AuthResponse>('/auth/login', data)
  },
  registration: async (data: UserRegistration): Promise<AxiosResponse<AuthResponse>> => {
    return http.post<AuthResponse>('/auth/registration', data)
  },
  logout: async (): Promise<void> => {
    return http.post('/auth/logout')
  }

}
