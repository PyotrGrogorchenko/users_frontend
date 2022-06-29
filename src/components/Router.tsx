import React, { FC } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import { Home } from '../pages/Home'
import { Account } from '../pages/Account'
import { People } from '../pages/People'
import { NotFound } from '../pages/NotFound'
import { Home } from '../pages/Home/Home'
import { HomeProvider } from '../pages/Home/Provider'

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeProvider><Home/></HomeProvider>}/>
      <Route path='account' element={<Account/>}/>
      <Route path='people' element={<People/>}/>
      <Route element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
)
