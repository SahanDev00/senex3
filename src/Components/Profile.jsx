import React, { useState, useEffect } from 'react';
import { FaParachuteBox } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Fetch profile data from API
    const fetchProfileData = async () => {
      const api = process.env.REACT_APP_API_URL;
      const apiURL = `${api}/api/Customer/CUS_00009`; // Adjust with dynamic ID as necessary

      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(apiURL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'APIKey': apiKey,
          },
        });

        const result = await response.json();

        if (response.ok) {
          setProfileData(result.data);
        } else {
          console.error('Error fetching profile data:', result.errorMessage);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProfileData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>; // or a spinner/loading component
  }

  return (
    <div className='w-[90%] mx-auto relative font-poppins 2xl:h-[98vh]'>
      <Helmet><title>SENEX | Profile</title></Helmet>
      <h1 className='text-3xl md:text-4xl text-white font-bold text-center my-10 uppercase'>Personal Details</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
        <div className='w-full p-5 space-y-2 border-2 rounded-xl border-gray-400 bg-black/50 shadow-lg'>
          <h1 className='text-center text-white text-2xl font-bold mt-2 mb-6'>Personal Profile</h1>
          <p className='text-white text-lg'><span className='font-semibold'>Name:</span> {profileData.customerDisplay}</p>
          <p className='text-white text-lg'><span className='font-semibold'>Email:</span> {profileData.loginEmail}</p>
          <p className='text-white text-lg'><span className='font-semibold'>Telephone:</span> {profileData.telephoneMobile}</p>
        </div>
        <div className='w-full p-5 space-y-2 border-2 rounded-xl border-gray-400 bg-black/50 shadow-lg'>
          <h1 className='text-center text-white text-2xl font-bold mt-2 mb-6'>Default Billing Address</h1>
          <p className='font-semibold text-white text-lg'>{profileData.customerDisplay}</p>
          <p className='text-white text-wrap'>{profileData.addressDisplay}</p>
        </div>
        <div className='w-full p-5 space-y-2 border-2 rounded-xl border-gray-400 bg-black/50 shadow-lg'>
          <h1 className='text-center text-white text-2xl font-bold mt-2 mb-6'>Shipping Address</h1>
          <p className='font-semibold text-white text-lg'>{profileData.customerDisplay}</p>
          <p className='text-white text-wrap'>{profileData.addressDisplay}</p>
          <p className='text-white text-wrap'>{profileData.city}, {profileData.shipState}, {profileData.postalCode}</p>
          <p className='text-white text-wrap'>Phone: {profileData.telephoneMobile}</p>
          <p className='text-white text-wrap'>Country: {profileData.shipCountry}</p>
        </div>
      </div>
      <div className='grid space-y-5 sm:space-y-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-6 justify-evenly bg-black/60 rounded-lg border w-[90%] md:w-[70%] mx-auto my-14 '>
        <Link to='/orders' className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-red-500 text-white'>
          <FaParachuteBox size={25} />
          <h1>Orders</h1>
        </Link>
        <Link to='/edit-profile' className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-red-500 text-white'>
          <FaRegEdit size={25} />
          <h1>Edit Profile</h1>
        </Link>
        <Link to='/edit-password' className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-red-500 text-white'>
          <RiLockPasswordLine size={25} />
          <h1>Edit Password</h1>
        </Link>
        <div className='flex mx-auto items-center gap-2 font-semibold cursor-pointer hover:text-red-500 text-white'>
          <IoIosLogOut size={25} />
          <h1>Log Out</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
