import React from 'react'
import computer from "../Assets/Images/computer.webp"
import { Link } from 'react-router-dom'

const HomeCategories = () => {
  return (
    <div className='w-[95%] h-full relative border-red-500 rounded-xl mx-auto justify-center items-center flex '>
        <div className='w-full'>
            <p className='flex justify-center uppercase text-sm font-semibold text-white mt-5 font-mono'>Products</p>
            <h1 className='text-3xl lg:text-4xl flex justify-center text-white font-bold font-poppins'>SHOP BY CATEGORY</h1>
            <div className=' w-[90%] lg:w-[80%] rounded-xl mx-auto mt-7 gap-6 md:gap-7 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center '>
                {/* Cards */}
                <div className='mx-auto w-[95%] lg:w-[95%] xl:w-[80%] border-2 h-full relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-lg sm:text-xl md:text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            COMPUTERS
                        </button>
                    </Link>
                </div>
                <div className='mx-auto w-[95%] lg:w-[95%] xl:w-[80%] border-2 h-full relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-lg sm:text-xl md:text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            MONITORS
                        </button>
                    </Link>
                </div>
                <div className='mx-auto w-[95%] lg:w-[95%] xl:w-[80%] border-2 h-full relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-lg sm:text-xl md:text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            ACCESSORIES
                        </button>
                    </Link>
                </div>
                <div className='mx-auto w-[95%] lg:w-[95%] xl:w-[80%] border-2 h-full relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-lg sm:text-xl md:text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            USED PARTS
                        </button>
                    </Link>
                </div>
                <div className='mx-auto w-[95%] lg:w-[95%] xl:w-[80%] border-2 h-full relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-lg sm:text-xl md:text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            CAMERAS
                        </button>
                    </Link>
                </div>
                <div className='mx-auto w-[95%] lg:w-[95%] xl:w-[80%] border-2 h-full relative bg-black rounded-xl hover:scale-105 active:scale-100 duration-300'>
                    <img className='w-full h-full object-cover rounded-xl' src={computer} alt="" />
                    <Link>
                        <button className='absolute text-white text-lg sm:text-xl md:text-2xl font-semibold inset-0 bg-black/30 rounded-xl font-poppins'>
                            OTHERS
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HomeCategories