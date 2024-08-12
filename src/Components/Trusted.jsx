import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import Slider from 'react-slick';
import customerPic from "../Assets/Images/customer.png"

const Trusted = () => {
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);

  const toggleTestimonials = () => {
    setIsTestimonialsVisible(!isTestimonialsVisible);
  };

  const testimonials = [
    { text: "Great service!", author: "John Doe", pic: customerPic },
    { text: "Highly recommend.", author: "Jane Smith", pic: customerPic },
    { text: "Outstanding experience.", author: "Mark Wilson", pic: customerPic },
    // Add more testimonials as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='w-[80%] h-full mx-auto mt-24 mb-20'>
      <h1 className='text-white text-2xl text-center font-poppins font-semibold mb-2'>TRUSTED BY</h1>
      <div className='w-full bg-red-600 rounded h-[10px]'>
        <div 
          className='mx-auto w-[100px] h-[25px] rounded bg-red-600 flex items-center justify-center cursor-pointer'
          onClick={toggleTestimonials}
        >
          <IoMdArrowDropdown size={30} className={`text-white transition-transform duration-300 ${isTestimonialsVisible ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Collapsible Testimonials Section */}
      {isTestimonialsVisible && (
        <div className='w-[60%] mt-10 mx-auto'>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='text-white text-center p-4'>
                <img src={testimonial.pic} className='w-[70px] mx-auto' alt="" />
                <p className='text-xl mb-2'>"{testimonial.text}"</p>
                <p className='text-lg font-semibold'>- {testimonial.author}</p>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Trusted;
