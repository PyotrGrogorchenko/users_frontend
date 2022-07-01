import { ValidationError } from '@src/models/ValidationError'

export type HTTPError = {
  message: string
  errors?: ValidationError[]
}
