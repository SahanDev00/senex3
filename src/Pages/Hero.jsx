import React, { useContext } from 'react';
import Slider from 'react-slick';
import Searchbar2 from '../Components/Searchbar2';
import { SearchContext } from '../SearchContext';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroPic from '../Assets/Images/Hero.webp';

// Data array for slider
const sliderData = [
  {
    heading: 'SENƎX',
    paragraph: 'Welcome to our online store, where we provide high quality merchandise at unbeatable prices. Our customer service is unmatched, and that we stock all the newest and greatest items on store.',
    image: HeroPic,
  },
  {
    heading: 'SENƎX',
    paragraph: 'Welcome to our online store, where we provide high quality merchandise at unbeatable prices. Our customer service is unmatched, and that we stock all the newest and greatest items on store.',
    image: HeroPic,
  },
  {
    heading: 'SENƎX',
    paragraph: 'Welcome to our online store, where we provide high quality merchandise at unbeatable prices. Our customer service is unmatched, and that we stock all the newest and greatest items on store.',
    image: HeroPic,
  },

];

const Hero = () => {
  const { setSearchQuery } = useContext(SearchContext);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='w-[87%] md:w-[93%] mx-auto relative mb-14'>
      <Slider {...settings} className='h-full'>
        {sliderData.map((slide, index) => (
          <div key={index} className='w-full h-full flex items-center justify-center'>
            <div className='w-[95%] h-full lg:w-[90%] xl:h-[78vh] mt-3 mb-5 flex mx-auto'>
              <div className='md:mt-[90px] h-full z-10 sm:mt-[60px] mt-[50px] lg:mt-[10vh] xl:mt-[20vh] w-full float-up lg:ml-10'>
                <h1 className='text-5xl lg:text-7xl font-bold text-red-600 drop-shadow-md cursor-default font-poppins'>
                  {slide.heading}
                </h1>
                <p className='text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed text-white drop-shadow-xl font-poppins'>
                  {slide.paragraph}
                </p>
                <Searchbar2 onSearch={setSearchQuery} products={[]} />
                <Link to='/product'>
                  <button className='md:px-6 md:py-3 px-4 py-2 text-xs md:text-[16px] font-poppins rounded-full mt-7 text-white font-semibold bg-red-600 border-white border-2 hover:scale-105 duration-300 hover:shadow-md active:scale-95'>
                    SHOP NOW
                  </button>
                </Link>
              </div>
              <div className='absolute mt-10 md:mt-0 md:relative md:flex mx-auto items-center opacity-50 md:opacity-100'>
                <img className='w-[320px] md:bg-transparent bg-black/30 sm:w-[400px] md:w-[700px] lg:w-[900px] xl:w-[1100px] md:ml-10 md:float-to-right z-10 drop-shadow' src={slide.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
