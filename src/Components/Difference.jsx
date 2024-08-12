import React from 'react'
import reviewPic from '../Assets/Images/review.jpg'
import servicePic from '../Assets/Images/Service.jpg'
import performancePic from '../Assets/Images/performance.jpg'
import starsPic from '../Assets/Images/stars.jpg'

const Difference = () => {
  return (
    <div className='w-[80%] h-full mx-auto relative mb-10 mt-24'>
        <h1 className='text-4xl font-poppins font-semibold text-white my-14 text-center'>THE SENEX <span className='text-red-600'>DIFFERENCE</span></h1>
        <div className='w-[80%] h-full flex items-center justify-between mx-auto'>
            <div className='w-[80%] h-full flex flex-col items-center justify-center mx-auto'>
                <img src={reviewPic} alt="" className='mb-3'/>
                <p className=' text-wrap text-white text-center mt-2 font-semibold'>Over 250,000<br/> Happy Users</p>
            </div>
            <div className='w-[80%] h-full flex flex-col items-center justify-center'>
                <img src={performancePic} alt="" className='mb-3'/>
                <p className=' text-wrap text-white text-center mt-2 font-semibold'>Maximum<br/> Performance</p>
            </div>
            <div className='w-[80%] h-full flex flex-col items-center justify-center'>
                <img src={starsPic} alt="" className='mb-3'/>
                <p className=' text-wrap text-white text-center mt-2 font-semibold'>Top Reviewed<br/> Custom PC Brand</p>
            </div>
            <div className='w-[80%] h-full flex flex-col items-center justify-center'>
                <img src={servicePic} alt="" className='mb-3'/>
                <p className='text-wrap text-white text-center mt-2 font-semibold'>Unbeatable<br/> Aftersales Service</p>
            </div>
        </div>

    </div>
  )
}

export default Difference