import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import Country from '../Components/Country2';
import { Helmet } from 'react-helmet';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = typeof item.retailPrice === 'number'
        ? item.retailPrice
        : parseFloat(item.retailPrice?.replace(/[^0-9.]/g, '')) || 0;  // Default to 0 if undefined
  
      const itemQuantity = parseInt(item.quantity, 10) || 1;
      
      console.log(`Item: ${item.itemName}, Price: ${itemPrice}, Quantity: ${itemQuantity}`);
  
      return total + (itemPrice * itemQuantity);
    }, 0).toFixed(2);
  };
  
    

  const calculateItemsAndPieces = () => {
    const items = cartItems.length;
    // Sum up all item quantities
    const pieces = cartItems.reduce((total, item) => total + (parseInt(item.quantity, 10) || 1), 0);
    return { items, pieces };
  };

  const { items, pieces } = calculateItemsAndPieces();
  const total = calculateTotal();

  return (
    <div className='w-full xl:h-[75vh] mx-auto'>
      <Helmet><title>SENEX | Checkout</title></Helmet>
      <div className=' w-full mx-auto relative mb-7 md:mb-20'>
        <h1 className='mt-10 md:mt-20 md:mb-5 text-2xl md:text-4xl text-white font-bold text-center font-poppins'>Place Order</h1>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto w-[80%]'>
          <div className=' mx-auto w-full'>
            <form className=' w-full bg-black/50 mt-5 md:mt-10 border-white border-4 rounded-xl p-5'>
              <h1 className='text-2xl md:text-3xl font-bold text-center my-2 text-white font-poppins'>Billing Details</h1>
              <div className='flex gap-6 my-6'>
                <input className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='First Name' />
                <input className='w-full mx-auto rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Last Name' />
              </div>
              <input className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Street Address' />
              <div className='flex gap-6 my-6'>
                <input className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='City' />
                <input className='w-full mx-auto rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='State' />
              </div>
              <div className='flex gap-6'>
                <input className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Postal Code' />
                <Country />
              </div>
            </form>
          </div>
          {/* Right Side */}
          <div className='w-full mx-auto'>
            <div className='w-full flex items-center h-full justify-center md:mt-0 mt-5'>
              <div className='w-full md:w-[300px ] xl:w-[400px] mx-auto bg-black/50 rounded-xl border-4 p-6 text-white'>
                <h1 className='font-semibold text-2xl mb-1 font-poppins'>Your Order</h1>
                <hr className='border border-gray-600 mb-5' />
                <div className='flex justify-between border-b border-red-500'>
                  <h1 className='font-semibold text-lg font-poppins'>Items</h1>
                  <p className='font-poppins'>{items} items, {pieces} pieces</p>
                </div>
                <div className='flex justify-between border-b border-red-500 mt-3'>
                  <h1 className='font-semibold text-lg font-poppins'>Total</h1>
                  <p className='font-poppins'>Rs. {total}</p>
                </div>
                <button className='w-full bg-red-500 py-2 rounded-xl font-poppins mt-7 hover:bg-red-600 text-white font-semibold'>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
