import { observer } from 'mobx-react-lite'
// import { useEffect } from 'react'
// import { Router } from './components/Router'
// import { LoginForm } from './components/LoginForm'
// import { useStore } from './components/prividers/StoreProvider'
// import { User } from './models/User'
// import { userService } from './services/userService'

const AppFC = () => {
  // const [users, setUsers] = useState<User[]>([])
  // const { store } = useStore()

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     store.checkAuth()
  //   }
  // }, [])

  // // const getUsesrs = async () => {
  // //   try {
  // //     const res = await userService.fetchUsers()
  // //     setUsers(res.data)
  // //   } catch (e) {
  // //     store.setError(e as Error, 'error')
  // //   }
  // // }

  // if (store.isLoading) {
  //   return <div>Загрузка...</div>
  // }

  // if (!store.isAuth) {
  //   return <LoginForm/>
  // }

  return (
    <h1>APP</h1>
  )
}

export const App = observer(AppFC)
