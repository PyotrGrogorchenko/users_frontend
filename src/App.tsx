import { ErrorBoundary } from 'react-error-boundary'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { observer } from 'mobx-react-lite'

import { ErrorFallback } from '@src/components/ErrorFallback'
import { StoreProvider, useStore } from '@src/components/prividers/StoreProvider'
import { Router } from '@src/components/Router'
import { theme } from '@src/styled/theme'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import { BrowserRouter } from 'react-router-dom'

// const Wrapper = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   padding: 2rem;
//   background: white;
// `

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}`

const AppFC = () => {
  // const [users, setUsers] = useState<User[]>([])
  const { store } = useStore()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

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
    <ThemeProvider theme={theme}>
      <Global/>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <StoreProvider>
          <BrowserRouter>
            <Layout>
              <Router/>
            </Layout>
          </BrowserRouter>
        </StoreProvider>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export const App = observer(AppFC)
