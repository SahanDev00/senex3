import React, { useEffect } from 'react'
import ComputerPic1 from "../Assets/Images/Computer1.webp"
import ComputerPic2 from "../Assets/Images/Computer2.webp"
import KeyboardPic from "../Assets/Images/keyboard.webp"
import HeadsetPic from "../Assets/Images/headset.webp"
import { Helmet } from 'react-helmet'


const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full lg:h-[740px] mxl:h-[740px] 2xl:h-[770px] md:h-[700px] h-[750px] sm:h-[600px] relative mx-auto '>
      <Helmet><title>SENEX | Computer Shop in Gampaha</title></Helmet>
      <div className='w-full h-full absolute z-10'>
        <div className='absolute mt-[120px] mxl:mt-[90px] 2xl:mt-[120px] md:mx-10'>
          <img className='w-[200px] md:w-[270px] lg:w-[380px] float-to-left hidden xl:block' src={ComputerPic1} alt="" />
          <img className='w-[200px] md:w-[270px] lg:w-[380px] mt-12 float-to-left hidden md:block' src={KeyboardPic} alt="" />
        </div>
        <div className='absolute mt-[120px] mxl:mt-[90px] 2xl:mt-[120px]  md:right-20'>
          <img className='w-[380px] float-to-right' src={ComputerPic2} alt="" />
          <img className='w-[200px] md:w-[270px] lg:w-[220px] mxl:w-[200px] 2xl:w-[220px] float-to-right mt-12 ml-10 hidden xl:block' src={HeadsetPic} alt="" />
        </div>
        <div className='w-full flex mx-auto mt-16 md:mt-20 lg:mt-28 xl:mt-32 mxl:mt-10 2xl:mt-32 bg-black/50 xl:bg-transparent relative'>
          <div className='mx-auto float-up w-[80%]'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold xl:mt-10 text-white drop-shadow-xl uppercase text-center'>About Us</h1>
            <p className='mt-5 lg:mt-10 text-white font-semibold drop-shadow-xl leading-loose text-center'>Welcome to our online store, where we provide high quality merchandise at unbeatable prices.<br/>Our customer service is unmatched, and that we stock all the newest and greatest items on store.</p>
            <p className='mt-5 lg:mt-10 text-white font-semibold drop-shadow-xl leading-loose text-center'>We are a well renowned store in providing wholesale & retail products that has continually featured <br/> a variety of high quality and affordable products since day one.</p>
            <p className='mt-5 lg:mt-10 text-white font-semibold drop-shadow-xl leading-loose text-center'>Our passion for excellence has driven us from the beginning, and continues to drive us in the future creating<br/> a line perfect for individuals. The team at Microsis knows that every product counts, and strives to make the entire<br/> shopping experience as rewarding and fun as possible.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About