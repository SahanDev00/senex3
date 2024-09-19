// src/components/FilterSection.js
import React from 'react';
import FilterPrice from './FilterPrice';

const FilterSection2 = () => {

  const handlePriceChange = (min, max) => {
    // console.log(`Min Price: ${min}, Max Price: ${max}`);
     // Handle the price filtering logic here
   };

  return (
    <div className="w-[90%] mx-auto h-full z-50 mt-4">
      <div className="w-full h-[50px] border border-red-500 text-red-500 flex justify-between items-center px-4">
        <h1 className="uppercase font-semibold text-lg font-poppins">Filter by Price</h1>
      </div>
      <div className="my-4 ml-3 w-full">
        <FilterPrice  onPriceChange={handlePriceChange}/>
      </div>
    </div>
  );
};

export default FilterSection2;
