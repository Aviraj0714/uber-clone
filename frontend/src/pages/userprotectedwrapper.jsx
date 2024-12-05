import React ,{useContext,useEffect}from 'react'
import { UserDataContext } from '../context/usercontext'
import { useNavigate } from 'react-router-dom'
const Userprotectedwrapper = ({
    children
}) => {

const token=localStorage.getItem('token')
const navigate=useNavigate()

useEffect(()=>{
    if(!token){
        navigate('/login')
    }
    
},[token]
)

  return (
    <>{children}</>
  )
}

export default Userprotectedwrapper