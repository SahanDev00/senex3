import React, { useContext } from 'react'
import HeroPic from "../Assets/Images/Hero.webp"
import Searchbar2 from "../Components/Searchbar2"
import { SearchContext } from '../SearchContext';
import { Link } from 'react-router-dom';

const Hero = () => {

  const { setSearchQuery } = useContext(SearchContext);

  return (
    <div className='w-full h-[400px] sm:h-[600px] md:h-full mx-auto relative mb-14'>
    <div className='w-[95%] md:w-[85%]  xl:h-[85vh] mt-3 mb-5 flex mx-auto'>
        <div className='md:mt-[90px] z-10 sm:mt-[60px] mt-[50px] lg:mt-[10vh] xl:mt-[20vh] w-full float-up ml-6 sm:ml-10'>
          <h1 className='text-5xl lg:text-7xl font-bold text-red-600 drop-shadow-md cursor-default font-poppins'>SENƎX</h1>
          <p className='text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed text-white drop-shadow-xl font-poppins'>Welcome to our online store, where we provide high quality merchandise at unbeatable prices. Our customer service is unmatched, and that we stock all the newest and greatest items on store.</p>
          <Searchbar2 onSearch={setSearchQuery} products={[]}/>
          <Link to='/product'>
            <button className='md:px-6 md:py-3 px-4 py-2 text-xs md:text-[16px] font-poppins rounded-full mt-7 text-white font-semibold bg-red-600 border-white border-2 hover:scale-105 duration-300 hover:shadow-md active:scale-95'>SHOP NOW</button>
          </Link>
        </div>
        <div className='absolute mt-10 md:mt-0 md:relative md:flex mx-auto items-center opacity-50 md:opacity-100'>
          <img className='w-[590px] md:bg-transparent bg-black/30 md:w-[700px] lg:w-[900px] xl:w-[1100px] md:ml-10 md:float-to-right z-10 drop-shadow' src={HeroPic} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Hero