import { observer } from 'mobx-react-lite'
import { FC, useContext, useState } from 'react'
import { Context } from '../index'

const LoginFormFC: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { store } = useContext(Context)

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type='text'
        placeholder='Email'
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type='text'
        placeholder='Пароль'
      />
      <button onClick={() => store.login(email, password)}>Логин</button>
      <button onClick={() => store.registration(email, password)}>Регистрация</button>
    </div>
  )
}

export const LoginForm = observer(LoginFormFC)
