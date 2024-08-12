import React, { useState } from 'react';
import loginPic from '../Assets/Images/login.webp';
import signUpPic from '../Assets/Images/signup.webp';
import Countries from '../Components/Countries';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track whether it's login or sign-up view

  const handleSwitch = () => {
    setIsLogin(!isLogin); // Toggle the state between login and sign-up
  };

  return (
    <div className='w-full h-full relative flex items-center py-5'>
      <div className='w-[70%] h-full flex mx-auto items-center md:bg-white rounded-3xl'>
        {isLogin ? (
          // Login
          <div className='w-full h-[450px] md:h-[550px] items-center md:grid grid-cols-2'>
            <div className='md:border-r-2'>
              <h1 className='text-2xl md:text-4xl font-bold text-red-600 cursor-pointer text-center'>SENƎX</h1>
              <h1 className='text-3xl md:text-5xl font-semibold text-white md:text-black mt-2 ml-5 text-center'>WELCOME BACK !!!</h1>
              <p className='text-gray-300 md:text-gray-800 font-semibold text-center mt-2'>Please enter your details...</p>
              <form className='mt-3 md:mt-5'>
                <label className='font-semibold ml-16'>Email</label>
                <input className='block w-[95%] md:w-[80%] mx-auto rounded-lg pl-4 py-2 border-red-500 border-2 mb-2 mt-1' type="email" placeholder='example@gmail.com' required />
                <label className='font-semibold ml-16'>Password</label>
                <input className='block w-[95%] md:w-[80%] mx-auto rounded-lg pl-4 py-2 border-red-500 border-2 mb-5 mt-1' type="password" placeholder='••••••••' required />
                <button className='block w-[95%] md:w-[80%] mx-auto rounded-lg bg-red-500 py-2 text-white font-semibold hover:bg-red-600'>Login</button>
              </form>
              <p className='text-center mt-3 font-semibold text-gray-600'>Haven't registered yet? <span className='text-red-500 font-bold cursor-pointer hover:text-red-600' onClick={handleSwitch}>Sign Up</span></p>
            </div>
            <div className='w-full h-full bg-black md:block hidden'>
              <img src={loginPic} alt="Login" className='w-full h-full object-cover rounded-r-3xl' />
            </div>
          </div>
        ) : (
          // Sign Up
          <div className='w-full h-[800px] rounded-3xl md:bg-white items-center md:grid grid-cols-2'>
            <div className='w-full h-full rounded-3xl bg-black md:block hidden'>
              <img src={signUpPic} alt="Sign Up" className='w-full h-full object-cover rounded-l-3xl' />
            </div>
            <div className='w-full'>
              <h1 className='text-xl font-bold text-red-600 cursor-pointer text-center'>SENƎX</h1>
              <h1 className='text-2xl font-semibold ml-5 text-center text-white md:text-black'>SIGN UP !</h1>
              <p className='text-gray-300 md:text-gray-800 font-semibold text-center'>Please enter your details...</p>
              <form className='mt-3 w-full'>
                <div className='flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>First Name</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Adam' required />
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>Last Name</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Nester' required />
                  </div>
                </div>
                <div className='flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>Address Line 1</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='' required />
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>Address Line 2</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='' required />
                  </div>
                </div>
                <div className='flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>City</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='' required />
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>State</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='' required />
                  </div>
                </div>
                <div className='flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>Postal Code</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="number" placeholder='' required />
                  </div>
                  <div className='w-full'>
                    <Countries />
                  </div>
                </div>
                <label className='font-semibold text-sm ml-7 md:ml-16 text-white md:text-black'>Mobile Number</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='94712345678' required />
                <label className='font-semibold text-sm ml-7 md:ml-16 text-white md:text-black'>Email</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="email" placeholder='example@gmail.com' required />
                <label className='font-semibold text-sm ml-7 md:ml-16 text-white md:text-black'>Password</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="password" placeholder='••••••••' required />
                <label className='font-semibold text-sm ml-7 md:ml-16 text-white md:text-black'>Confirm Password</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-5 mt-1' type="password" placeholder='••••••••' required />
                <button className='block w-[98%] md:w-[80%] mx-auto rounded-lg bg-red-500 py-1 text-white font-semibold hover:bg-red-600'>Sign Up</button>
              </form>
              <p className='text-center mt-3 font-semibold text-gray-600'>Already a user? <span className='text-red-500 font-bold cursor-pointer hover:text-red-600' onClick={handleSwitch}>Login</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
