import { FC, ReactNode, useContext, createContext, useState } from 'react'

type Mode = 'login' | 'registration'

type Context = {
  putMode: (mode: Mode) => void
  isLogin: () => boolean
}

const Context = createContext<Partial<Context>>({})
export const useHome = () => useContext(Context) as Context

export const HomeProvider: FC<{children: ReactNode}> = (props) => {
  const [mode, setMode] = useState<Mode>('login')

  const putMode = (m: Mode) => setMode(m)
  const isLogin = () => mode === 'login'

  return (
    <Context.Provider value={{ putMode, isLogin } as Context}>
      {props.children}
    </Context.Provider>
  )
}
