import { observer } from 'mobx-react-lite'
import { FC, useReducer } from 'react'
import { useHome } from '../../../pages/Home/Provider'
import { useStore } from '../../prividers/StoreProvider'
import { Button } from '../../UI/Button'
import { Input } from '../../UI/Input'
import { Select } from '../../UI/Select'
import { getInitialState, reducer, setField } from './reducer'

const RegistrationFormFC: FC = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState())
  const { store } = useStore()
  const { putMode } = useHome()

  return (
    <div>
      <Input
        onBlur={(e) => dispatch(setField('username', e.target.value))}
        // value={state.username}
        placeholder='Имя'
      />
      <Input
        onBlur={(e) => dispatch(setField('email', e.target.value))}
        // value={state.email}
        placeholder='Email'
      />
      <Input
        onBlur={(e) => dispatch(setField('password', e.target.value))}
        // value={state.password}
        placeholder='Пароль'
      />
      <Input
        onChange={(e) => dispatch(setField('dateBirth', e.target.value))}
        type='date'
        value={state.dateBirth || ''}
        placeholder='Дата рождения'
      />
      <Select options={[{ value: 'male' }, { value: 'female' }]}/>
      <Button label='Регистрация' onClick={() => store.registration(state)}/>
      <Button label='Логин' onClick={() => putMode('login')}/>
    </div>
  )
}

export const RegistrationForm = observer(RegistrationFormFC)
