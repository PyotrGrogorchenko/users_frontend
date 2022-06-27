import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { API_URL } from '../http'
import { AuthResponse } from '../models/responses/AuthResponse'
import { User } from '../models/responses/User'
import { authService } from '../services/authService'

export class Store {
  user = <User>{}
  isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(isAuth: boolean) {
    this.isAuth = isAuth
  }

  setUser(user: User) {
    this.user = user
  }

  async login(email: string, password: string) {
    try {
      const res = await authService.login(email, password)
      console.log(res)
      localStorage.setItem('token', res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      console.log(e)
    }
  }

  async registration(email: string, password: string) {
    try {
      const res = await authService.registration(email, password)
      console.log(res)
      localStorage.setItem('token', res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      console.log(e)
    }
  }

  async logout() {
    try {
      await authService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser(<User>{})
    } catch (e) {
      console.log(e)
    }
  }

  async checkAuth() {
    try {
      const res = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
      console.log(res)
      localStorage.setItem('token', res.data.accessToken)
      this.setAuth(true)
      this.setUser(res.data.user)
    } catch (e) {
      console.log(e)
    }
  }
}
