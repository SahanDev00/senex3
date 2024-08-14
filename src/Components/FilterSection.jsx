import React from 'react';
import FilterPrice from './FilterPrice';

const FilterSection = ({ onClose }) => {

  const handlePriceChange = (min, max) => {
    console.log(`Min Price: ${min}, Max Price: ${max}`);
    // Handle the price filtering logic here
  };

  return (
    <div className="lg:w-[170px] xl:w-[180px] mxl:w-[224px] border-r bg-black/30 border-red-600 py-5">
        <div className="w-full h-[50px] flex items-center justify-between px-2">
          <h2 className="text-xl font-semibold text-white ml-4">FILTERS</h2>
        </div>
        <div className="my-3 ml-6">
          <ul className='h-full text-white'>
            <li className="mb-2 uppercase text-sm cursor-pointer">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 font-poppins" /> Filter 1
              </label>
            </li>
            <li className="mb-2 uppercase text-sm cursor-pointer">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 font-poppins" /> Filter 2
              </label>
            </li>
            <li className="mb-2 uppercase text-sm cursor-pointer">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 font-poppins" /> Filter 3
              </label>
            </li>
            {/* Add more filters as needed */}
          </ul>
          <FilterPrice minPrice={1500} maxPrice={3000} onPriceChange={handlePriceChange} />
        </div>
      </div>
  );
};

export default FilterSection;
