import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Categories } from '../products';
import { SearchContext } from '../SearchContext';
import { CartContext } from '../Components/CartContext';
import ProductDescription from './ProductDescription';
import FilterSection2 from './FilterSection2';

const SearchResults = () => {
  const location = useLocation();
  const { searchQuery } = useContext(SearchContext);
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || searchQuery;

  const allProducts = Categories.flatMap(category => 
    category.subCat.flatMap(subCat => subCat.products)
  );

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    if (product.stock > 0) {
      addToCart(product);
      setNotification(`${product.name} has been added to the cart.`);
      setTimeout(() => {
        setNotification('');
      }, 3000);
    } else {
      setNotification(`${product.name} is out of stock.`);
      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sm:w-[97%] xl:w-[91%] p-4 relative font-poppins ml-3">
      <h1 className="text-2xl text-white font-bold mb-3">Search Results for: {query}</h1>
      {filteredProducts.length > 0 ? (
        <div>
          <p className="text-white md:mb-2">{filteredProducts.length} products found</p>
          <div className='w-[200px] mb-2 h-[50px] flex md:hidden items-center'>
            <button className='px-4 py-1 text-white border' onClick={toggleSidebar}>Filters</button>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="border bg-black/40 hover:scale-105 duration-300 m-1 p-5 rounded hover:shadow-lg shadow cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <img src={product.image} alt={product.name} className="w-full mb-4" />
                <h2 className="text-xl text-white text-center font-semibold">{product.name}</h2>
                <p className="text-center text-white">${Number(product.price).toFixed(2)}</p>
                <p className={`text-center ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </p>
                <button
                  className={`mt-2 text-xs md:text-sm flex mx-auto ${product.stock > 0 ? 'bg-red-500' : 'bg-gray-500'} text-white py-2 px-4 rounded`}
                  onClick={(e) => handleAddToCart(product, e)}
                  disabled={product.stock <= 0} // Disable button if out of stock
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
        <h1 className="text-lg text-white mb-3">Sorry, the item "{query}" is not available !!!</h1>
      )}

      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white md:py-2 md:px-4 md:text-[16px] text-sm py-1 px-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

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

export default SearchResults;
