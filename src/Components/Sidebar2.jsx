import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropRightLine } from "react-icons/ri";
import { SearchContext } from '../SearchContext';

const Sidebar2 = () => {
  const { clearSearchQuery, setSelectedCategory } = useContext(SearchContext);
  const [collapsedSections, setCollapsedSections] = useState({});
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [, setItems] = useState([]); // State to store items

  // Fetch categories from API
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch('https://extremeadmin.worldpos.biz/API/CategoryMain', {
      method: 'GET',
      headers: {
        'APIKey': apiKey,
      },
    })
    .then(response => response.json())
    .then(result => {
      if (result.success && Array.isArray(result.data)) {
        setCategories(result.data);
      } else {
        throw new Error('Unexpected response format');
      }
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
  }, []);

  const toggleCollapse = (category) => {
    setCollapsedSections(prev => {
      const newSections = { ...prev };
      for (const key in newSections) {
        if (key !== category) {
          newSections[key] = false;
        }
      }
      newSections[category] = !newSections[category];
      return newSections;
    });

    if (!subCategories[category]) {
      // Fetch subcategories only if they are not already loaded
      const apiKey = process.env.REACT_APP_API_KEY;
      const url = `https://extremeadmin.worldpos.biz/API/CategorySub?CategoryMainID=${categories.find(cat => cat.categoryMainName === category)?.categoryMainID}`;
  
      fetch(url, {
        method: 'GET',
        headers: {
          'APIKey': apiKey,
        },
      })
      .then(response => response.json())
      .then(result => {
        if (result.success && Array.isArray(result.data)) {
          setSubCategories(prev => ({ ...prev, [category]: result.data }));
        } else {
          throw new Error('Unexpected response format');
        }
      })
      .catch(error => {
        console.error('Error fetching subcategories:', error);
      });
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    
    clearSearchQuery();
    setSelectedCategory(subCategory); // Optionally close the sidebar on subcategory click

    // Fetch items for the selected subcategory
    setLoading(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://extremeadmin.worldpos.biz/Api/Item?CategorySubID=${subCategory.categorySubID}`;
  
    fetch(url, {
      method: 'GET',
      headers: {
        'APIKey': apiKey,
      },
    })
    .then(response => response.json())
    .then(result => {
      if (result.success && Array.isArray(result.data)) {
        setItems(result.data);
      } else {
        throw new Error('Unexpected response format');
      }
    })
    .catch(error => {
      console.error('Error fetching items:', error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  if (loading) {
    return <div className='text-white'>Loading...</div>;
  }

  return (
    <div className="font-poppins w-full h-screen">
      <div className='w-full border-red-600 border xl:ml-36 h-screen overflow-y-auto bg-black text-white'>
        <div className='w-full h-[50px] border bg-red-700 border-white'>
          <h1 className='flex items-center justify-center text-white w-full h-full uppercase font-semibold text-lg'>Categories</h1>
        </div>
        <div className='my-4 ml-3'>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/product/products/${category.categoryMainID}`}>
                  <h3 className='flex items-center cursor-pointer mt-1 mb-2 font-semibold text-sm uppercase' onClick={() => toggleCollapse(category.categoryMainName)}>
                    <RiArrowDropRightLine
                      className={`text-gray-500 transition-transform duration-200 ${collapsedSections[category.categoryMainName] ? 'rotate-90' : ''}`}
                      size={25}
                    />{' '} {category.categoryMainName}
                  </h3>
                </Link>
                {collapsedSections[category.categoryMainName] && (
                  <ul>
                    {subCategories[category.categoryMainName]?.map((subCategory, subIndex) => (
                        <Link 
                        to={`/product/products/${category.categoryMainID}/${subCategory.categorySubID}`}
                        onClick={(event) => handleSubCategoryClick(event, subCategory)}
                        key={`${index}-${subIndex}`}
                        >
                          <li className='mb-2 uppercase ml-9 text-sm cursor-pointer text-white' key={`${index}-${subIndex}`}>
                              {subCategory.categorySubName}
                          </li>
                        </Link>
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
