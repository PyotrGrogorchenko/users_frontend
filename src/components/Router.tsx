import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Account } from '@src/pages/Account'
import { People } from '@src/pages/People'
import { NotFound } from '@src/pages/NotFound'
import { Home, HomeProvider } from '@src/pages/Home'

export const Router: FC = () => (
  <Routes>
    <Route path='/' element={<HomeProvider><Home/></HomeProvider>}/>
    <Route path='account' element={<Account/>}/>
    <Route path='people' element={<People/>}/>
    <Route path='*' element={<NotFound/>}/>
  </Routes>
)
