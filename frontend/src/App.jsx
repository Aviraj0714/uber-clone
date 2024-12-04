import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Userlogin from './pages/userlogin'
import Usersignup from './pages/usersignup'
import Captainlogin from './pages/captainlogin'
import Captainsignup from './pages/captainsignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Userlogin/>}></Route>
        <Route path='/signup' element={<Usersignup/>}></Route>
        <Route path='/captain-login' element={<Captainlogin/>}></Route>
        <Route path='/captain-signup' element={<Captainsignup/>}></Route>
      </Routes>
    </div>
  )
}

export default App