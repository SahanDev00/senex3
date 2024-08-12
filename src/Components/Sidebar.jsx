import React, { useContext, useState, useEffect } from 'react';
import { Categories } from '../products';
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import { SearchContext } from '../SearchContext';
import FilterSection from './FilterSection'; // Import FilterSection

const Sidebar = () => {
  const { clearSearchQuery } = useContext(SearchContext);
  const location = useLocation(); // Get the current location

  const [collapsedSections, setCollapsedSections] = useState({});
  const [selectedSubCategory, setSelectedSubCategory] = useState(null); // State for selected subcategory

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
    setSelectedSubCategory(subCategory);
  };

  const handleCloseFilterSection = () => {
    setSelectedSubCategory(null);
  };

  useEffect(() => {
    // Close the filter section if the path is '/product'
    if (location.pathname === '/product') {
      handleCloseFilterSection();
    }
  }, [location.pathname]);

  return (
    <div className="lg:flex font-poppins hidden ">
      <div className=' lg:w-[200px] xl:w-[200px] mxl:h-[570px] 2xl:w-[250px] border-red-600 border md:ml-20 lg:ml-10 xl:ml-10 mxl:ml-16 lxl:ml-32 2xl:ml-36 mt-4 h-[780px] lg:h-[600px] xl:h-[550px]  2xl:h-[780px] overflow-y-auto bg-white'>
        <div className='w-full h-[50px] border bg-red-600 border-white'>
          <h1 className='flex items-center justify-center text-white w-full h-full uppercase font-semibold text-lg'>Categories</h1>
        </div>
        <div className='my-4 ml-3 '>
          <ul>
            {Categories.map((category, index) => (
              <li key={index}>
                <h3 className='flex items-center cursor-pointer mt-1 mb-2 text-sm uppercase' onClick={() => toggleCollapse(category.category)}>
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
      {/* Render FilterSection component if a subcategory is selected */}
      {selectedSubCategory && (
        <FilterSection subCategory={selectedSubCategory} onClose={handleCloseFilterSection} />
      )}
    </div>
  );
};

export default Sidebar;
