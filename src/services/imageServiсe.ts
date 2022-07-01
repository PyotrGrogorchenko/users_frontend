import { AxiosResponse } from 'axios'
import { http } from '@src/http'

export const imageService = {
  save: async (file: File, type = 'avatar'): Promise<any> => {
    const formData = new FormData()
    formData.append('image', file)
    return http.postForm<any>('/images', formData)
  }
}
