import { FC, RefObject, useCallback, useRef } from 'react'
import { useHome } from '@src/pages/Home/Provider'
import { useStore } from '@src/components/prividers/StoreProvider'
import { Button } from '@src/components/UI/Button'
import { formField as field } from '@src/components/forms/Form/reducer'
import { Form } from '@src/components/forms/Form'
import { AvatarMethods, Avatar } from '@src/components/UI/Avatar'

export const RegistrationForm: FC = () => {
  const { putMode } = useHome()
  const { store } = useStore()
  const AvatarRef = useRef() as RefObject<AvatarMethods>

  const cb = useCallback((ok: boolean) => {
    if (ok) {
      AvatarRef.current?.save()
    }
  }, [])

  return (
    <>
      <Avatar ref={AvatarRef}/>
      <Form
        initialState={{
          fields: {
            username: { ...field, label: 'Имя' },
            email: { ...field, label: 'Email', type: 'email' },
            password: { ...field, label: 'Пароль' },
            dateBirth: { ...field, label: 'Дата рождения: ', type: 'date' },
            gender: { ...field, value: 'male' }
          }
        }}
        submit={{
          label: 'Зарегистрироваться',
          action: store.registration.bind(store),
          cb
        }}
        actions={<Button onClick={() => putMode('login')}>Войти</Button>}
      />
    </>
  )
}
