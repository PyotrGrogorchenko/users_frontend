import { FC } from 'react'
import { LoginForm } from '@src/components/forms/LoginForm'
import { RegistrationForm } from '@src/components/forms/RegistrationForm'
import { useHome } from './Provider'

export const Home: FC = () => {
  const { isLogin } = useHome()

  return (
    <>
      {isLogin() && <LoginForm/>}
      {!isLogin() && <RegistrationForm/>}
    </>
  )
}
