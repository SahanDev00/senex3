import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FilterSection from './FilterSection'; // Import FilterSection
import SubCats from './SubCats'; // Import SubCats

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  const [collapsedSections, setCollapsedSections] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null); // State for selected category
  const [subCategories, setSubCategories] = useState([]); // State for subcategories
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedCategoryID, setSelectedCategoryID] = useState(null);


  // Function to handle selecting a subcategory
  const handleSelectSubCategory = (subCategoryID) => {
    setSelectedSubCategory(subCategoryID);
  };

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
    // Set the selected category and its ID
    setSelectedCategory(categoryMainName);
    setSelectedCategoryID(categoryMainID);
  
    // Define the API key and URL
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://senexadmin.worldpos.biz/API/CategorySub?CategoryMainID=${categoryMainID}`;
  
    // Fetch subcategories from the API
    fetch(url, {
      method: 'GET',
      headers: {
        'APIKey': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          // Log error if response is not ok
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        // Check if the response has the expected format
        if (result.success && Array.isArray(result.data)) {
          // Set the fetched subcategories to state
          setSubCategories(result.data);
        } else {
          // Handle unexpected response format
          throw new Error('Unexpected response format');
        }
      })
      .catch((error) => {
        // Log and handle errors
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
    fetch('https://senexadmin.worldpos.biz/Api/CategoryMain', {
      method: 'GET',
      headers: {
        'APIKey': apiKey,
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(response => {
      if (response.success) {
        setData(response.data); // Save the API response data
      } else {
        setError('Failed to fetch data'); // Handle API error
      }
    })
    .catch(error => {
      setError(error.message); // Handle any fetch errors
    });
  }, []);

  if (error) {
    return <div className='xl:w-[300px] text-white'>Error: {error.message}</div>;
  }

  if (!data) {
    return <div className='xl:w-[300px] text-white'>Loading...</div>;
  }

  return (
    <div className="md:flex font-poppins hidden">
      <div className='md:w-[165px] lg:w-[200px] xl:w-[200px] mxl:h-[570px] 2xl:w-[300px] mt-4 h-[780px] lg:h-[600px] xl:h-[550px] 2xl:h-[780px]'>
        <ul>
          {data.map((item, index) => (
            <li 
              key={index} 
              className='bg-stone-700 w-full hover:bg-red-600 hover:z-50 hover:scale-110 hover:shadow-xl duration-100 group'
            >
              <Link 
                to={`/product/products/${item.categoryMainID}`} // Navigate to product page
                onClick={() => handleCategoryClick(item.categoryMainName, item.categoryMainID)} // Pass categoryMainID here
              >
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
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {selectedCategory && (
        <div className=''>
          <SubCats subCategories={subCategories} categoryID={selectedCategoryID} selectedSubCategory={selectedSubCategory} onSelectSubCategory={handleSelectSubCategory} onClose={handleCloseFilterSection} /> 
          <FilterSection item={selectedCategory} onClose={handleCloseFilterSection} />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
