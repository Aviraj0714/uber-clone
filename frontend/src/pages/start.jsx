/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
const Start = () => {
  return (
    <div>
        <div className='h-screen bg-center bg-cover pt-8 flex justify-between flex-col w-full bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)]'>
            <img className='w-20 ml-5 ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
<div className='bg-white pb-7 py-4 px-4 '>
    <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
    <Link to='/login' className='w-full flex items-center justify-center bg-black text-white py-3 mt-5 rounded'>Continue</Link>
</div>
        </div>
    </div>
  )
}

export default Start