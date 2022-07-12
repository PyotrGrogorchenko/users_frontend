import axios, { AxiosResponse } from 'axios'
import { makeAutoObservable } from 'mobx'
import { userService } from '@src/services/userService'
import { StoreError, TypeError } from '@src/exceptions/StoreError'
import { API_URL } from '@src/http'
import { AuthResponse } from '@src/models/responses/AuthResponse'
import { User, UserLogin, UserRegistration } from '@src/models/User'
import { authService } from '@src/services/authService'
import { imageService } from '@src/services/imageServiсe'
import { Image } from '@src/models/Image'

export class Store {
  user = <User>{}
  avatar?: Image = undefined
  isAuth = false
  isLoading = false
  errors: { err: StoreError, type: TypeError} [] = []

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(isAuth: boolean) {
    this.isAuth = isAuth
  }

  setUser(user: User) {
    this.user = user
  }

  setAvatar(avatar?: Image) {
    this.avatar = avatar
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading
  }

  setError(e: Error, type: TypeError = 'info') {
    this.errors.push({ err: new StoreError(e as Error), type })
  }

  async login(data: UserLogin): Promise<AxiosResponse<AuthResponse>> {
    try {
      const res = await authService.login(data)
      localStorage.setItem('token', res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
      return res
    } catch (e) {
      return e as AxiosResponse<AuthResponse>
    }
  }

  async registration(data: UserRegistration): Promise<AxiosResponse<AuthResponse>> {
    try {
      const res = await authService.registration(data)
      localStorage.setItem('token', res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
      return res
    } catch (e) {
      return e as AxiosResponse<AuthResponse>
    }
  }

  async saveUser(data: User) {
    const res = await userService.putUser(data)
    if (res.data.ok) {
      this.setUser(data)
    }
    return res
  }

  async logout() {
    try {
      await authService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser(<User>{})
      this.setAvatar(undefined)
    } catch (e) {
      this.setError(new StoreError(e as Error), 'error')
    }
  }

  async checkAuth() {
    try {
      const res = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, { withCredentials: true })
      localStorage.setItem('token', res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
      if (res.data.user.avatarId) {
        const resAvatar = await imageService.download(res.data.user.avatarId)
        this.setAvatar(resAvatar.data.image)
      }
    } catch (e) {
      this.setError(new StoreError(e as Error), 'error')
    } finally {
      this.setLoading(false)
    }
  }
}
