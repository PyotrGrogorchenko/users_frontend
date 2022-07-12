export type User = {
  _id: string
  username: string
  email: string
  password: string
  dateBirth?: string
  gender?: 'male' | 'female'
  avatarId?: string
}

export type UserLogin = Pick<User, 'email' | 'password'>
export type UserRegistration = Omit<User, '_id'| 'avatar'>
