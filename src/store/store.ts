import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { StoreError, TypeError } from '../exceptions/StoreError'
import { API_URL } from '../http'
import { AuthResponse } from '../models/responses/AuthResponse'
import { User, UserLogin, UserRegistration } from '../models/User'
import { authService } from '../services/authService'

export class Store {
  user = <User>{}
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

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading
  }

  setError(e: Error, type: TypeError = 'info') {
    this.errors.push({ err: new StoreError(e as Error), type })
  }

  async login(data: UserLogin) {
    try {
      const res = await authService.login(data)
      console.log(res)
      localStorage.setItem('token', res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      this.setError(new StoreError(e as Error), 'error')
    }
  }

  async registration(data: UserRegistration) {
    try {
      const res = await authService.registration(data)
      console.log(res)
      localStorage.setItem('token', res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      this.setError(new StoreError(e as Error), 'error')
    }
  }

  async logout() {
    try {
      await authService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser(<User>{})
    } catch (e) {
      this.setError(new StoreError(e as Error), 'error')
    }
  }

  async checkAuth() {
    this.setLoading(true)
    try {
      const res = await axios.get<AuthResponse>(`${API_URL}/users/refresh`, { withCredentials: true })
      console.log(res)
      localStorage.setItem('token', res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      this.setError(new StoreError(e as Error), 'error')
    } finally {
      this.setLoading(false)
    }
  }
}
