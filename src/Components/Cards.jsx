import React from 'react'
import pic from "../Assets/Images/laptop.webp"
import pic2 from "../Assets/Images/computer.webp"
import pic3 from "../Assets/Images/monitor.webp"

const Cards = () => {
  return (
    /* Special Offers */
    <div className=' w-[90%] sm:w-[90%] mx-auto md:mx-0 md:w-[97%] lg:w-[95%] lxl:w-[87%] mxl:w-[95%] 2xl:w-[90%] grid-cols-1 grid lg:grid-cols-3 items-center mt-12 gap-4 sm:mt-16 lg:mt-12'>
        <div className=' w-[330px] xs:w-[370px] sm:w-[550px] ssm:w-[480px] md:w-[650px] lg:w-[220px] xl:w-[300px] 2xl:w-[435px] rounded-2xl mx-auto'>
            <div className='relative w-full rounded-2xl h-[150px] xs:h-[170px] sm:h-[250px] lg:h-[200px] xl:h-[200px] mxl:h-[200px] 2xl:h-[260px] flex items-center bg-white'>
                <img className='pt-2 h-full mx-auto object-cover rounded-xl hover:scale-105' src={pic} alt="" />
                <button className='absolute w-full font-poppins h-full bg-black/50  border-2 rounded-lg font-bold text-white sm:text-xl text-lg lg:text-2xl xl:text-3xl hover:scale-105 duration-300 ease-in-out hover:shadow-lg'>SPECIAL OFFERS</button>
            </div>
        </div>

        {/* New Arrivals */}
        <div className='w-[330px] xs:w-[370px] sm:w-[550px] ssm:w-[480px] md:w-[650px] lg:w-[210px] xl:w-[250px] 2xl:w-[435px] mx-auto'>
            <div className='relative w-full rounded-lg h-[150px] xs:h-[170px] sm:h-[250px] lg:h-[200px] xl:h-[200px] mxl:h-[200px] 2xl:h-[260px] flex items-center bg-white'>
                <img className='pt-2 h-full mx-auto object-cover rounded-lg' src={pic2} alt="" />
                <button className='absolute w-full font-poppins h-full bg-black/50 rounded-lg font-bold text-white border-2 sm:text-xl text-lg lg:text-2xl xl:text-3xl hover:scale-105 duration-300 ease-in-out hover:shadow-lg'>NEW ARRIVALS</button>
            </div>
        </div>
        
        {/* Featured */}
        <div className='w-[330px] xs:w-[370px] sm:w-[550px] ssm:w-[480px] md:w-[650px] lg:w-[220px] xl:w-[300px] 2xl:w-[435px] rounded-2xl mx-auto'>
            <div className='relative w-full rounded-lg h-[150px] xs:h-[170px] sm:h-[250px] lg:h-[200px] xl:h-[200px] mxl:h-[200px] 2xl:h-[260px] flex items-center bg-white'>
                <img className='pt-2 h-full mx-auto object-cover' src={pic3} alt="" />
                <button className='absolute w-full font-poppins h-full bg-black/50 rounded-lg font-bold text-white border-2 sm:text-xl text-lg lg:text-2xl xl:text-3xl hover:scale-105 duration-300 ease-in-out hover:shadow-lg'>FEATURED</button>
            </div>
        </div>
    </div>
  )
}

export default Cards