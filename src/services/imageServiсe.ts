import { AxiosResponse } from 'axios'
import { http } from '@src/http'
import { ImageResponse } from '@src/models/responses/ImageResponse'

export const imageService = {
  upload: async (file: File, type = 'avatar'): Promise<AxiosResponse<ImageResponse>> => {
    const formData = new FormData()
    formData.append('image', file)
    formData.append('type', type)
    return http.postForm('/images', formData)
  },
  download: async (imageId: string): Promise<AxiosResponse<ImageResponse>> => {
    return http.get('/images', {
      params: {
        imageId
      }
    })
  }
}
