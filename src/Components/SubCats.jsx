import React from 'react';
import { Link } from 'react-router-dom';

const SubCats = ({ subCategories = [], onClose, onSelectSubCategory, categoryID, selectedSubCategory }) => {
  if (typeof onSelectSubCategory !== 'function') {
    console.error('onSelectSubCategory is not a function');
    return null;
  }

  return (
    <div className="lg:w-[170px] relative z-10 mt-5 xl:w-[180px] mxl:w-[224px] border-r bg-black/30 border-red-600 py-5 text-white pl-3">
      <h2 className='text-lg mt-3 font-bold uppercase'>Subcategories</h2>
      <ul>
        {subCategories.map((subCat, index) => (
          <li key={index} className='flex items-center'>
            <Link 
              to={`/product/products/${categoryID}/${subCat.categorySubID}`} 
              className='flex items-center w-full text-white hover:text-red-500'
              onClick={() => onSelectSubCategory(subCat.categorySubID)} // Call the function on click
            >
              <input
                type="radio"
                name="subcategory"
                className={`mr-2 ${selectedSubCategory === subCat.categorySubID ? 'accent-red-600' : ''}`}
                checked={selectedSubCategory === subCat.categorySubID}
                readOnly // Prevent user from manually changing selection
              />
              {subCat.categorySubName}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={onClose} className="text-white text-xl absolute top-2 right-2">&times;</button>
    </div>
  );
};

export default SubCats;
