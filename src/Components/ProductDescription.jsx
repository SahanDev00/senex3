import React, { useState, useContext } from 'react';
import { CartContext } from '../Components/CartContext'; // Import CartContext
import BasicDemo from './BasicDemo';

const ProductDescription = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false); // State for showing the message
  const [view, setView] = useState('description'); // State for toggling between description and specifications
  const { addToCart } = useContext(CartContext); // Use CartContext

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity); // Pass quantity to addToCart
    setShowMessage(true); // Show the "Added to Cart" message
    setTimeout(() => setShowMessage(false), 2000); // Hide the message after 2 seconds
  };

  // Ensure product.price is a number
  const formatPrice = (price) => {
    const num = parseFloat(price);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-3 font-poppins">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BasicDemo product={product} />
        <div>
          <h2 className="text-xl font-semibold mb-2 font-poppins">{product.name}</h2>
          <p className="text-gray-600 mb-4 font-poppins">${formatPrice(product.price)}</p>

          {/* Stock Status */}
          <p className={`mb-4 ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </p>

          {/* Toggle Buttons */}
          <div className="flex mb-4">
            <button
              onClick={() => setView('description')}
              className={`md:py-2 md:px-4 md:text-[16px] text-sm py-1 px-2 font-poppins ${view === 'description' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-l focus:outline-none`}
            >
              Description
            </button>
            <button
              onClick={() => setView('specifications')}
              className={`md:py-2 md:px-4 md:text-[16px] text-sm py-1 px-2 font-poppins ${view === 'specifications' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-r focus:outline-none`}
            >
              Specifications
            </button>
          </div>

          {/* Content Area */}
          <div className="mb-4">
            {view === 'description' ? (
              <p className="md:text-[16px] text-sm">{product.description}</p>
            ) : (
              <ul>
                {product.specifications && product.specifications.length > 0 ? (
                  product.specifications.map((spec, index) => (
                    <li key={index} className="mb-2">
                      <span className="font-semibold font-poppins md:text-[16px] text-sm">{spec.name}:</span> {spec.value}
                    </li>
                  ))
                ) : (
                  <p className='md:text-[16px] text-sm'>No specifications available.</p>
                )}
              </ul>
            )}
          </div>

          {/* Quantity Adjustment */}
          <div className="flex items-center mb-4">
            <button
              onClick={handleDecrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l focus:outline-none"
              disabled={product.stock <= 0} // Disable if out of stock
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border-t border-b border-gray-200 focus:outline-none"
            />
            <button
              onClick={handleIncrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r focus:outline-none"
              disabled={product.stock <= 0} // Disable if out of stock
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className={`bg-blue-500 font-poppins text-white py-2 px-4 rounded ${product.stock <= 0 ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={product.stock <= 0} // Disable if out of stock
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Notification Message */}
      {showMessage && (
        <div className="fixed top-4 font-poppins left-4 bg-green-500 text-white md:py-2 md:px-4 md:text-[16px] text-sm py-1 px-2 rounded shadow-lg">
          Added to Cart
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
