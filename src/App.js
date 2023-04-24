import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage,SignUpPage } from './pages'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/sign-up' element={<SignUpPage />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App