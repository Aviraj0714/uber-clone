import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import{ CaptainDataContext} from '../context/captaincontext'
const Captainlogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    const {captain,setCaptain}=React.useContext(CaptainDataContext)

    const submitHandler=async(e)=>{
  e.preventDefault();
  const captain={
    email:email,
    password:password
  }
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captain)
  if(response.status===200){
    const data=response.data
    setCaptain(data.captain)
    localStorage.setItem('token',data.token)
    navigate('/captainhome')
    }

  
  setemail('')
  setpassword('')
    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
        <img className='w-20 mb-5'  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
        <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
        <input value={email} onChange={(e)=>{
          setemail(e.target.value)
        }} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" required name="email" placeholder="Enter your email"/>
        <h3 className='text-lg font-medium mb-2'>What's your password?</h3>
        <input value={password} onChange={(e)=>{
          setpassword(e.target.value)}} className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" required name="password" placeholder="Enter your password"/>
        <button className='bg-[#111] text-white mb-7 rounded px-4 py-2 w-full text-lg font-semibold placeholder:text-base'>Login</button>
        <p className='text-center'>Register as a Captian?<Link to='/captain-signup' className='text-blue-600'>Register as a Captian</Link>
          </p>
        </form>
        </div>
        <div>
          <Link to='/login'className='bg-[#eccc68] flex items-center justify-center text-white mb-5 rounded px-4 py-2 w-full text-lg font-semibold placeholder:text-base'>Sign in as User</Link>
        </div>
      </div>
    
  )
}

export default Captainlogin