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
import Captainhome from './pages/captainhome'
import Captainprotectedwrapper from './pages/captainprotectedwrapper'
import Userprofile from './pages/userprofile'
import Captainprofile from './pages/captainprofile'

const App = () => {
  return (
    <div>
      <UserDataContext>
        
        <Routes>
        <Route path='/' element={<Start/>}></Route>
        <Route path='/userprofile' element={<Userprofile></Userprofile>}></Route>
        <Route path='/captainprofile' element={<Captainprofile></Captainprofile>}></Route>
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
        <Route path='/captainhome' element={<Captainprotectedwrapper> <Captainhome></Captainhome></Captainprotectedwrapper>}></Route>
      </Routes>
         
          </UserDataContext>
     
    
    </div>
  )
}

export default App