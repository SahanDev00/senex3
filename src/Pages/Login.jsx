import React, { useEffect, useState } from 'react';
import loginPic from '../Assets/Images/login.webp';
import signUpPic from '../Assets/Images/signup.webp';
import Countries from '../Components/Countries';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie for handling cookies

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to track whether it's login or sign-up view
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    salutation: 'Mr.',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    mobile: '',
    confirmPassword: '',
    rememberMe: false, // New field
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    city: '',
    state: '',
    postalCode: '',
    mobile: '',
    // Add other fields as necessary
  });

  // Validate fields before submitting
const validateForm = () => {
  let newErrors = {};
  
  // Email validation
  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email address is invalid';
  }

  // Password validation
  if (!formData.password) {
    newErrors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  // Confirm password validation
  if (formData.confirmPassword !== formData.password) {
    newErrors.confirmPassword = 'Passwords do not match';
  }

  // First name validation
  if (!formData.firstName) {
    newErrors.firstName = 'First name is required';
  }

  // Last name validation
  if (!formData.lastName) {
    newErrors.lastName = 'Last name is required';
  }

  // Address Line 1 validation
  if (!formData.addressLine1) {
    newErrors.addressLine1 = 'Address Line 1 is required';
  }

  // City validation
  if (!formData.city) {
    newErrors.city = 'City is required';
  }

  // State validation
  if (!formData.state) {
    newErrors.state = 'State is required';
  }

  // Postal code validation
  if (!formData.postalCode) {
    newErrors.postalCode = 'Postal code is required';
  } else if (!/^\d+$/.test(formData.postalCode)) {
    newErrors.postalCode = 'Postal code must be a number';
  }

  // Mobile number validation
  if (!formData.mobile) {
    newErrors.mobile = 'Mobile number is required';
  } else if (!/^\+\d{10,15}$/.test(formData.mobile)) {
    newErrors.mobile = 'Mobile number must start with "+" and be between 10 to 15 digits long.';
  }

  setErrors(newErrors);

  // If no errors, return true
  return Object.keys(newErrors).length === 0;
};

  const handleSwitch = () => {
    setIsLogin(!isLogin); // Toggle the state between login and sign-up
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle checkbox/radio button differently
    const updatedValue = type === 'checkbox' ? checked : value;
  
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = process.env.REACT_APP_API_URL;
    const apiURL = `${api}/api/customer`; // Adjust the URL as necessary

    if (validateForm()) {
    let dataToSubmit = {
        customerID: "", // Assuming this will be generated on the backend if left empty
        facebookID: formData.facebookID || "", // Default or from form data
        googleID: formData.googleID || "", // Default or from form data
        customerCategoryID: formData.customerCategoryID || "0000", // Default category ID
        customerGroupID: formData.customerGroupID || "", // Optional, handle accordingly
        priceType: formData.priceType || "RT", // Default or from form data
        loginEmail: formData.email,
        loginPassword: formData.password,
        salutation: formData.salutation,
        firstName: formData.firstName,
        middleName: formData.middleName || "", // Optional middle name
        lastName: formData.lastName,
        companyName: formData.companyName || "", // Optional company name
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2 || "", // Optional address line 2
        city: formData.city,
        state: formData.state || "", // Optional state
        postalCode: formData.postalCode || "", // Optional postal code
        country: formData.country || "Sri Lanka", // Default country if not provided
        telephoneMobile: formData.mobile,
        telephoneOther: formData.telephoneOther || "", // Optional telephone number
        shipAway: formData.shipAway ? "Y" : "N", // Handling shipping address, default "N"
        shipAttTo: `${formData.firstName} ${formData.lastName}`, // Default shipping attention to full name
        shipAddressLine1: formData.shipAddressLine1 || formData.addressLine1, // Default to same as billing if not provided
        shipAddressLine2: formData.shipAddressLine2 || formData.addressLine2, // Optional shipping address line 2
        shipCity: formData.shipCity || formData.city, // Default to same city as billing
        shipState: formData.shipState || formData.state, // Default to same state as billing
        shipPostalCode: formData.shipPostalCode || formData.postalCode, // Default to same postal code as billing
        shipCountry: formData.shipCountry || formData.country, // Default to same country as billing
        remarks: formData.remarks || "", // Optional remarks
        createdDate: new Date().toISOString(), // Current date
        activeStatus: "A", // Default active status
        checkLoginData: isLogin ? 1 : 0, // 1 for login, 0 for signup
        returnURL: formData.returnURL || "/Customer/Index", // Default or provided return URL
        customerCategoryName: formData.customerCategoryName || "", // Optional category name
        customerGroupName: formData.customerGroupName || "", // Optional group name
        confirmPassword: formData.confirmPassword,
        oldPassword: formData.confirmPassword || "", // Handle old password as needed
        checkTermsandCondition: formData.checkTermsandCondition || false, // Handle terms and conditions
        useAuthentication: true, // Assuming authentication is used
        shipAwayBool: formData.shipAway || false, // Boolean for shipping away
        activeStatusBool: formData.activeStatusBool || true // Boolean for active status
    };
  
    
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'APIKey': apiKey,
        },
        body: JSON.stringify(dataToSubmit),
      });
    
      const result = await response.json();
    

      if (response.ok) {
        const customerDetails = {
          customerID: result.data.customerID,
          email: result.data.loginEmail,
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          // Add any other relevant fields
        };
        if (result.success) {
          sessionStorage.setItem('customerDetails', JSON.stringify(customerDetails));
          navigate('/')
        }
        setErrorMessage(result.errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const api = process.env.REACT_APP_API_URL;
    const apiURL = `${api}/api/Customer/GetByEmail?EmailAddress=${encodeURIComponent(formData.email)}`;

    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      
      // Step 1: Check if the email exists
      const emailCheckResponse = await fetch(apiURL, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          'APIKey': apiKey,
        },
      });

      const emailCheckResult = await emailCheckResponse.json();

      if (emailCheckResponse.ok && emailCheckResult.success) {
        const customerData = emailCheckResult.data;

        // Step 2: Check if the entered password matches
        const enteredPassword = formData.password;
        const storedPassword = customerData.loginPassword;

        if (storedPassword === enteredPassword) {

          // Step 3: Store customer data in session storage or cookie
          const customerDetails = {
            customerID: customerData.customerID,
            email: customerData.loginEmail,
            firstName: customerData.firstName,
            lastName: customerData.lastName,
            // Add any other relevant fields
          };

          if (formData.rememberMe) {
            // Store in cookie with 30-day expiration
            Cookies.set('customerDetails', JSON.stringify(customerDetails), { expires: 30 });
          } else {
            // Store in session storage for the current session
            sessionStorage.setItem('customerDetails', JSON.stringify(customerDetails));
          }

          // Handle successful login (e.g., redirect user, update UI, etc.)
          navigate('/'); // Redirect to the homepage or any other page you want
        } else {
          setErrorMessage('Password does not match');
          // Show error message to the user
        }
      } else {
        setErrorMessage('Email not found');
        // Show an error message that the email doesn't exist
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Check for customer details in cookies or session storage
    const customerDetails = Cookies.get('customerDetails') 
      ? JSON.parse(Cookies.get('customerDetails')) 
      : JSON.parse(sessionStorage.getItem('customerDetails'));
  
    if (customerDetails) {
      // Handle auto-login or redirect based on customer data
      navigate('/')
    }
  }, [navigate]);
  
  

  return (
    <div className={`w-full relative flex items-center py-5 ${isLogin ? 'h-[70vh] sm:h-[95vh] md:h-[85vh] lg:h-[95vh]' : ''}`}>
      <Helmet><title>SENEX | Account Center</title></Helmet>
      <div className={`h-full flex mx-auto items-center  rounded-3xl ${isLogin ? 'w-[90%] lg:w-[70%] ' : 'w-[90%] xl:w-[80%]'} `}>
        {isLogin ? (
          // Login
          <div className='w-full h-[450px] md:h-[550px] items-center md:grid grid-cols-2'>
            <div className='md:bg-white h-full flex flex-col justify-center rounded-l-3xl'>
              <h1 className='text-2xl md:text-4xl font-bold text-red-600 cursor-pointer text-center'>SENƎX</h1>
              <h1 className='text-3xl md:text-5xl font-semibold text-white md:text-black mt-2 ml-5 text-center'>WELCOME BACK !!!</h1>
              <p className='text-gray-300 md:text-gray-800 font-semibold text-center mt-2'>Please enter your details...</p>
              <form className='mt-3 md:mt-5'>
                <label className='font-semibold ml-5 md:ml-16 text-white md:text-black'>Email</label>
                <input className='block w-[95%] md:w-[80%] mx-auto rounded-lg pl-4 py-2 border-red-500 border-2 mb-2 mt-1' name="email"
                  value={formData.email}
                  type="email" placeholder='example@gmail.com' onChange={handleChange}  required />
                <label className='font-semibold ml-5 md:ml-16 text-white md:text-black'>Password</label>
                <input className='block w-[95%] md:w-[80%] mx-auto rounded-lg pl-4 py-2 border-red-500 border-2 mb-3 mt-1'
                name="password"
                value={formData.password}
                onChange={handleChange}
                 type="password" placeholder='••••••••' required />
                 {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                     <label className='ml-12'>
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />
                        Remember Me
                      </label>
                <button onClick={handleLoginSubmit} className='block mt-2 w-[95%] md:w-[80%] mx-auto rounded-lg bg-red-500 py-2 text-white font-semibold hover:bg-red-600'>Login</button>
              </form>
              <p className='text-center mt-3 font-semibold text-gray-400 md:text-gray-600'>Haven't registered yet? <span className='text-red-500 font-bold cursor-pointer hover:text-red-600' onClick={handleSwitch}>Sign Up</span></p>
            </div>
            <div className='w-full h-full bg-black rounded-3xl md:block hidden'>
              <img src={loginPic} alt="Login" className='w-full h-full object-cover rounded-r-3xl' />
            </div>
          </div>
        ) : (
          // Sign Up
          <div className='w-full min-h-[800px] md:min-h-[1000px] xl:min-h-[850px] rounded-3xl md:bg-white items-center md:grid grid-cols-2'>
            <div className='w-full h-full rounded-3xl bg-black md:block hidden'>
              <img src={signUpPic} alt="Sign Up" className='w-full h-full object-cover rounded-l-3xl' />
            </div>
            <div className='w-full py-3'>
              <h1 className='text-xl font-bold text-red-600 cursor-pointer text-center'>SENƎX</h1>
              <h1 className='text-2xl font-semibold text-center text-white md:text-black'>SIGN UP !</h1>
              <p className='text-gray-300 md:text-gray-800 font-semibold text-center'>Please enter your details...</p>
              <form className='mt-3 w-full'>
                <div className='lg:flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>First Name</label>
                    <div className='flex flex-row-reverse items-center gap-1'>
                      <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1'
                                              name="firstName"
                                              value={formData.firstName}
                                              onChange={handleChange}
                                              type="text" placeholder='Adam' required />
                      <select name="salutation" value={formData.salutation} onChange={handleChange} id="" className='border-red-500 border-2 py-1 mb-2 mt-1 rounded-lg'>
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
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>Last Name</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text" placeholder='Nester' required />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                  </div>
                </div>
                <div className='lg:flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>Address Line 1</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    type="text" placeholder='' required />
                    {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1}</p>}
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>Address Line 2</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                    type="text" placeholder='' required />
                  </div>
                </div>
                <div className='flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>City</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    type="text" placeholder='' required />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                  </div>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>State</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    type="text" placeholder='' required />
                    {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                  </div>
                </div>
                <div className='flex gap-4 w-[98%] md:w-[80%] mx-auto'>
                  <div className='w-full'>
                    <label className='font-semibold text-sm text-white md:text-black'>Postal Code</label>
                    <input className='block w-full mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    type="number" placeholder='' required />
                    {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
                  </div>
                  <div className='w-full'>
                    <Countries 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label className='font-semibold text-sm ml-7 md:ml-16 text-white md:text-black'>Mobile Number</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1'
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    type="text" placeholder='+94712345678' required />
                                    {errors.mobile && <p className="text-red-500 text-sm text-center">{errors.mobile}</p>}
                <label className='font-semibold text-sm ml-7 md:ml-16 text-white md:text-black'>Email</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email" placeholder='example@gmail.com' required />
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                {errors.email && <p className="text-red-500 text-sm text-center">{errors.email}</p>}
                <label className='font-semibold text-sm ml-7 md:ml-16 text-white md:text-black'>Password</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' 
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password" placeholder='••••••••' required />
                {errors.password && <p className="text-red-500 text-sm text-center">{errors.password}</p>}
                <label className='font-semibold text-sm ml-7 md:ml-16 text-white md:text-black'>Confirm Password</label>
                <input className='block w-[98%] md:w-[80%] mx-auto rounded-lg pl-4 py-1 border-red-500 border-2 mb-5 mt-1' 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password" placeholder='••••••••' required />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                  <button disabled={formData.password !== formData.confirmPassword} onClick={handleSubmit} className={`block w-[98%] md:w-[80%] mx-auto rounded-lg py-1 text-white font-semibold hover:bg-red-600 ${
                    formData.password === formData.confirmPassword ? 'bg-red-500' : 'bg-gray-400 cursor-not-allowed hover:bg-gray-400'
                  }`}>Sign Up</button>
              </form>
              <p className='text-center mt-3 font-semibold text-gray-600'>Already a user? <span className='text-red-500 font-bold cursor-pointer hover:text-red-600' onClick={handleSwitch}>Login</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
