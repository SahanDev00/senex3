import React, { useContext, useState, useEffect } from 'react';
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
  const [data, setData] = useState([]); // State for fetched data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

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

  const handleCategoryClick = (categoryMainName, categoryMainID) => {
    setSelectedCategory(categoryMainName);
  
    const apiKey = process.env.REACT_APP_API_KEY;
    const subCategoriesUrl = `/API/CategorySub/GetList?APIKey=${apiKey}&KeyW=&CategoryMainID=${categoryMainID}`;
  
    fetch(subCategoriesUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        if (result.success && Array.isArray(result.data)) {
          setSubCategories(result.data); // Set the fetched subcategories to state
        } else {
          throw new Error('Unexpected response format');
        }
      })
      .catch((error) => {
        console.error('Error fetching subcategories:', error);
      });
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

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (!apiKey) {
      console.error('API Key is missing! Make sure it is defined in the .env file.');
      return;
    }
  
    const url = `/API/CategoryMain/GetList?APIKey=${apiKey}`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        if (result.success && Array.isArray(result.data)) {
          setData(result.data); // Set the data to state
        } else {
          throw new Error('Unexpected response format');
        }
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error); // Set the error
        setLoading(false); // Stop loading
      });
  }, []);
  

  if (loading) return <p className='text-white'>Loading...</p>;
  if (error) return <p className='text-white'>Error: {error.message}</p>;


  return (
    <div className="md:flex font-poppins hidden">
      <div className='lg:w-[200px] xl:w-[200px] mxl:h-[570px] 2xl:w-[300px] mt-4 h-[780px] lg:h-[600px] xl:h-[550px] 2xl:h-[780px]'>
        <ul>
          {data.map((item, index) => (
            <Link 
              key={index} 
              onClick={() => handleCategoryClick(item.categoryMainName, item.categoryMainID)} // Pass categoryMainID here
              to={`/product/products/${item.categoryMainID}`} // Pass categoryMainID here
            >
              <li className='bg-stone-700 w-full hover:bg-red-600 hover:z-50 hover:scale-110 hover:shadow-xl duration-100 group'>
                <h3 
                  className='flex items-center ml-2 text-stone-300 font-bold cursor-pointer group-hover:text-white py-4 mt-1 mb-1 text-xs lg:text-sm uppercase hover:translate-x-3 transition'
                  onClick={() => toggleCollapse(item.categoryMainName)}
                >
                  {item.icon && (
                    <item.icon
                      className={`text-black text-xl lg:text-3xl group-hover:text-white transition-transform duration-200 mr-2 ml-1 ${
                        collapsedSections[item.categoryMainName] ? '' : ''
                      }`}
                    />
                  )}
                  {item.categoryMainName}
                </h3>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {selectedCategory && (
        <div className=''>
          <SubCats subCategories={subCategories} onClose={handleCloseFilterSection} /> 
          <FilterSection item={selectedCategory} onClose={handleCloseFilterSection} />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
