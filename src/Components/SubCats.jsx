import React from 'react';

const SubCats = ({ subCategories = [], onClose}) => {
  return (
    <div className="text-white mt-5 ml-6 pt-4 relative border-r border-red-500 w-[200px]">
      <h2 className='text-lg font-bold uppercase'>Subcategories</h2>
      <ul>
        {subCategories.map((subCat, index) => (
          <li className='uppercase' key={index}><input type="checkbox" className='mr-2' />{subCat.name}</li>
        ))}
      </ul>
      <button onClick={onClose} className="text-white text-xl absolute top-0 right-2">&times;</button>
    </div>
  );
};

export default SubCats;
