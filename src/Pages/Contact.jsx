import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_2nmvxuu', // Your EmailJS service ID
      'template_7ccdwzy', // Your EmailJS template ID
      form.current,
      'iJLT9e20sQ1qsdX29' // Your EmailJS user ID
    )
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send message, please try again.');
    });
    
    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="flex w-full flex-col relative items-center mt-3 h-full">
      <Helmet><title>SENEX | Contact Us</title></Helmet>
      
      {/* Map */}
      <div className="w-full h-[823px]">
        <h1 className='text-3xl md:text-4xl text-white font-bold mt-9 text-center'>
          Welcome to <span className='text-4xl font-bold text-red-600 cursor-pointer'>SENƎX</span>
        </h1>
        <p className="text-lg mb-6 font-semibold text-white mt-2 text-center">Find us here:</p>
        <div className='flex justify-center float-up'>
          <iframe title='map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15837.232602223477!2d79.890112!3d7.0902333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f1ca7b5ee0dd%3A0x4d5d1bdf422f29f8!2sMICROSIS%20COMPUTER!5e0!3m2!1sen!2slk!4v1721362612424!5m2!1sen!2slk" 
            width="1850" 
            height="600" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Us */}
      <div className='h-full w-full relative mb-10 grid justify-center grid-cols-1 md:grid-cols-2 mt-6 sm:mt-10 md:mt-16'>
        {/* Form */}
        <div className='border-r-2'>
          <div className='mx-auto w-[80%]'>
            <h1 className='text-4xl font-bold mb-3 text-white underline '>Send Us a Message</h1>
            <form ref={form} onSubmit={sendEmail} className='space-y-5 mt-10'>
              <div>
                <input id="name" name="from_name" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' type="text" placeholder='Name' required />
              </div>
              <div>
                <input id="email" name="email" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' type="email" placeholder='Email' required />
              </div>
              <div>
                <input id="phone" name="number" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' type="number" placeholder='Phone Number' required />
              </div>
              <div>
                <textarea id="message" name="message" className='block w-full mt-1 p-2 border border-gray-300 rounded-md' placeholder='Message' rows="4" required></textarea>
              </div>
              <button type='submit' className='mt-4 px-4 py-2 bg-red-600 text-white font-semibold border duration-200 rounded-md w-[150px] hover:scale-105 active:scale-100'>Send Message</button>
            </form>
          </div>
        </div>

        {/* Details */}
        <div className='mt-16 md:mt-0'>
          <div className='mx-auto w-[80%]'>
            <h1 className='text-4xl font-bold mb-5 text-white underline'>Our Store</h1>
            <div className='w-full'>
              <div>
                <h1 className='text-white text-xl font-semibold'>Address</h1>
                <p className='text-white mt-2'>No 29 UC Shipping Complex<br/>Ja-Ela 11350<br/>Sri Lanka</p>
              </div>
              <div className='text-white mt-8 md:mt-4'>
                <h1 className='text-white text-xl font-semibold mb-2'>Customer Support</h1>
                <p>HotLine: 0777-300-288</p>
                <p>Showroom: 011-446-8500</p> 
                <p>Workshop: 011-467-3950 / 011-419-9941</p>
                <p>Email: msds.net@live.com</p>
              </div>
              <div className='text-white md:w-[50%] mt-8 md:mt-4'>
                <h1 className='text-white text-xl mb-2 font-semibold'>Hours of Operation</h1>
                <div className='flex items-center justify-between'>
                  <p>Monday</p>
                  <p>9.00 AM to 8.00 PM</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p>Tuesday</p>
                  <p>9.00 AM to 8.00 PM</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p>Wednesday</p>
                  <p>9.00 AM to 8.00 PM</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p>Thursday</p>
                  <p>9.00 AM to 8.00 PM</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p>Friday</p>
                  <p>9.00 AM to 8.00 PM</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p>Saturday</p>
                  <p>9.00 AM to 8.00 PM</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p>Sunday</p>
                  <p>9.00 AM to 8.00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
