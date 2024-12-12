import React ,{useContext,useEffect}from 'react'
import { CaptainDataContext } from '../context/captaincontext'
import { useNavigate } from 'react-router-dom'
const Captainprotectedwrapper = ({
    children
}) => {

const token=localStorage.getItem('token')
const navigate=useNavigate()
console.log(token)
useEffect(()=>{
    if(!token){
        navigate('/captain-login')
    }
    
},[token]
)

  return (
    <>{children}</>
  )
}

export default Captainprotectedwrapper