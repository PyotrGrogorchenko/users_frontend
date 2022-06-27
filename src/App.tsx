import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { Context } from '.'
import { LoginForm } from './components/LoginForm'

const AppFC = () => {
  const { store } = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  return (
    <div>
      <h1>{ store.isAuth ? `Авторизован ${store.user.email}` : 'Автоизуйтесь'}</h1>
      <LoginForm/>
    </div>
  )
}

export const App = observer(AppFC)
