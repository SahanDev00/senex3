import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    pauseOnHover: false,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    // Fetch slide banner data
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchSlides = async () => {
      try {
        const response = await fetch('https://senexadmin.worldpos.biz/Api/SlideBanner', {
          method: 'GET',
          headers: {
            'APIKey': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
          setSlides(result.data);
        } else {
          throw new Error('Unexpected response format.');
        }
      } catch (error) {
        setError(error.message || 'An error occurred');
      } 
    };

    fetchSlides();
  }, []); // Empty dependency array ensures this runs once on mount

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className=' mx-auto relative pt-28 mb-14'>
      <Slider {...settings} className='h-[25vh] md:h-[50vh] lg:h-[83vh]'>
        {slides.map((slide) => (
          <div key={slide.slideBannerID} className='w-full h-full flex items-center justify-center'>
            <div className='w-full h-[90vh] md:h-[50vh] lg:h-[78vh] mt-3 mb-5 flex mx-auto'>
              {/* <div className='md:mt-[90px] h-full z-10 sm:mt-[60px] mt-[50px] lg:mt-[10vh] xl:mt-[20vh] w-full float-up'>
                <h1 className='text-5xl lg:text-7xl font-bold text-red-600 drop-shadow-md cursor-default font-poppins'>
                  {slide.title}
                </h1>
                <p className='text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 leading-relaxed text-white drop-shadow-xl font-poppins'>
                  {slide.description}
                </p>
                <Link to={slide.buttonLink}>
                  <button className='md:px-6 md:py-3 px-4 py-2 text-xs md:text-[16px] font-poppins rounded-full mt-7 text-white font-semibold bg-red-600 border-white border-2 hover:scale-105 duration-300 hover:shadow-md active:scale-95'>
                    {slide.buttonName}
                  </button>
                </Link>
              </div> */ }
                <div className='absolute lg:mt-10 md:relative md:flex mx-auto items-center '>
                  <Link to='/product'>
                      <img className='md:bg-transparent bg-black/30 w-screen  object-contain lg:object-cover  md:h-[80vh] lg:mt-7 md:float-to-right z-10 drop-shadow' src={`https://senexadmin.worldpos.biz/Uploads/${slide.slideBannerID}.jpg`} alt={slide.title} />
                  </Link>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
