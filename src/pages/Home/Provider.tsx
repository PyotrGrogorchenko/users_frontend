import { FC, ReactNode, useContext, createContext, useState } from 'react'

type Mode = 'login' | 'registration'

type Context = {
  putMode: (mode: Mode) => void
  selectMode: () => Mode
}

const Context = createContext<Partial<Context>>({})
export const useHome = () => useContext(Context) as Context

export const HomeProvider: FC<{children: ReactNode}> = (props) => {
  const [mode, setMode] = useState<Mode>('login')

  const putMode = (m: Mode) => setMode(m)
  const selectMode = () => mode

  return (
    <Context.Provider value={{ putMode, selectMode } as Context}>
      {props.children}
    </Context.Provider>
  )
}
