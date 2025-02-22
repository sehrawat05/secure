import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)})
    navigate('/login')
    .catch(err => console.log(err))
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-1/2 h-auto bg-purple-200 border border-black p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold text-center mb-4 text-gray-800'>Register</h2>
        
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          {/* Username Input */}
          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Username:</label>
            <input 
              type='text' 
              placeholder='Enter your username' 
              className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              onChange={(e)=> setName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Email:</label>
            <input 
              type='email' 
              placeholder='Enter your email' 
              className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className='block text-gray-700 font-semibold mb-1'>Password:</label>
            <input 
              type='password' 
              placeholder='Enter your password' 
              className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button 
            type='submit' 
            className='bg-purple-500 text-white font-bold py-2 rounded-md hover:bg-purple-700 transition duration-300'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
