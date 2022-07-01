import { FC, ReactNode, useContext, createContext } from 'react'
import { Store } from '@src/store'

const store = new Store()
const Context = createContext({ store })
export const useStore = () => useContext(Context)

export const StoreProvider: FC<{children: ReactNode}> = (props) => {
  return (
    <Context.Provider value={{ store }}>
      {props.children}
    </Context.Provider>
  )
}
