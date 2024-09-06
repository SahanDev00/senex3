// src/components/FilterSection.js
import React from 'react';

const FilterSection2 = ({ subCategory }) => {
  return (
    <div className="w-[80%] h-full z-50 mt-4">
      <div className="w-[85%] h-[50px] border border-red-500 text-red-500 flex justify-between items-center px-4">
        <h1 className="uppercase font-semibold text-lg font-poppins">Filters</h1>
      </div>
      <div className="my-4 ml-3">
        <h2 className="text-lg font-semibold mb-2">{subCategory}</h2>
        <ul className='text-white'>
          <li className="mb-2 uppercase text-sm cursor-pointer">
            <label>
              <input type="checkbox" className="mr-2 font-poppins" /> Filter 
            </label>
          </li>
          <li className="mb-2 uppercase text-sm cursor-pointer">
            <label>
              <input type="checkbox" className="mr-2 font-poppins" /> Filter 2
            </label>
          </li>
          <li className="mb-2 uppercase text-sm cursor-pointer">
            <label>
              <input type="checkbox" className="mr-2 font-poppins" /> Filter 3
            </label>
          </li>
          {/* Add more filters as needed */}
        </ul>
      </div>
    </div>
  );
};

export default FilterSection2;
