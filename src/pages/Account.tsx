import { FC, RefObject, useCallback, useRef } from 'react'
import { useStore } from '@src/components/prividers/StoreProvider'
import { formField as field } from '@src/components/forms/Form/reducer'
import { Form } from '@src/components/forms/Form'
import { Avatar, AvatarMethods } from '@src/components/UI/Avatar'
import { observer } from 'mobx-react-lite'

export const AccountFC: FC = () => {
  const { store } = useStore()

  const AvatarRef = useRef() as RefObject<AvatarMethods>

  const cb = useCallback((ok: boolean) => {
    if (ok) {
      AvatarRef.current?.save()
    }
  }, [])

  if (!store.isAuth) {
    return <></>
  }

  return (
    <>
      <Avatar ref={AvatarRef}/>
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
          action: store.saveUser.bind(store),
          cb
        }}
      />
    </>
  )
}

export const Account = observer(AccountFC)
