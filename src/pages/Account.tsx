import { FC, RefObject, useCallback, useRef } from 'react'
import { useStore } from '@src/components/prividers/StoreProvider'
import { formField as field } from '@src/components/forms/Form/reducer'
import { Form } from '@src/components/forms/Form'
import { Avatar, AvatarMethods } from '@src/components/UI/Avatar'
import { observer } from 'mobx-react-lite'
import { Button } from '@src/components/UI/Button'
import { User } from '@src/models/User'

export const AccountFC: FC = () => {
  const { store } = useStore()

  const AvatarRef = useRef() as RefObject<AvatarMethods>

  const cb = useCallback(async (data: Record<string, string>) => {
    const resUser = await store.saveUser(data as User)
    if (!resUser.data.ok) return
    const resAvatar = await AvatarRef.current?.save()
    if (resAvatar?.data.image) {
      store.setAvatar(resAvatar.data.image)
    }
  }, [store, AvatarRef])

  const onLogout = useCallback(() => {
    store.logout()
  }, [store])

  if (!store.isAuth) {
    return <></>
  }

  return (
    <>
      <Avatar image={store.avatar} ref={AvatarRef}/>
      <Form
        initialState={{
          fields: {
            username: { ...field, label: 'Имя', value: store.user.username },
            password: { ...field, label: 'Пароль', type: 'password' },
            gender: { ...field, value: store.user.gender || 'male' }
          }
        }}
        submit={{
          label: 'Сохранить',
          cb
        }}
        actions={<Button onClick={onLogout}>Выйти</Button>}
      />
    </>
  )
}

export const Account = observer(AccountFC)
