import React, { useState, useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { Categories } from '../products'; // Assuming products.js contains Offers and Arrivals arrays
import ProductDescription from './ProductDescription';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('specialOffers');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState('');

  const handleAddToCart = (product) => {
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

  // Helper function to truncate descriptions
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  // Flatten the product list from categories
  const getAllProducts = () => {
    return Categories.flatMap(category =>
      category.subCat.flatMap(subCat => subCat.products)
    );
  };

  // Get the list of products
  const products = getAllProducts();

  return (
    <div className='font-poppins mt-20 mx-auto w-[90%]'>
      {/* Tab Buttons */}
      <div className='flex border-b border-white/20 mb-4'>
        <button
          className={`py-2 px-4 text-xl font-semibold ${activeTab === 'specialOffers' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('specialOffers')}
        >
          Special Offers
        </button>
        <button
          className={`py-2 px-4 text-xl font-semibold ${activeTab === 'newArrivals' ? 'border-b-2 border-red-500 text-red-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('newArrivals')}
        >
          New Arrivals
        </button>
      </div>

      {/* Tab Content */}
      <div className='p-4'>
        {activeTab === 'specialOffers' && (
          <div>
            <h2 className='text-2xl font-bold mb-2 text-white'>Special Offers</h2>
            <p className='text-white'>Here are the special offers available right now.</p>
            {/* Special Offers Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 font-poppins mt-5">
              {products.slice(0, 12).map(product => (
                <div key={product.id} className="product-card p-4 shadow-md border rounded hover:scale-105 duration-300 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <img src={product.image} alt={product.name} className='h-[200px] mx-auto' />
                  <h2 className="text-xl font-bold text-white text-center">{product.name}</h2>
                  <p className='text-white/80 text-center my-2'>{truncateDescription(product.description, 9)}</p>
                  <p className="text-xl font-bold text-white text-center">${product.price}</p>
                  <p className={`text-center ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </p>
                  <button
                    className={`mt-2 text-xs md:text-sm flex mx-auto ${product.stock > 0 ? 'bg-red-500' : 'bg-gray-500'} text-white py-2 px-4 rounded`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    disabled={product.stock <= 0}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'newArrivals' && (
          <div>
            <h2 className='text-2xl font-bold mb-2 text-white'>New Arrivals</h2>
            <p className='text-white'>Check out the new arrivals in our store.</p>
            {/* New Arrivals Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 font-poppins mt-5">
              {products.slice(0, 12).map(product => (
                <div key={product.id} className="product-card p-4 shadow-md border rounded hover:scale-105 duration-300 cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <img src={product.image} alt={product.name} className='h-[200px] mx-auto' />
                  <h2 className="text-xl font-bold text-white text-center">{product.name}</h2>
                  <p className='text-white/80 text-center my-2'>{truncateDescription(product.description, 9)}</p>
                  <p className="text-xl font-bold text-white text-center">${product.price}</p>
                  <p className={`text-center ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </p>
                  <button
                    className={`mt-2 text-xs md:text-sm flex mx-auto ${product.stock > 0 ? 'bg-red-500' : 'bg-gray-500'} text-white py-2 px-4 rounded`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    disabled={product.stock <= 0}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

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
    </div>
  );
};

export default Tabs;
