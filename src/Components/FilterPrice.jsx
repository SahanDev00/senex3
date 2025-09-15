import React, { useState } from 'react';

const FilterPrice = ({ minPrice = 1500, maxPrice = 3000, onPriceChange }) => {
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);

  const handleMinChange = (event) => {
    const value = Number(event.target.value);
    setMinValue(value);
    onPriceChange(value, maxValue);
  };

  const handleMaxChange = (event) => {
    const value = Number(event.target.value);
    setMaxValue(value);
    onPriceChange(minValue, value);
  };

  return (
    <div className="rounded-lg shadow-md max-w-lg mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4 text-white uppercase">Filter by Price</h2>
      <div className="relative py-3">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-[90%] bg-red-500 h-2 rounded-lg cursor-pointer"
          style={{ zIndex: 1 }}
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-[90%] bg-red-500 h-2 rounded-lg cursor-pointer"
          style={{ zIndex: 2 }}
        />
      </div>
      <div className="flex justify-between mt-2 text-sm text-white w-[90%]">
        <span>Rs.{minValue}</span>
        <span>Rs.{maxValue}</span>
      </div>
    </div>
  );
};

export default FilterPrice;
