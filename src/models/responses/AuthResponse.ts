import { User } from '../User'
import { HTTPError } from './HTTPError'

export type AuthResponse = {
  accessToken: string
  refreshToken: string
  user: User
} & HTTPError
