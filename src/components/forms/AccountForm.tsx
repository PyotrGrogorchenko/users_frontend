import { FC, RefObject, useCallback, useRef } from 'react'
import { useHome } from '@src/pages/Home/Provider'
import { useStore } from '@src/components/prividers/StoreProvider'
import { Button } from '@src/components/UI/Button'
import { formField as field } from '@src/components/forms/Form/reducer'
import { Form } from '@src/components/forms/Form'
import { Avatar, AvatarMethods } from '@src/components/UI/Avatar'
import { observer } from 'mobx-react-lite'

const AccountFormFC: FC = () => {
  const { putMode } = useHome()
  const { store } = useStore()

  const AvatarRef = useRef() as RefObject<AvatarMethods>

  const cb = useCallback((ok: boolean) => {
    // if (!ok) return
    AvatarRef.current?.seveAvatar()
  }, [])

  // console.log('AccountFormFC', store.user.username)


  if (!store.isAuth) {
    return <></>
  }
  console.log('AccountFormFC', store.user.username)

  return (
    <>
      <Avatar ref={AvatarRef}/>
      <Form
        initialState={{
          fields: {
            username: { ...field, view: 'Имя', value: store.user.username },
            password: { ...field, view: 'Пароль', type: 'password' },
            gender: { ...field, value: store.user.gender || 'male' }
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

export const AccountForm = observer(AccountFormFC)
