import { FC, RefObject, useCallback, useRef } from 'react'
import { useHome } from '@src/pages/Home/Provider'
import { useStore } from '@src/components/prividers/StoreProvider'
import { Button } from '@src/components/UI/Button'
import { formField as field } from '@src/components/forms/Form/reducer'
import { Form } from '@src/components/forms/Form'
import { AvatarMethods, Avatar } from '@src/components/UI/Avatar'
import { User } from '@src/models/User'

export const RegistrationForm: FC = () => {
  const { putMode } = useHome()
  const { store } = useStore()
  const AvatarRef = useRef() as RefObject<AvatarMethods>

  const cb = useCallback(async (data: Record<string, string>) => {
    const resUser = await store.registration(data as User)
    if (!resUser.data.ok) return
    const resAvatar = await AvatarRef.current?.save()
    if (resAvatar?.data.image) {
      store.setAvatar(resAvatar.data.image)
    }
  }, [store, AvatarRef])

  return (
    <>
      <Avatar image={store.avatar} ref={AvatarRef}/>
      <Form
        initialState={{
          fields: {
            username: { ...field, label: 'Имя' },
            email: { ...field, label: 'Email', type: 'email' },
            password: { ...field, label: 'Пароль', type: 'password' },
            dateBirth: { ...field, label: 'Дата рождения: ', type: 'date' },
            gender: { ...field, value: 'male' }
          }
        }}
        submit={{
          label: 'Зарегистрироваться',
          cb
        }}
        actions={<Button onClick={() => putMode('login')}>Войти</Button>}
      />
    </>
  )
}
