import React from 'react'
//import centerPic from '../Assets/Center.png'
//import servicePic from '../Assets/service.png'
//import warrentyPic from '../Assets/warranty.png'
import { Link } from 'react-router-dom'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

const HomeCards = () => {
  return (
    <div className='w-[95%] sm:w-[90%] md:w-[95%] lg:w-[80%] xl:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 lg:gap-2 h-full mx-auto relative mt-32  '>
        <div className=' md:w-[90%] h-full m-4 bg-red-700'>
            <div className='w-full h-[150px] bg-gradient-to-b from-red-600 to-red-500 flex flex-col items-center justify-center'>
                <FaShieldAlt  className='text-white size-20 mb-1'/>
                <Link to='/our-policies'>
                    <p className='text-white uppercase font-semibold text-lg text-center font-poppins'>Warranty Assured</p>
                </Link>
            </div>
            <div className='w-full h-[100px] md:h-[190px] xl:h-[140px] flex items-center justify-center'>
                <p className='text-white/80 mx-5 text-center font-light text-sm sm:text-lg md:text-sm'>
                    In case of faulty products, we have a straightfoward warranty process that is easy to navigate.
                </p>
            </div>
        </div>
        <div className=' md:w-[90%] h-full m-4 bg-red-700'>
            <div className='w-full h-[150px] bg-gradient-to-b from-red-600 to-red-500 flex flex-col items-center justify-center'>
                <CiDeliveryTruck className='text-white size-20 mb-1'/>
                <Link to='/home-delivery'>
                    <p className='text-white uppercase font-semibold text-lg text-center font-poppins'>home delivery</p>
                </Link>
            </div>
            <div className='w-full h-[100px] md:h-[190px] xl:h-[140px] flex items-center justify-center'>
                <p className='text-white/80 mx-5 text-center font-light text-sm sm:text-lg md:text-sm'>
                    We are proud to say that we have successfully delivered to our valued customers all over the country. 
                </p>
            </div>
        </div>
        <div className=' md:w-[90%] h-full m-4 bg-red-700'>
            <div className='w-full h-[150px] bg-gradient-to-b from-red-600 to-red-500 flex flex-col items-center justify-center'>
                <GrServices className='text-white size-20 mb-1'/>
                <Link to='/service-center'>
                    <p className='text-white uppercase font-semibold text-lg text-center font-poppins'>Service center</p>
                </Link>
            </div>
            <div className='w-full h-[100px] md:h-[190px] xl:h-[140px] flex items-center justify-center'>
                <p className='text-white/80 mx-5 text-center font-light text-sm sm:text-lg md:text-sm'>
                    We offer onsite repair service to meet your requirements straight to where you live withing Colombo, Colombo Suburbs, Gampaha, and Gampaha Suburbs.
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default HomeCards