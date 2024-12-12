import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductDescription from './ProductDescription';
import { CartContext } from '../Components/CartContext';
import FilterSection2 from './FilterSection2';
import { Helmet } from 'react-helmet';

const ProductsPage = () => {
  const { categoryName, subCategoryID } = useParams(); // Add subCategoryID
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState('');
  const { addToCart } = useContext(CartContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryMainName, setCategoryMainName] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://senexadmin.worldpos.biz/API/Item?CategoryMainID=${categoryName}&CategorySubID=${subCategoryID || ''}&BrandID=`;

    fetch(url,{
      method: 'GET',
      headers: {
        'APIKey': apiKey,
      }, })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((result) => {
        if (result.success && Array.isArray(result.data)) {
          setProducts(result.data); // Set the products to state

          // Check if there are products and extract categoryMainName from the first product
          if (result.data.length > 0) {
            setCategoryMainName(result.data[0].categoryMainName || 'Default Category');
          } else {
            setCategoryMainName('No Category');
          }
        } else {
          throw new Error('Unexpected response format');
        }
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error.message || 'An error occurred'); // Set the error
        setLoading(false); // Stop loading
      });
  }, [categoryName, subCategoryID]); // Update dependency to include subCategoryID

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product) => {
    if (product.stockAvailable === 'A') {
      addToCart(product);
      setNotification(`${product.itemName} has been added to the cart.`);
      setTimeout(() => {
        setNotification('');
      }, 3000);
    } else {
      setNotification(`${product.itemName} is out of stock.`);
      setTimeout(() => {
        setNotification('');
      }, 3000);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) return <p className='text-white'>Loading...</p>;
  if (error) return <p className='text-white'>Error: {error.message}</p>;

  return (
    <div className="xl:w-[91%] p-4 relative font-poppins sm:ml-3">
      <h1 className="text-2xl text-white font-bold mb-3">{categoryMainName} Products</h1>
      {products.length > 0 ? (
        <div>
          <p className="text-white md:mb-2">{products.length} products found</p>
          <div className='w-[200px] mb-2 h-[50px] flex md:hidden items-center'>
            <button className='px-4 py-1 text-white border' onClick={toggleSidebar}>Filters</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div key={product.itemID} className="border bg-black/40 hover:scale-105 duration-300 m-1 p-5 rounded hover:shadow-lg shadow cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <Helmet><title>SENEX | {categoryMainName}</title></Helmet>
                <img src={`https://senexadmin.worldpos.biz/Uploads/${product.cacheID}.jpg`} alt={product.name} className="w-full mb-4" />
                <h2 className="text-xl text-white text-center font-semibold">{product.itemName}</h2>
                <p className="text-center text-white">${Number(product.retailPrice).toFixed(2)}</p>
                <p className={`text-center ${product.stockAvailable === "A" ? 'text-green-500' : 'text-red-500'}`}>
                  {product.stockAvailable === "A" ? 'In Stock' : 'Out of Stock'}
                </p>
                <button
                  className={`mt-2 text-xs md:text-sm flex mx-auto ${product.stockAvailable === 'A' ? 'bg-red-500' : 'bg-gray-500'} text-white py-2 px-4 rounded`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  disabled={product.stockAvailable !== 'A'}
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

export default ProductsPage;
