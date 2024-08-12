import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa'
import { PiTelegramLogoLight } from "react-icons/pi";
import { PiHeadsetBold } from "react-icons/pi";
import paymentPic from "../Assets/Images/payment.png"
import { FaRegHandPointRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full sm:h-[1050px] md:h-[650px] xl:h-[400px] relative bg-red-600 '>
      <div className='w-[94%] xl:w-[85%] md:h-[650px] xl:h-full mx-auto block md:flex justify-between related'>
        <div className='grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-2 h-[80%] xl:grid-cols-3 mt-14'>
          <div className='h-full md:mt-0 mt-6 md:ml-0 ml-6'>
            <h1 className='text-xl text-white font-semibold mb-3 font-poppins'>Information</h1>
            <p className='mb-1 text-gray-200 cursor-pointer hover:text-white flex items-center gap-2'><FaRegHandPointRight/>About us</p>
            <p className='mb-1 text-gray-200 cursor-pointer hover:text-white flex items-center gap-2'><FaRegHandPointRight/>Contact us</p>
            <p className='mb-1 text-gray-200 cursor-pointer hover:text-white flex items-center gap-2'><FaRegHandPointRight/>Return Policies</p>
            <p className='mb-1 text-gray-200 cursor-pointer hover:text-white flex items-center gap-2'><FaRegHandPointRight/>Privacy Policies</p>
            <p className='mb-1 text-gray-200 cursor-pointer hover:text-white flex items-center gap-2'><FaRegHandPointRight/>Terms & Condition</p>
          </div>
          <div className='md:ml-0 ml-6'>
            <h1 className='text-xl text-white font-semibold mb-3 font-poppins'>Contact Info</h1>
            <p className='mb-1 text-gray-200 flex gap-2 items-center'><FaRegHandPointRight/>Hotline: +94777300288</p>
            <p className='mb-1 text-gray-200 flex gap-2 items-center'><FaRegHandPointRight/>Showroom: +94114468500</p>
            <p className='mb-1 text-gray-200 flex gap-2 items-center'><FaRegHandPointRight/>Workshop: +94114673950</p>
            <p className='mb-1 text-gray-200 flex gap-2 items-center'><FaRegHandPointRight/>Workshop: +94114199941</p>
            <p className='mb-1 text-gray-200 flex gap-2 items-center'><FaRegHandPointRight/>Email: msds.net@live.com</p>
          </div>
          <div className='md:ml-0 ml-6'>
            <h1 className='text-xl text-white font-semibold mb-3 font-poppins'>Address</h1>
            <p className='mb-1 text-gray-200 flex gap-2 items-center'><FaRegHandPointRight/>Microsis Computers</p>
            <p className='mb-1 text-gray-200 flex gap-2'><FaRegHandPointRight className='mt-1'/>No 29 UC Shipping Complex <br/>Ja-Ela 11350<br/>Sri Lanka</p>
            <p className='mb-1 text-gray-200 flex gap-2'><FaRegHandPointRight className='mt-1'/>WORKING DAYS / HOURS: MON - SUN / <br/>9:00 AM - 8.00 PM</p>
          </div>
          <div className='md:absolute hidden md:block md:bottom-4 lg:bottom-8 text-gray-200 font-poppins'>
            <p className='text-wrap xl:w-[700px] 2xl:w-[800px]'>The best place to buy Laptops, Computers & Accessories. Personal Computers, Laptop Computers, Computer Accessories, Network Products, Repairs</p>
          </div>
        </div>



        {/* NEWSLETTER */}
        <div className='mt-14 md:w-[550px] md:px-5 lg:px-0 lg:w-[500px]'>
          <div className='w-full'>
            <div className='flex items-center'>
              <PiTelegramLogoLight className='ml-5 md:ml-0 mr-3 md:mr-2 lg:mr-5 text-white size-8 xl:size-10'/>
              <div>
                <h1 className='flex items-center text-white md:text-[16px] text-xl lg:text-xl xl:text-2xl font-semibold font-poppins'>SIGN UP TO NEWSLETTER</h1>
                <p className='text-white font-poppins md:text-xs md:mb-3 lg:mb-0  lg:text-sm xl:text-[16px]'>Recieve $20 Coupon for the First Shopping.</p>
              </div>
            </div>
            <div className='md:mt-0 mt-4 lg:mt-5 xl:mt-8'>
              <form className='w-full flex mx-auto justify-center'>
                <input type="email" placeholder='Email address' className='md:w-[90%] w-[80%] lg:w-full rounded-l-full pl-6' />
                <button type='submit' className='bg-gray-800 text-white lg:text-[16px] text-xs md:text-sm w-[80px] md:w-[90px] lg:w-[120px] px-1 py-3 md:p-3 hover:bg-gray-300 hover:text-black hover:border-l-2 rounded-r-full font-semibold'>Sign Up</button>
              </form>
            </div>
            <div className='mt-8 mb-2 flex items-center'>
              <div>
                <PiHeadsetBold className='text-white mr-5 size-7 ml-5 md:ml-0 md:size-9 xl:size-12'/>
              </div>
              <div>
                <h1 className='text-white font-semibold md:text-[16px] text-lg lg:text-lg font-poppins'>Got a question? Call us 24/7!</h1>
                <p className='text-white md:text-xl lg:text-3xl font-poppins'>0777-300-288</p>
              </div>
            </div>
            <div className='flex gap-7 mt-5 md:mt-10 justify-between md:justify-normal w-[50%] mx-auto md:w-full'>
                <FaFacebook size={35} className='rounded-full bg-gray-50 text-red-600 p-1 hover:text-black hover:scale-105 cursor-pointer'/>
                <FaGoogle size={35} className='rounded-full bg-gray-50 text-red-600 p-1 hover:text-black  hover:scale-105 cursor-pointer'/>
                <FaInstagram size={35} className='rounded-full bg-gray-50 text-red-600 p-1 hover:text-black hover:scale-105 cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden block md:bottom-4 lg:bottom-8 text-gray-200 font-poppins p-5'>
        <p className='text-wrap xl:w-[700px] md:text-[16px] text-sm 2xl:w-[800px]'>The best place to buy Laptops, Computers & Accessories. Personal Computers, Laptop Computers, Computer Accessories, Network Products, Repairs</p>
      </div>
      <div className='w-full h-[80px] sm:h-[70px] bg-white border-red-600 border-2'>
        <div className='w-[90%] md:w-[80%] sm:h-full flex mx-auto items-center justify-between'> 
          <h1 className='text-3xl md:text-4xl mt-1 sm:mt-0 font-bold text-red-600 cursor-pointer'>SENƎX</h1>
          <p className='sm:block hidden font-poppins text-xs md:text-[16px] '>Copyright © <span className='font-semibold'>Exesmart</span> - All rights Reserved</p>
          <img src={paymentPic} alt="" className='border w-[100px] md:w-[150px]' />
        </div>
        <p className='sm:hidden text-center mt-2 font-poppins text-xs md:text-[16px] '>Copyright © <span className='font-semibold'>Exesmart</span> - All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer