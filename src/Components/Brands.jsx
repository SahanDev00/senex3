import React from 'react';
import Slider from 'react-slick';
import pic from "../Assets/Images/1.png";
import pic2 from "../Assets/Images/2.png";
import pic3 from "../Assets/Images/3.png";
import pic4 from "../Assets/Images/4.png";
import pic5 from "../Assets/Images/5.png";
import pic6 from "../Assets/Images/6.png";
import pic7 from "../Assets/Images/7.png";

const Brands = () => {
  const logos = [
    { pic: pic },
    { pic: pic2 },
    { pic: pic3 },
    { pic: pic4 },
    { pic: pic5 },
    { pic: pic6 },
    { pic: pic7 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),

  };

  return (
    <div className='w-[80%] h-full mx-auto mt-32 relative'>
      <h1 className='text-4xl text-white font-semibold font-poppins text-center'>
        Brands <span className='text-red-600'>We Offer</span>
      </h1>
      <p className='font-semibold text-lg text-white mt-5 text-center'>
        Our diverse brand portfolio includes more than 25 globally recognized brands that are overseen by local as well as international consumers.
        <br /> We take pride in working with these prestigious brands that meet the diverse requirements of the end-users.
        <br /> Explore our brands portfolio below.
      </p>
      <div className='w-[95%] md:w-[70%] h-full mb-10 mx-auto'>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className='flex justify-center mx-auto w-full mt-2 '>
              <img src={logo.pic} className='w-[200px] h-[100px] object-contain mx-auto' alt={`Brand ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Brands;
