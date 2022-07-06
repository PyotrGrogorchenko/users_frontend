import { AxiosResponse } from 'axios'
import { http } from '@src/http'
import { BaseResponse } from '@src/models/responses/BaseResponse'

export const imageService = {
  upload: async (file: File, type = 'avatar'): Promise<AxiosResponse<BaseResponse>> => {
    const formData = new FormData()
    formData.append('image', file)
    formData.append('type', type)
    return http.postForm('/images', formData)
  },
  download: async (userId: string, type: string): Promise<AxiosResponse<BaseResponse>> => {
    return http.get('/images')
  }
}
