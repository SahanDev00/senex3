import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";

const HomeCards = () => {
  return (
    <div className='w-[60%] flex h-full bg-neutral-800 mx-auto relative mt-32'>
        <div className=' w-full h-full m-4'>
            <div className='w-full h-[150px] bg-gradient-to-b from-red-600 to-red-500 flex flex-col items-center justify-center'>
                <CiDeliveryTruck className='text-white size-14'/>
                <p className='text-white uppercase font-semibold text-lg text-center'>How to<br/> claim warranty</p>
            </div>
            <div className='w-full h-[110px] bg-neutral-700 flex items-center justify-center'>
                <p className='text-white mx-5 text-center font-semibold text-sm'>
                    In case of faulty products, we have a straightfoward warranty process that is easy to navigate.
                </p>
            </div>
        </div>
        <div className=' w-full h-full m-4'>
            <div className='w-full h-[150px] bg-gradient-to-b from-red-600 to-red-500 flex flex-col items-center justify-center'>
                <CiDeliveryTruck className='text-white size-14'/>
                <p className='text-white uppercase font-semibold text-lg text-center'>How we<br/> deliever your product</p>
            </div>
            <div className='w-full h-[110px] bg-neutral-700 flex items-center justify-center'>
                <p className='text-white mx-5 text-center font-semibold text-sm'>
                    We are proud to say that we have successfully delivered to our valued customers all over the country. 
                </p>
            </div>
        </div>
        <div className=' w-full h-full m-4'>
            <div className='w-full h-[150px] bg-gradient-to-b from-red-600 to-red-500 flex flex-col items-center justify-center'>
                <CiDeliveryTruck className='text-white size-14'/>
                <p className='text-white uppercase font-semibold text-lg text-center'>help</p>
            </div>
            <div className='w-full h-[110px] bg-neutral-700 flex items-center justify-center'>
                <p className='text-white mx-5 text-center font-semibold text-sm'>
                    We offer onsite repair service to meet your requirements straight to where you live withing Colombo, Colombo Suburbs, Gampaha, and Gampaha Suburbs.
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default HomeCards