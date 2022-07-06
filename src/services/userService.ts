import { AuthResponse } from '@src/models/responses/AuthResponse'
import { AxiosResponse } from 'axios'
import { http } from '../http'
import { User } from '../models/User'

export const userService = {
  fetchUsers: async (): Promise<AxiosResponse<User[]>> => {
    return http.get('/users')
  },
  putUser: async (data: User): Promise<AxiosResponse<AuthResponse>> => {
    return http.put('/users', data)
  }
}
