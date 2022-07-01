import { FC, RefObject, useCallback, useRef } from 'react'
import { useHome } from '@src/pages/Home/Provider'
import { useStore } from '@src/components/prividers/StoreProvider'
import { Button } from '@src/components/UI/Button'
import { formField as field } from '@src/components/forms/Form/reducer'
import { Form } from '@src/components/forms/Form'
import { Avatar, AvatarMethods } from '@src/components/UI/Avatar'

export const RegistrationForm: FC = () => {
  const { putMode } = useHome()
  const { store } = useStore()

  const AvatarRef = useRef() as RefObject<AvatarMethods>

  const cb = useCallback((ok: boolean) => {
    // if (!ok) return
    AvatarRef.current?.seveAvatar()
  }, [])

  return (
    <>
      <Avatar ref={AvatarRef}/>
      <Form
        initialState={{
          fields: {
            username: { ...field, view: 'Имя' },
            email: { ...field, view: 'Email', type: 'email' },
            password: { ...field, view: 'Пароль' },
            dateBirth: { ...field, view: 'Дата рождения: ', type: 'date' },
            gender: { ...field }
          }
        }}
        submit={{
          view: 'Регистрация',
          action: store.registration.bind(store),
          cb
        }}
        actions={<Button onClick={() => putMode('login')}>Войти</Button>}
      />
    </>
  )
}
