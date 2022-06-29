import { observer } from 'mobx-react-lite'
import { FC, useReducer } from 'react'
import { useHome } from '../../../pages/Home/Provider'
import { useStore } from '../../prividers/StoreProvider'
import { Button } from '../../UI/Button'
import { Input } from '../../UI/Input'
import { getInitialState, reducer, setField } from './reducer'

const LoginFormFC: FC = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState())
  const { store } = useStore()
  const { putMode } = useHome()

  return (
    <div>
      <Input
        onChange={(e) => dispatch(setField('email', e.target.value))}
        value={state.email}
        placeholder='Email'
      />
      <Input
        onChange={(e) => dispatch(setField('password', e.target.value))}
        value={state.password}
        placeholder='Пароль'
      />
      <Button label='Логин' onClick={() => store.login(state)}/>
      <Button label='Регистрация' onClick={() => putMode('registration')}/>
    </div>
  )
}

export const LoginForm = observer(LoginFormFC)
