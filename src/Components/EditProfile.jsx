import React from 'react'
import Countries from '../Components/Countries'

const EditProfile = () => {
  return (
    <div className='relative container mx-auto'>
      <div>
        <h1 className='text-3xl text-white mt-5 font-bold text-center font-poppins'>Edit Your Details</h1>
              <form className='mt-3 mb-10'>
                <div className='flex gap-4 w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white font-poppins'>First Name</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Adam' required />
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white font-poppins'>Last Name</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Nester' required />
                  </div>
                </div>
                <div className='flex gap-4 w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white font-poppins'>Address Line 1</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='' required />
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white font-poppins'>Address Line 2</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='' required />
                  </div>
                </div>
                <div className='flex gap-4 w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white font-poppins'>City</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='' required />
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white font-poppins'>State</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='' required />
                  </div>
                </div>
                <div className='flex gap-4 w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white font-poppins'>Postal Code</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="number" placeholder='' required />
                  </div>
                  <div className='w-full text-gray-400'>
                    <Countries />
                  </div>
                </div>
                <div className='w-[80%] mx-auto'>
                  <label className='font-semibold text-sm text-white font-poppins'>Mobile Number</label>
                  <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='94712345678' required />
                </div>
                <div className='w-[80%] mx-auto'>
                  <label className='font-semibold text-sm text-white font-poppins'>Email</label>
                  <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-5 mt-1' type="email" placeholder='example@gmail.com' required />
                </div>
                <button className='block w-[80%] mx-auto rounded-lg bg-red-500 py-2 text-white font-semibold hover:bg-red-600'>Edit Profile</button>
              </form>
            </div>
    </div>
  )
}

export default EditProfile