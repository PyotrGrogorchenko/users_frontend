import { Image } from '../Image'
import { BaseResponse } from './BaseResponse'

export type ImageResponse = {
  image: Image
  type: string
} & BaseResponse
