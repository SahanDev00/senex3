import React, { useContext, useState, useEffect } from 'react';
import { Categories } from '../products';
import { Link, useLocation } from 'react-router-dom';
import { SearchContext } from '../SearchContext';
import FilterSection from './FilterSection'; // Import FilterSection
import SubCats from './SubCats'; // Import SubCats

const Sidebar = () => {
  const { clearSearchQuery } = useContext(SearchContext);
  const location = useLocation(); // Get the current location

  const [collapsedSections, setCollapsedSections] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category
  const [subCategories, setSubCategories] = useState([]); // State for subcategories

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

  const handleCategoryClick = (category) => {
    clearSearchQuery();
    setSelectedCategory(category);
    const categoryObj = Categories.find((cat) => cat.category === category);
    setSubCategories(categoryObj ? categoryObj.subCat || [] : []); // Set subcategories from the selected category
  };

  const handleCloseFilterSection = () => {
    setSelectedCategory(null);
    setSubCategories([]); // Clear subcategories when the filter section is closed
  };

  useEffect(() => {
    // Close the filter section if the path is '/product'
    if (location.pathname === '/product') {
      handleCloseFilterSection();
    }
  }, [location.pathname]);

  return (
    <div className="lg:flex font-poppins hidden">
      <div className='lg:w-[200px] xl:w-[200px] mxl:h-[570px] 2xl:w-[300px] mt-4 h-[780px] lg:h-[600px] xl:h-[550px] 2xl:h-[780px]'>
        <div className=''>
          <ul>
            {Categories.map((category, index) => (
              <Link 
                key={index} 
                onClick={() => handleCategoryClick(category.category)} 
                to={`/product/products/${category.category}`}
              >
                <li className='bg-stone-700 w-full hover:bg-red-600 hover:scale-110 hover:shadow-xl duration-100 group'>
                  <h3 
                    className='flex items-center text-stone-300 font-bold cursor-pointer group-hover:text-white py-4 mt-1 mb-1 text-sm uppercase hover:translate-x-3 transition'
                    onClick={() => toggleCollapse(category.category)}
                  >
                    <category.icon
                      className={`text-black group-hover:text-white transition-transform duration-200 mr-2 ml-1 ${
                        collapsedSections[category.category] ? '' : ''
                      }`}
                      size={35}
                    />
                    {category.category}
                  </h3>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {selectedCategory && (
        <div className=''>
          <SubCats subCategories={subCategories} onClose={handleCloseFilterSection}  /> {/* Pass subCategories to SubCats */}
          <FilterSection 
            category={selectedCategory} 
            onClose={handleCloseFilterSection} 
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
