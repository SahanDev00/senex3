import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Categories } from '../products';
import { SearchContext } from '../SearchContext';
import ProductDescription from './ProductDescription';
import { CartContext } from '../Components/CartContext'; // Import CartContext
import FilterSection2 from './FilterSection2';

const ProductsPage = () => {
  const { searchQuery, clearSearchQuery } = useContext(SearchContext);
  const { subCategoryName } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState(''); // State for notification message
  const { addToCart } = useContext(CartContext); // Use CartContext
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  // Clear the search query when navigating to a new category
  useEffect(() => {
    clearSearchQuery();
  }, [subCategoryName, clearSearchQuery]);

  // Function to find products based on subCategoryName and apply search filter
  const findProducts = (subCategoryName) => {
    for (const category of Categories) {
      for (const subCat of category.subCat) {
        if (subCat.name === subCategoryName) {
          return subCat.products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
      }
    }
    return [];
  };

  const products = findProducts(subCategoryName);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart

    // Show notification message
    setNotification(`${product.name} has been added to the cart.`);

    // Hide notification message after 3 seconds
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="xl:w-[91%] p-4 relative font-poppins">
      <h1 className="text-2xl text-white font-bold mb-3">{subCategoryName} Products</h1>
      {products.length > 0 ? (
        <div>
          <p className="text-white md:mb-2">{products.length} products found</p>
          <div className='w-[200px] mb-2 h-[50px] flex md:hidden items-center'>
            <button className='px-4 py-1 text-white border' onClick={toggleSidebar}>Filters</button>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="border bg-black/40 hover:scale-105 duration-300 m-1 p-5 rounded hover:shadow-lg shadow cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <h2 className="md:text-xl text-white text-center font-semibold">{product.name}</h2>
                <p className="text-white text-center ">${Number(product.price).toFixed(2)}</p> {/* Ensure price is formatted */}
                <button
                  className="mt-2 text-xs md:text-sm bg-red-500 flex mx-auto text-white py-2 px-4 rounded"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the modal from opening
                    handleAddToCart(product); // Add product to cart
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 mx-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className='text-white'>0 products found</p>
      )}
  
      {/* Notification message */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white md:py-2 md:px-4 md:text-[16px] text-sm py-1 px-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      {/* Modal for Product Description */}
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-3/4 max-w-4xl relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <ProductDescription product={selectedProduct} />
          </div>
        </div>
      )}

      {/* Sidebar for Filters */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="rounded-lg p-8 w-3/4 max-w-4xl relative border bg-black/80">
            <button
              className="absolute top-4 right-4 text-xl text-white hover:text-gray-600"
              onClick={toggleSidebar}
            >
              &times;
            </button>
            <FilterSection2 />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
