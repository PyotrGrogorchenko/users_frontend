import { User } from '../User'
import { ValidationError } from '../ValidationError'
import { BaseResponse } from './BaseResponse'

export type AuthResponse = {
  accessToken: string
  refreshToken: string
  user: User
  message?: string
  errors?: ValidationError[]
} & BaseResponse
