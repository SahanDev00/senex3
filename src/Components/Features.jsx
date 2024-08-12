import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoPricetagsOutline } from "react-icons/io5";

const Features = () => {
  return (
    <div className='w-[90%] lg:w-[85%] p-2 xl:w-[70%] h-[200px] md:h-[100px] relative mx-auto flex border border-white  justify-evenly items-center bg-black/50 mt-8 mb-14'>
        <div className='w-full h-full md:flex md:justify-evenly grid grid-cols-3'>
            <div className='flex items-center border-r pl-1 md:pr-10 border-red-600'>
                <FaTruckFast className='text-red-600 size-7 lg:size-8 xl:size-10 '/>
                <div className='md:ml-4 ml-2'>
                    <h1 className='font-semibold text-white text-xs md:text-sm lg:text-lg font-poppins'>Free Delivery</h1>
                    <p className='text-white font-poppins text-xs lg:text-sm'>from $50</p>
                </div>
            </div>
            <div className='flex items-center border-r pl-1 md:pr-10 border-red-600'>
                <FaThumbsUp className='text-red-600 size-7 lg:size-8 xl:size-10 '/>
                <div className='md:ml-4 ml-2'>
                    <h1 className='font-semibold text-white text-xs md:text-sm lg:text-lg font-poppins'>99% Customer</h1>
                    <p className='text-white font-poppins text-xs lg:text-sm'>Feedbacks</p>
                </div>
            </div>
            <div className='flex items-center md:border-r pl-1 md:pr-10 border-red-600'>
                <GiReturnArrow className='text-red-600 size-7 lg:size-8 xl:size-10 '/>
                <div className='md:ml-4 ml-2'>
                    <h1 className='font-semibold text-white text-xs md:text-sm lg:text-lg font-poppins'>365 Days</h1>
                    <p className='text-white font-poppins text-xs lg:text-sm'>for Free Return</p>
                </div>
            </div>
            <div className='flex items-center border-r pl-1 md:pr-10 border-red-600'>
                <GiTakeMyMoney className='text-red-600 size-7 lg:size-8 xl:size-10 '/>
                <div className='md:ml-4 ml-2'>
                    <h1 className='font-semibold text-white text-xs md:text-sm lg:text-lg font-poppins'>Payment</h1>
                    <p className='text-white font-poppins text-xs lg:text-sm'>Secure System</p>
                </div>
            </div>
            <div className='flex items-center pl-1 border-r md:border-none border-red-600'>
                <IoPricetagsOutline className='text-red-600 size-7 lg:size-8 xl:size-10 '/>
                <div className='md:ml-4 ml-2'>
                    <h1 className='font-semibold text-xs md:text-sm lg:text-lg text-white font-poppins'>Only Best</h1>
                    <p className='text-white font-poppins text-xs lg:text-sm'>brands</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features