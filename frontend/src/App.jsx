import React from 'react'
import { Routes,Route,Router } from 'react-router-dom'
import Start from './pages/start'
import Userlogin from './pages/userlogin'
import Usersignup from './pages/usersignup'
import Captainlogin from './pages/captainlogin'
import Captainsignup from './pages/captainsignup'
import Home from './pages/home'
import UserDataContext from './context/usercontext'
import Userprotectedwrapper from './pages/userprotectedwrapper'
import Userlogout from './pages/userlogout'

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
        <Route path='/home' element={<Userprotectedwrapper>
          <Home/>
        </Userprotectedwrapper>}></Route>
        <Route path='/users/logout' element={<Userprotectedwrapper>
<Userlogout></Userlogout>
        </Userprotectedwrapper>}></Route>
      </Routes>
         
          </UserDataContext>
     
    
    </div>
  )
}

export default App