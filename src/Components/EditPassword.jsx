import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

const EditPassword = () => {
  const [currentPassword, setCurrentPassword] = useState(''); // Input for current password
  const [newPassword, setNewPassword] = useState(''); // Input for new password
  const [confirmNewPassword, setConfirmNewPassword] = useState(''); // Input for confirming new password
  const [loginPassword, setLoginPassword] = useState(''); // Fetched password from API

  // Fetch loginPassword when component mounts
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch('https://extremeadmin.worldpos.biz/api/Customer/CUS_00009', {
      headers: {
        'APIKey': apiKey,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.success && data.data) {
          setLoginPassword(data.data.loginPassword);
        }
      })
      .catch(error => {
        console.error('Error fetching current password:', error); 
        alert('Failed to fetch current password.');
      });
  }, []);

  // Handle password change form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_API_KEY;

    // Check if entered current password matches the fetched loginPassword
    if (currentPassword === loginPassword) {
      // Check if new password and confirm password match
      if (newPassword === confirmNewPassword) {
        // Call API to change the password with GET method and query parameters
        fetch(`https://extremeadmin.worldpos.biz/api/Customer/EditPassword?CustomerID=CUS_00009&LoginPassword=${encodeURIComponent(newPassword)}`, {
          method: 'PUT',
          headers: {
            'APIKey': apiKey,
          },
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            alert('Password changed successfully!');
            window.location.reload(); // Refresh the page
          } else {
            alert('Failed to change password.');
          }
        })
        .catch(error => {
          console.error('Error changing password:', error);
          alert('Failed to change password.');
        });
      } else {
        alert('New password and confirm password do not match.');
      }
    } else {
      alert('Current password is incorrect.');
    }
  };

  return (
    <div className='container h-[450px] xl:h-[720px] relative mx-auto'>
      <Helmet><title>SENEX | Edit Password</title></Helmet>
      <h1 className='text-3xl text-white font-semibold text-center mt-16 mb-4 uppercase font-poppins'>Change Your Password</h1>
      <div className='w-full flex justify-center items-center'>
        <div className='w-full text-center mt-5'>
          <form onSubmit={handleSubmit}>
            <label className='block font-semibold mt-3 text-sm text-white font-poppins'>Current Password</label>
            <input
              className='w-[50%] rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1'
              type="password"
              placeholder='••••••••'
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />

            <label className='block font-semibold mt-3 text-sm text-white font-poppins'>New Password</label>
            <input
              className='w-[50%] rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1'
              type="password"
              placeholder='••••••••'
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <label className='font-semibold text-sm mt-3 text-white block font-poppins'>Confirm New Password</label>
            <input
              className='w-[50%] rounded-lg pl-4 py-1 border-red-500 border-2 mb-5 mt-1'
              type="password"
              placeholder='••••••••'
              required
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />

            <button type='submit' className='block w-[50%] mx-auto mt-2 rounded-lg bg-red-500 py-2 text-white font-semibold hover:bg-red-600'>Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPassword;
