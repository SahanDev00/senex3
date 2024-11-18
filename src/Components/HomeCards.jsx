import React from 'react'
import centerPic from '../Assets/Center.png'
import servicePic from '../Assets/service.png'
import warrentyPic from '../Assets/warranty.png'

const HomeCards = () => {
  return (
    <div className='w-[95%] sm:w-[90%] md:w-[95%] lg:w-[80%] xl:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 lg:gap-5 h-full bg-neutral-800 mx-auto relative mt-32'>
        <div className=' md:w-[90%] h-full m-4'>
            <div className='w-full h-[150px] bg-gradient-to-b from-red-600 to-red-500 flex flex-col items-center justify-center'>
                <img src={warrentyPic} className='w-40' alt="" />
                <p className='text-white uppercase font-semibold text-lg text-center'>How to<br/> claim warranty</p>
            </div>
            <div className='w-full h-[100px] md:h-[190px] xl:h-[140px] bg-neutral-700 flex items-center justify-center'>
                <p className='text-white mx-5 text-center font-semibold text-sm sm:text-lg md:text-sm'>
                    In case of faulty products, we have a straightfoward warranty process that is easy to navigate.
                </p>
            </div>
        </div>
        <div className=' md:w-[90%] h-full m-4'>
            <div className='w-full h-[150px] bg-gradient-to-b from-red-600 to-red-500 flex flex-col items-center justify-center'>
                <img src={servicePic} className='w-40' alt="" />
                <p className='text-white uppercase font-semibold text-lg text-center'>How we<br/> deliever your product</p>
            </div>
            <div className='w-full h-[100px] md:h-[190px] xl:h-[140px] bg-neutral-700 flex items-center justify-center'>
                <p className='text-white mx-5 text-center font-semibold text-sm sm:text-lg md:text-sm'>
                    We are proud to say that we have successfully delivered to our valued customers all over the country. 
                </p>
            </div>
        </div>
        <div className=' md:w-[90%] h-full m-4'>
            <div className='w-full h-[150px] bg-gradient-to-b from-red-600 to-red-500 flex flex-col items-center justify-center'>
                <img src={centerPic} className='w-40' alt="" />
                <p className='text-white uppercase font-semibold text-lg text-center'>help</p>
            </div>
            <div className='w-full h-[100px] md:h-[190px] xl:h-[140px] bg-neutral-700 flex items-center justify-center'>
                <p className='text-white mx-5 text-center font-semibold text-sm sm:text-lg md:text-sm'>
                    We offer onsite repair service to meet your requirements straight to where you live withing Colombo, Colombo Suburbs, Gampaha, and Gampaha Suburbs.
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default HomeCards