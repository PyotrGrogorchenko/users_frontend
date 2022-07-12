import { FC } from 'react'
import { LoginForm } from '@src/components/forms/LoginForm'
import { RegistrationForm } from '@src/components/forms/RegistrationForm'
import { useHome } from './Provider'
import styled from 'styled-components'

export const Container = styled.div(() => `
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`)

export const Home: FC = () => {
  const { isLogin } = useHome()

  return (
    <>
      {isLogin() && <Container><LoginForm/></Container>}
      {!isLogin() && <RegistrationForm/>}
    </>
  )
}
