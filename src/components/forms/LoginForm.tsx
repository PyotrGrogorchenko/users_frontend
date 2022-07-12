import { FC, useCallback } from 'react'
import { useHome } from '@src/pages/Home/Provider'
import { useStore } from '@src/components/prividers/StoreProvider'
import { Button } from '@src/components/UI/Button'
import { formField as field } from '@src/components/forms/Form/reducer'
import { Form } from '@src/components/forms/Form'
import { UserLogin } from '@src/models/User'

export const LoginForm: FC = () => {
  const { putMode } = useHome()
  const { store } = useStore()

  const cb = useCallback(async (data: Record<string, string>) => {
    await store.login(data as UserLogin)
  }, [store])

  return (
    <>
      <Form
        initialState={{
          fields: {
            email: { ...field, type: 'email', label: 'Email' },
            password: { ...field, label: 'Пароль', type: 'password' }
          }
        }}
        submit={{
          label: 'Войти',
          cb
        }}
        actions={<Button onClick={() => putMode('registration')}>Зарегистрироваться</Button>}
      />
    </>
  )
}
