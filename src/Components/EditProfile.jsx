import React from 'react'
import Countries from '../Components/Countries'
import { Helmet } from 'react-helmet'

const EditProfile = () => {
  return (
    <div className='relative xl:h-[720px] container xl:mt-20 mx-auto'>
      <Helmet><title>SENEX | Edit Profile</title></Helmet>
      <div>
        <h1 className='text-3xl text-white mt-5 font-bold text-center font-poppins'>Edit Your Details</h1>
              <form className='mt-3 mb-10'>
                <div className='md:flex gap-4 w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white font-poppins'>First Name</label>
                    <div className='flex flex-row-reverse items-center gap-1'>
                      <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Adam' required />
                      <select name="salutation" className='border-red-500 border-2 py-1 mb-2 mt-1 rounded-lg'>
                          <option value="Mr.">Mr.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Miss.">Miss.</option>
                          <option value="Ms.">Ms.</option>
                          <option value="M/s.">M/s.</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Prof.">Prof.</option>
                          <option value="Rev.">Rev.</option>
                        </select>
                    </div>
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white font-poppins'>Last Name</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Nester' required />
                  </div>
                </div>
                <div className='lg:flex gap-4 w-[80%] mx-auto'>
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