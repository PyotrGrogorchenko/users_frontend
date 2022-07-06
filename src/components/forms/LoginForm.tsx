import { FC } from 'react'
import { useHome } from '@src/pages/Home/Provider'
import { useStore } from '@src/components/prividers/StoreProvider'
import { Button } from '@src/components/UI/Button'
import { formField as field } from '@src/components/forms/Form/reducer'
import { Form } from '@src/components/forms/Form'

export const LoginForm: FC = () => {
  const { putMode } = useHome()
  const { store } = useStore()

  return (
    <>
      <Form
        initialState={{
          fields: {
            email: { ...field, type: 'email', label: 'Email' },
            password: { ...field, label: 'Пароль' }
          }
        }}
        submit={{
          label: 'Войти',
          action: store.login.bind(store)
        }}
        actions={<Button onClick={() => putMode('registration')}>Зарегистрироваться</Button>}
      />
    </>
  )
}
