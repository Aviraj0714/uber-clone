import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Captainsignup = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [userData, setuserData] = useState('')
  const submitHandler=(e)=>{
e.preventDefault();
setuserData({
  username:{
firstname:firstname,
lastname:lastname},
email:email,
password:password
})
setemail('')
setpassword('')
setfirstname('')
setlastname('')
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
        <div>
        <img className='w-20 mb-6'  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          
        <h3 className='text-lg font-medium mb-2'>What's your Name?</h3>
        <div className='flex gap-4 mb-6'>
        <input value={firstname} onChange={(e)=>{
          setfirstname(e.target.value)
        }} className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-base placeholder:text-sm' type="text" required name="name" placeholder="Enter your First Name"/>
        <input value={lastname} onChange={(e)=>{
          setlastname(e.target.value)
        }} className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-sm' type="text" required name="name" placeholder="Enter your Last Name"/>
        </div>
        <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
        <input value={email} onChange={(e)=>{
          setemail(e.target.value)
        }} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm' type="email" required name="email" placeholder="Enter your email"/>
        <h3 className='text-lg font-medium mb-2'>What's your password?</h3>
        <input value={password} onChange={(e)=>{
          setpassword(e.target.value)}} className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm' type="password" required name="password" placeholder="Enter your password"/>
        <button className='bg-[#111] text-white mb-7 rounded px-4 py-2 w-full text-sm font-semibold placeholder:text-sm'>Sign up</button>
        <p className='text-center'>Already Account?<Link to='/captain-login' className='text-blue-600'>Sign in</Link>
          </p>
        </form>
        </div>
        <div>
          <p className="text-[10px] leading-tight">By proceeding, you consent to receiving calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
        </div>
      </div>
    
  )
}

export default Captainsignup