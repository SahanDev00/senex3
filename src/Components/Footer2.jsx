import React from 'react'
import paymentPic from '../Assets/Images/payment.png'
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <div className='w-full h-[60px] bg-neutral-700'>
        <div className='w-[80%] mx-auto h-full flex items-center justify-between'>
            <img src={paymentPic} alt="" />
            <p className='text-center mt-2 font-poppins text-xs md:text-[16px] text-white '>Copyright © <span className='font-semibold'>Exesmart</span> - All rights Reserved</p>
            <div className='flex items-center justify-between gap-4'>
                <FaFacebook size={25} className='text-white hover:text-red-300 cursor-pointer'/>
                <FaWhatsapp size={25} className='text-white hover:text-red-300 cursor-pointer'/>
                <FaTwitter size={25} className='text-white hover:text-red-300 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Footer2