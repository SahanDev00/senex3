import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Searchbar2 = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length >= 2) {
      setError(''); // Clear the error if the query length is valid
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.length < 2) {
      setError('Please enter at least 2 characters.');
      return;
    }
    onSearch(searchQuery);
    navigate(`/product/search?q=${searchQuery}`);
  };

  return (
    <div className='w-[90%] mt-4 flex items-center h-[50px]'>
      <form onSubmit={handleSubmit} className='w-full h-full flex'>
        <input
          type='text'
          placeholder='Search a product...'
          value={searchQuery}
          onChange={handleChange}
          className='border w-full h-full pl-5 bg-white rounded-l-lg border-red-600'
        />
        <button type='submit' className='w-[50px] h-[50px] rounded-r-md bg-red-600 flex items-center hover:cursor-pointer'>
            <IoSearch size={25} className='mx-auto text-white' />
        </button>
      </form>
      {error && <p className="text-red-500 ml-52 absolute w-full ">{error}</p>}
    </div>
  );
};

export default Searchbar2;
