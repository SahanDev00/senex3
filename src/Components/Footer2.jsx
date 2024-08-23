import React from 'react'
import paymentPic from '../Assets/Images/payment.png'
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <div className='w-full sm:mt-0 mt-20 h-[60px] bg-neutral-700 relative'>
        <div className='w-[90%] lg:w-[80%] gap-2 mx-auto h-full flex items-center justify-between'>
            <img src={paymentPic} alt="" className='w-[100px] md:w-[200px]' />
            <p className='text-center hidden sm:flex mt-2 font-poppins text-xs md:text-[16px] text-white '>Copyright © <span className='font-semibold'>Exesmart</span> - All rights Reserved</p>
            <div className='flex items-center justify-between gap-2 md:gap-4'>
                <FaFacebook className='text-white hover:text-blue-500 cursor-pointer size-5 md:size-8'/>
                <FaWhatsapp className='text-white hover:text-green-300 cursor-pointer size-5 md:size-8'/>
                <FaTwitter className='text-white hover:text-blue-500 cursor-pointer size-5 md:size-8'/>
            </div>
        </div>
        <p className='text-center mx-auto py-3 sm:hidden w-full font-poppins text-xs md:text-[16px] text-white bg-neutral-700'>Copyright © <span className='font-semibold'>Exesmart</span> - All rights Reserved</p>
    </div>
  )
}

export default Footer2