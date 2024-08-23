import React from 'react';

const SubCats = ({ subCategories = [], onClose}) => {
  return (
    <div className="lg:w-[170px] relative mt-5 xl:w-[180px] mxl:w-[224px] border-r bg-black/30 border-red-600 py-5 text-white pl-3">
      <h2 className='text-lg mt-3 font-bold uppercase'>Subcategories</h2>
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
