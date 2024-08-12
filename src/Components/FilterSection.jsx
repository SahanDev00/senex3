// src/components/FilterSection.js
import React from 'react';

const FilterSection = ({ subCategory, onClose }) => {
  return (
    <div className="lg:w-[170px] xl:w-[200px] border-red-600 border mt-4 bg-white relative">
      <div className="w-full h-[50px] border bg-red-600 border-white flex justify-between items-center px-4">
        <h1 className="text-white uppercase font-semibold text-lg font-poppins">Filters</h1>
        <button onClick={onClose} className="text-white text-xl">&times;</button>
      </div>
      <div className="my-4 ml-3">
        <h2 className="text-lg font-semibold mb-2">{subCategory}</h2>
        <ul>
          <li className="mb-2 uppercase text-sm cursor-pointer">
            <label>
              <input type="checkbox" className="mr-2 font-poppins" /> Filter 1
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

export default FilterSection;
