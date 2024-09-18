import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "../Assets/Images/logo.png"
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const formatPrice = (price) => {
    const priceString = typeof price === 'number' ? price.toString() : price; 
    const cleanedPrice = priceString.replace(/[^0-9.]/g, '');
    const num = parseFloat(cleanedPrice);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(formatPrice(item.retailPrice)) * (item.quantity || 1); 
      return total + itemPrice;
    }, 0).toFixed(2);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Quotation', 14, 28);
    doc.addImage(logo, "PNG", 5, 5, 50, 0);

    const tableColumn = ['Product', 'Quantity', 'Price', 'Total'];
    const tableRows = [];

    cartItems.forEach(item => {
      const itemData = [
        item.itemName,
        item.quantity,
        `$${formatPrice(item.retailPrice)}`,
        `$${(parseFloat(formatPrice(item.retailPrice)) * item.quantity).toFixed(2)}`
      ];
      tableRows.push(itemData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 30 });

    const total = calculateTotal();
    doc.text(`Total: $${total}`, 14, doc.previousAutoTable.finalY + 10);

    doc.save('senex_quotation.pdf');
  };

    // Function to check if the user is logged in
    const isLoggedIn = () => {
      const customerDetails = Cookies.get('customerDetails') || sessionStorage.getItem('customerDetails');
      return !!customerDetails;
    };

    const handleCheckout = () => {
      if (isLoggedIn()) {
        navigate('/checkout');
      } else {
        navigate('/login');
      }
    };

  return (
    <div className="w-[95%] mx-auto mt-10 lg:min-h-[600px] xl:min-h-[730px] relative pb-5">
      <Helmet><title>SENEX | Cart</title></Helmet>
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center font-poppins">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-white ml-10 md:ml-40 text-sm md:text-xl font-poppins'>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
          {cartItems.map((item) => (
            <li key={item.itemID} className="flex justify-between mb-4 p-4 border-b">
              <div className="flex items-center">
                <img src={`https://extremeadmin.worldpos.biz/Uploads/${item.cacheID}.jpg`} alt={item.itemName} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h2 className="sm:text-xl text-white font-semibold">{item.itemName}</h2>
                  <p className="text-white">Quantity: {isNaN(item.quantity) ? '0' : item.quantity}</p> {/* Safe handling for NaN */}
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm sm:text-lg text-white font-semibold">
                  ${isNaN(formatPrice(item.retailPrice)) ? '0.00' : formatPrice(item.retailPrice)} {/* Safe handling for NaN */}
                </p>
                <div className="flex items-center ml-4 text-white">
                  <button onClick={() => updateQuantity(item.itemID, parseInt(item.quantity) - 1)} disabled={item.quantity <= 1}>
                    -
                  </button>
                  <span className="mx-2 text-white">{isNaN(item.quantity) ? '0' : item.quantity}</span> {/* Safe handling for NaN */}
                  <button onClick={() => updateQuantity(item.itemID, parseInt(item.quantity) + 1)}>
                    +
                  </button>
                  <button onClick={() => removeFromCart(item.itemID)} className="bg-red-500 text-white rounded px-2 pb-1 ml-4">
                    x
                  </button>
                </div>
              </div>
            </li>
          ))}
          </ul>
          <div className="flex items-center justify-end mt-4">
            <p className="text-lg sm:text-xl text-white font-semibold font-poppins mr-4">Total: ${calculateTotal()}</p>
            <div onClick={handleCheckout}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded font-poppins">Checkout</button>
            </div>
          </div>
          <div className="flex items-center justify-end mt-4">
            <button onClick={generatePDF} className="bg-green-500 text-white py-2 px-4 rounded font-poppins">Download Quotation</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
