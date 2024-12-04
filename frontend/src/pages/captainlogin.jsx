import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const Captainlogin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [captainData, setcaptainData] = useState({})
    const submitHandler=(e)=>{
  e.preventDefault();
  setcaptainData({
    email:email,
    password:password
  })
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