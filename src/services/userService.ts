import { AxiosResponse } from 'axios'
import { http } from '../http'
import { User } from '../models/responses/User'

export const userService = {
  fetchUsers: async (): Promise<AxiosResponse<User[]>> => {
    return http.get<User[]>('/users')
  }
}
