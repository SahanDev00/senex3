import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from "../Assets/Images/logo.png"
import { Helmet } from 'react-helmet';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const formatPrice = (price) => {
    const cleanedPrice = price.replace(/[^0-9.]/g, '');
    const num = parseFloat(cleanedPrice);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(formatPrice(item.price)) * item.quantity;
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
        item.name,
        item.quantity,
        `$${formatPrice(item.price)}`,
        `$${(parseFloat(formatPrice(item.price)) * item.quantity).toFixed(2)}`
      ];
      tableRows.push(itemData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 30 });

    const total = calculateTotal();
    doc.text(`Total: $${total}`, 14, doc.previousAutoTable.finalY + 10);

    doc.save('senex_quotation.pdf');
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
              <li key={item.id} className="flex justify-between mb-4 p-4 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 className="sm:text-xl text-white font-semibold font-poppins">{item.name}</h2>
                    <p className="text-white font-poppins text-sm sm:text-[16px]">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right ">
                  <p className="text-sm sm:text-lg text-white font-semibold font-poppins">${formatPrice(item.price)}</p>
                  <div className="flex items-center ml-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-600 text-white py-1 px-1 sm:px-2 rounded font-poppins text-xs sm:text-[16px]"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="mx-2 text-white font-poppins text-sm sm:text-[16px]">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-600 text-white py-1 px-1 sm:px-2 rounded font-poppins text-xs sm:text-[16px]"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white sm:py-1 px-1 sm:px-2 ml-4 sm:text-[16px] text-sm rounded font-poppins"
                    >
                      X
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-end mt-4">
            <p className="text-lg sm:text-xl text-white font-semibold font-poppins mr-4">Total: ${calculateTotal()}</p>
            <Link to='/checkout'>
              <button className="bg-blue-500 text-white py-2 px-4 rounded font-poppins">Checkout</button>
            </Link>
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
