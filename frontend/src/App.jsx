import React from 'react'
import { Routes,Route,Router } from 'react-router-dom'
import Start from './pages/start'
import Userlogin from './pages/userlogin'
import Usersignup from './pages/usersignup'
import Captainlogin from './pages/captainlogin'
import Captainsignup from './pages/captainsignup'
import Home from './pages/home'
import UserDataContext from './context/usercontext'

const App = () => {
  return (
    <div>
      <UserDataContext>
        
        <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/login' element={<Userlogin/>}></Route>
        <Route path='/signup' element={<Usersignup/>}></Route>
        <Route path='/captain-login' element={<Captainlogin/>}></Route>
        <Route path='/captain-signup' element={<Captainsignup/>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
         
          </UserDataContext>
     
    
    </div>
  )
}

export default App