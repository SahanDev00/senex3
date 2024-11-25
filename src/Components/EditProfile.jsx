import React, { useEffect, useState } from 'react';
import Countries from '../Components/Countries';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie'; 

const EditProfile = () => {
  const [customerId, setCustomerId] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Retrieve customer ID from cookies or session storage
    const customerDetails = Cookies.get('customerDetails') || sessionStorage.getItem('customerDetails');
    if (customerDetails) {
      const parsedDetails = JSON.parse(customerDetails);
      setCustomerId(parsedDetails.customerID);
    }
  }, []);

  const [formData, setFormData] = useState({
    salutation: 'Mr.',
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    mobile: '',
    email: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Fetch customer details if customerId is set
    if (customerId) {
      const fetchCustomerData = async () => {
        try {
          const response = await fetch(`https://extremeadmin.worldpos.biz/api/Customer/${customerId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'APIKey': process.env.REACT_APP_API_KEY, // Ensure API Key is available
            },
          });
          const responseData = await response.json();

          if (response.ok) {
            const { data } = responseData;
            setFormData({
              salutation: data.salutation || 'Mr.',
              firstName: data.firstName || '',
              lastName: data.lastName || '',
              addressLine1: data.addressLine1 || '',
              addressLine2: data.addressLine2 || '',
              city: data.city || '',
              state: data.state || '',
              postalCode: data.postalCode || '',
              country: data.country || '',
              mobile: data.telephoneMobile || '',
              email: data.loginEmail || '',
              password: data.loginPassword,
              oldPassword: data.oldPassword
            });
          } else {
            alert('Failed to fetch customer details. ' + responseData.errorMessage); // Display detailed error message
          }
        } catch (error) {
          alert('An error occurred while fetching customer details.');
        }
      };

      fetchCustomerData();
    }
  }, [customerId]);

  const validateForm = () => {
    let formErrors = {};
    const { firstName, lastName, addressLine1, city, state, postalCode, country, mobile, email } = formData;

    if (!firstName) formErrors.firstName = 'First name is required.';
    if (!lastName) formErrors.lastName = 'Last name is required.';
    if (!addressLine1) formErrors.addressLine1 = 'Address Line 1 is required.';
    if (!city) formErrors.city = 'City is required.';
    if (!state) formErrors.state = 'State is required.';
    if (!postalCode || isNaN(postalCode)) formErrors.postalCode = 'Valid postal code is required.';
    if (!country) formErrors.country = 'Country is required.';
    if (!mobile || !/^\+\d{10,15}$/.test(mobile)) formErrors.mobile = 'Mobile number must start with "+" and be between 10 to 15 digits long.';
    if (!email || !/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Valid email is required.';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    const customerData = {
      customerID: customerId,  
      facebookID: "",
      googleID: "",
      customerCategoryID: "0000",
      customerGroupID: "string",
      priceType: "string",
      loginEmail: formData.email,
      loginPassword: formData.password,
      salutation: formData.salutation,
      firstName: formData.firstName,
      middleName: "",
      lastName: formData.lastName,
      companyName: "",
      addressLine1: formData.addressLine1,
      addressLine2: formData.addressLine2,
      city: formData.city,
      state: formData.state,
      postalCode: formData.postalCode,
      country: formData.country,
      telephoneMobile: formData.mobile,
      telephoneOther: "",
      shipAway: "",
      shipAttTo: formData.addressLine1,
      shipAddressLine1: formData.addressLine1,
      shipAddressLine2: "",
      shipCity: formData.city,
      shipState: "",
      shipPostalCode: "",
      shipCountry: formData.country,
      remarks: "",
      createdDate: new Date().toISOString(),
      activeStatus: "string",
      checkLoginData: 0,
      returnURL: "string",
      customerCategoryName: "string",
      customerGroupName: "string",
      confirmPassword: formData.password,
      oldPassword: formData.password,
      checkTermsandCondition: true,
      useAuthentication: true,
      shipAwayBool: true,
      activeStatusBool: true,
    };

    try {
      const response = await fetch('https://extremeadmin.worldpos.biz/api/Customer', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'APIKey': process.env.REACT_APP_API_KEY, // Ensure API Key is available
        },
        body: JSON.stringify(customerData),
      });

      const responseData = await response.json();

      if (response.ok) {
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile. ' + responseData.message); // Display detailed error message
      }
    } catch (error) {
      alert('An error occurred while updating the profile.');
    }
  };



  return (
    <div className='relative xl:h-[890px] container xl:pt-36 mx-auto'>
      <Helmet><title>SENEX | Edit Profile</title></Helmet>
      <div>
        <h1 className='text-3xl text-white mt-5 font-bold text-center font-poppins'>Edit Your Details</h1>
        <form onSubmit={handleSubmit} className='mt-3 mb-10'>
          <div className='md:flex gap-4 w-[80%] mx-auto'>
            <div className='w-full'>
              <label className='font-semibold text-sm text-white font-poppins'>First Name</label>
              <div className='flex flex-row-reverse items-center gap-1'>
                <input 
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} 
                  type="text" 
                  placeholder='Adam' 
                  required
                />
                <select 
                  name="salutation" 
                  value={formData.salutation}
                  onChange={handleChange}
                  className='border-red-500 border-2 py-1 mb-2 mt-1 rounded-lg'
                >
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Miss.">Miss.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="M/s.">M/s.</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Prof.">Prof.</option>
                  <option value="Rev.">Rev.</option>
                </select>
              </div>
              {errors.firstName && <p className='text-red-500 text-xs'>{errors.firstName}</p>}
            </div>
            <div className='w-full'>
              <label className='font-semibold text-sm text-white font-poppins'>Last Name</label>
              <input 
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className={`block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                type="text" 
                placeholder='Nester' 
                required
                  
              />
               {errors.lastName && <p className='text-red-500 text-xs'>{errors.lastName}</p>}
            </div>
          </div>

          <div className='lg:flex gap-4 w-[80%] mx-auto'>
            <div className='w-full'>
              <label className='font-semibold text-sm text-white font-poppins'>Address Line 1</label>
              <input 
                name='addressLine1'
                value={formData.addressLine1}
                onChange={handleChange}
                className={`block w-full mx-auto rounded-lg pl-4 py-1 border-2 mb-2 mt-1 ${errors.addressLine1 ? 'border-red-500' : 'border-gray-300'}`} 
                type="text" 
                required
              />
               {errors.addressLine1 && <p className='text-red-500 text-xs'>{errors.addressLine1}</p>}
            </div>
            <div className='w-full'>
              <label className='font-semibold text-sm text-white font-poppins'>Address Line 2</label>
              <input 
                name='addressLine2'
                value={formData.addressLine2}
                onChange={handleChange}
                className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                type="text" 
      
              />
            </div>
          </div>

          <div className='flex gap-4 w-[80%] mx-auto'>
            <div className='w-full'>
              <label className='font-semibold text-sm text-white font-poppins'>City</label>
              <input 
                name='city'
                value={formData.city}
                onChange={handleChange}
                className={`block w-full mx-auto rounded-lg pl-4 py-1 border-2 mb-2 mt-1 ${errors.city ? 'border-red-500' : 'border-gray-300'}`} 
                type="text" 
                required
              />
              {errors.city && <p className='text-red-500 text-xs'>{errors.city}</p>}
            </div>
            <div className='w-full'>
              <label className='font-semibold text-sm text-white font-poppins'>State</label>
              <input 
                name='state'
                value={formData.state}
                onChange={handleChange}
                className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                type="text" 
                required
              />
            </div>
          </div>

          <div className='flex gap-4 w-[80%] mx-auto'>
            <div className='w-full'>
              <label className='font-semibold text-sm text-white font-poppins'>Postal Code</label>
              <input 
                name='postalCode'
                value={formData.postalCode}
                onChange={handleChange}
                className={`block w-full mx-auto rounded-lg pl-4 py-1 border-2 mb-2 mt-1 ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`} 
                type="number" 
                required
              />
               {errors.postalCode && <p className='text-red-500 text-xs'>{errors.postalCode}</p>}
            </div>
            <div className='w-full text-gray-500'>
              <Countries value={formData.country} onChange={handleChange}  name="country" />
            </div>
          </div>

          <div className='w-[80%] mx-auto'>
            <label className='font-semibold text-sm text-white font-poppins'>Mobile Number</label>
            <input 
              name='mobile'
              value={formData.mobile}
              onChange={handleChange}
              className={`block w-full mx-auto rounded-lg pl-4 py-1 border-2 mb-2 mt-1 ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`} 
              type="text" 
              placeholder='+94712345678' 
              required
            />
            {errors.mobile && <p className='text-red-500 text-xs'>{errors.mobile}</p>}
          </div>
                <div className='w-[80%] mx-auto'>
                  <label className='font-semibold text-sm text-white font-poppins'>Email</label>
                  <input
                  name='email'
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className={`block w-full mx-auto rounded-lg pl-4 py-1 border-2 mb-2 mt-1 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} type="email" placeholder='example@gmail.com'   />
                  {errors.email && <p className='text-red-500 text-xs'>{errors.email}</p>}
                </div>
                <button type='submit' className='block w-[80%] mx-auto rounded-lg bg-red-500 py-2 text-white font-semibold hover:bg-red-600'>Edit Profile</button>
              </form>
            </div>
    </div>
  )
}

export default EditProfile