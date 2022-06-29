import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { LoginForm } from '../../components/forms/LoginForm'
import { RegistrationForm } from '../../components/forms/RegistrationForm'
import { useHome } from './Provider'

const HomeFC: FC = () => {
  const { selectMode } = useHome()

  return (
    <>
      {selectMode() === 'login' && <LoginForm/>}
      {selectMode() === 'registration' && <RegistrationForm/>}
    </>
  )
}

export const Home = observer(HomeFC)
