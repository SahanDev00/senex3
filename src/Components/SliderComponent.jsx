import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroPic from '../Assets/Images/Hero.webp';
import subzero from '../Assets/Images/subzero.png';


const SliderComponent = () => {
  const details = [
    {
      text: 'Save up to 20%',
      heading: 'CATCH BIG',
      headingSpan: 'DEALS',
      Pic: HeroPic,
      btnText: 'CLAIM',
      btnColour: "#22c55e",
      textColour: "#22c55e"
    },
    {
      text: 'Save up to 50%',
      heading: 'SUPPER',
      headingSpan: 'SALE',
      Pic: subzero,
      btnText: 'BUY NOW',
      btnColour: "#1d4ed8",
      textColour: "#1d4ed8"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2790,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next)
  };

  return (
    <div className='mt-5 w-[330px] xxs:w-[370px] xs:w-[370px] mx-auto ml-5 lg:ml-0 mxl:ml-4 lxl:ml-0 2xl:ml-7 sm:ml-6 ssm:ml-7 md:ml-8 sm:w-[600px] ssm:w-[480px] md:w-[650px] lg:w-[710px] xl:w-[950px] mxl:w-[950px] 2xl:w-[1480px] 3xl:w-[1450px] h-[200px] sm:h-[400px] md:h-[260px] mxl:h-[250px] lg:h-[280px] xl:h-[240px] 2xl:h-[400px] font-poppins rounded-lg cursor-grab active:cursor-grabbing'>
      <Slider {...settings} className='w-full h-[200px] sm:h-[400px] md:h-[260px] mxl:h-[250px] xl:h-[240px] 2xl:h-[400px] lg:h-[280px]'>
          {details.map((detail, index) => (
            <div key={index}>
              <div className='absolute z-10 mt-10 sm:mt-24 md:mt-16 lg:mt-10 xl:mt-14 2xl:mt-14 mxl:mt-8 xl: ml-5 sm:ml-14 w-[350px]'>
                <p className={`font-semibold text-[19px] mxl:text-sm 2xl:text-[19px] ${currentSlide === index ? 'float-up' : ''}`} style={{ color: detail.textColour }}>{detail.text}</p>
                <h1 className={`text-2xl sm:text-6xl md:text-4xl lg:text-6xl xl:text-4xl mxl:text-5xl 2xl:text-7xl font-bold text-white drop-shadow-lg ${currentSlide === index ? 'float-to-right' : ''}`}>
                  {detail.heading} <span style={{ color: detail.textColour }}>{detail.headingSpan}</span>
                </h1>
                <button className={`sm:px-11 px-8 py-3 rounded-xl mt-4 text-sm sm:text-lg font-semibold text-white hover:scale-105 duration-300 active:scale-95 ${currentSlide === index ? 'float-up' : ''}`} style={{ backgroundColor: detail.btnColour }}>
                  {detail.btnText}
                </button>
              </div>
              <div className='w-full h-[200px] bg-black/30 sm:h-[400px] md:h-[260px] relative xl:h-[240px] mxl:h-[250px] lg:h-[280px] rounded-lg 2xl:h-[400px]'>
                  <img src={detail.Pic} alt="Banner" className=' right-0 h-full absolute rounded-lg' />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;
