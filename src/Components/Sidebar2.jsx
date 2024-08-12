import React, { useContext, useState } from 'react';
import { Categories } from '../products';
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { SearchContext } from '../SearchContext';


const Sidebar2 = () => {
  const { clearSearchQuery } = useContext(SearchContext);

  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleCollapse = (section) => {
    setCollapsedSections((prev) => {
      const newSections = { ...prev };
      for (const key in newSections) {
        if (key !== section) {
          newSections[key] = false;
        }
      }
      newSections[section] = !newSections[section];
      return newSections;
    });
  };
  
  const handleSubCategoryClick = (subCategory) => {
    clearSearchQuery();
  };



  return (
    <div className="font-poppins w-full h-screen">
      <div className='w-full  border-red-600 border xl:ml-36 h-screen overflow-y-auto bg-black text-white'>
        <div className='w-full h-[50px] border bg-red-700 border-white'>
          <h1 className='flex items-center justify-center text-white w-full h-full uppercase font-semibold text-lg'>Categories</h1>
        </div>
        <div className='my-4 ml-3 '>
          <ul>
            {Categories.map((category, index) => (
              <li key={index}>
                <h3 className='flex items-center cursor-pointer mt-1 mb-2 font-semibold text-sm uppercase' onClick={() => toggleCollapse(category.category)}>
                  <RiArrowDropRightLine
                    className={`text-gray-500 transition-transform duration-200 ${
                      collapsedSections[category.category] ? 'rotate-90' : ''
                    }`}
                    size={25}
                  />{' '} {category.category}
                </h3>
                {collapsedSections[category.category] && (
                  <ul>
                    {category.subCat.map((subCategory, subIndex) => (
                      <li className='mb-2 uppercase ml-9 text-sm cursor-pointer' key={`${index}-${subIndex}`}>
                        <Link 
                          onClick={() => handleSubCategoryClick(subCategory.name)} // Call handleSubCategoryClick on click
                          to={`/product/products/${subCategory.name}`}
                        >
                          {subCategory.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
