import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Components/CartContext';
import Country from '../Components/Country2';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie'; 
import emailjs from 'emailjs-com';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [customerId, setCustomerId] = useState(null);

  useEffect(() => {
    // Retrieve customer ID from cookies or session storage
    const customerDetails = Cookies.get('customerDetails') || sessionStorage.getItem('customerDetails');
    if (customerDetails) {
      const parsedDetails = JSON.parse(customerDetails);
      setCustomerId(parsedDetails.customerID);
    }
  }, []);

  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = typeof item.retailPrice === 'number'
        ? item.retailPrice
        : parseFloat(item.retailPrice?.replace(/[^0-9.]/g, '')) || 0;  // Default to 0 if undefined
  
      const itemQuantity = parseInt(item.quantity, 10) || 1;
  
      return total + (itemPrice * itemQuantity);
    }, 0).toFixed(2);
  };
  
  const calculateItemsAndPieces = () => {
    const items = cartItems.length;
    const pieces = cartItems.reduce((total, item) => total + (parseInt(item.quantity, 10) || 1), 0);
    return { items, pieces };
  };

  const { items, pieces } = calculateItemsAndPieces();
  const total = calculateTotal();

  const sendConfirmationEmail = async (orderID) => {
    const templateParams = {
      to_name: billingDetails.firstName + ' ' + billingDetails.lastName,
      from_name: 'Extreme Computers',
      order_id: orderID
    };

    try {
      await emailjs.send(
        'service_2nmvxuu',
        'template_7ccdwzy',
        templateParams,
        'iJLT9e20sQ1qsdX29'
      );
    } catch (error) {
      console.error('Failed to send confirmation email:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const orderData = {
      orderID: "",  // Populate this with the order ID after placing the order
      customerID: customerId,
      customerName: `${billingDetails.firstName} ${billingDetails.lastName}`,
      shipAddressLine1: billingDetails.streetAddress,
      shipAttTo: billingDetails.streetAddress,
      shipCity: billingDetails.city,
      shipState: billingDetails.state,
      shipPostalCode: billingDetails.postalCode,
      shipCountry: billingDetails.country,
      itemCount: items,
      itemTotal: parseFloat(total),
      itemTotalDisplay: parseFloat(total),
      orderStatus: "PD",  // Default status
      remarks: "",  // Optional remarks
      action: {
        OrderActionID: "",
        OrderID: "",  // Populate if needed
        ActionDate: new Date().toISOString(),
        ActionType: "P",
        Remarks: "",
        UserID: ""  // Set this to the logged-in user's ID
      }
    };
  
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      
      // First, place the order
      const orderResponse = await fetch('https://extremeadmin.worldpos.biz/Api/Order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'APIKey': apiKey
        },
        body: JSON.stringify(orderData)
      });
  
      const orderResult = await orderResponse.json();
  
  
      if (orderResponse.ok) {
        const orderID = orderResult.data.orderID;
  
        // Now, post each cart item to the OrderItem API
        for (const item of cartItems) {
          const orderItemData = {
            orderID: orderID,
            itemID: item.itemID, // Use the item ID from your cart item
            remarks: "", // Any optional remarks
            itemPrice: parseFloat(item.retailPrice),
            itemDiscount: 0,  // Set this if applicable
            itemQty: parseInt(item.quantity, 10),
            paymentStatus: "NP",  // Customize as needed
            transaction: "", // Customize as needed
            returnURL: "", // Customize the return URL
            itemCode: item.itemCode, // Add the item code if available
            itemName: item.name, // Item name from your cart item
            lineTotal: parseFloat(item.retailPrice) * parseInt(item.quantity, 10),
            itemPriceDisplay: item.retailPrice,
            itemDiscountDisplay: "-",
            remarksDisplay: "",
            lineTotalDisplay: (parseFloat(item.retailPrice) * parseInt(item.quantity, 10)).toFixed(2)
          };
  
          // Send each item to the OrderItem API
          const orderItemResponse = await fetch('https://extremeadmin.worldpos.biz/Api/OrderItem', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'APIKey': apiKey
            },
            body: JSON.stringify(orderItemData)
          });
  
  
          if (!orderItemResponse.ok) {
            alert(`Failed to place order item: ${item.name}`);
          }
        }
  
        // After placing the order and items, call the OrderAction API
        const orderActionData = {
          orderActionID: "",
          orderID: orderID,
          actionDate: new Date().toISOString(),
          actionType: "P",  // Ordered
          remarks: "",
          userID: "",  // Set this to the logged-in user's ID
          returnURL: "", // Customize the return URL if needed
          orderDate: new Date().toISOString(),
          username: "", // Customize if needed
        };
  
        // Post to the OrderAction API
        const orderActionResponse = await fetch('https://extremeadmin.worldpos.biz/Api/OrderAction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'APIKey': apiKey
          },
          body: JSON.stringify(orderActionData)
        });
  
        const orderActionResult = await orderActionResponse.json();

  
        if (orderActionResponse.ok) {
          clearCart();
          await sendConfirmationEmail(orderID);  // Send confirmation email
          alert("Order and items placed successfully with action logged!");
        } else {
          alert(`Error: ${orderActionResult.errorMessage || 'Failed to log order action.'}`);
        }
      } else {
        alert(`Error: ${orderResult.errorMessage || 'Failed to place order.'}`);
      }
    } catch (error) {
      alert("Failed to place order.");
    }
  };
  
  

  return (
    <div className='w-full xl:h-[75vh] mx-auto'>
      <Helmet><title>SENEX | Checkout</title></Helmet>
      <div className='w-full mx-auto relative mb-7 md:mb-20'>
        <h1 className='mt-10 md:mt-20 md:mb-5 text-2xl md:text-4xl text-white font-bold text-center font-poppins'>Place Order</h1>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto w-[80%]'>
          <div className='mx-auto w-full'>
            <form className='w-full bg-black/50 mt-5 md:mt-10 border-white border-4 rounded-xl p-5' onSubmit={handleSubmit}>
              <h1 className='text-2xl md:text-3xl font-bold text-center my-2 text-white font-poppins'>Billing Details</h1>
              <div className='flex gap-6 my-6'>
                <input
                  className='w-full h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2'
                  type="text"
                  name="firstName"
                  placeholder='First Name'
                  value={billingDetails.firstName}
                  onChange={handleInputChange}
                />
                <input
                  className='w-full rounded-lg pl-3 py-1 border-red-500 border-2 mb-2'
                  type="text"
                  name="lastName"
                  placeholder='Last Name'
                  value={billingDetails.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <input
                className='w-full h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2'
                type="text"
                name="streetAddress"
                placeholder='Street Address'
                value={billingDetails.streetAddress}
                onChange={handleInputChange}
              />
              <div className='flex gap-6 my-6'>
                <input
                  className='w-full h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2'
                  type="text"
                  name="city"
                  placeholder='City'
                  value={billingDetails.city}
                  onChange={handleInputChange}
                />
                <input
                  className='w-full rounded-lg pl-3 py-1 border-red-500 border-2 mb-2'
                  type="text"
                  name="state"
                  placeholder='State'
                  value={billingDetails.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex gap-6'>
                <input
                  className='w-full h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2'
                  type="text"
                  name="postalCode"
                  placeholder='Postal Code'
                  value={billingDetails.postalCode}
                  onChange={handleInputChange}
                />
                <Country value={billingDetails.country} onChange={handleInputChange}/>
              </div>
              <button type='submit' className='w-full bg-red-500 py-2 rounded-xl font-poppins mt-7 hover:bg-red-600 text-white font-semibold'>Place Order</button>
            </form>
          </div>
          {/* Right Side */}
          <div className='w-full mx-auto'>
            <div className='w-full flex items-center h-full justify-center md:mt-0 mt-5'>
              <div className='w-full md:w-[300px] xl:w-[400px] mx-auto bg-black/50 rounded-xl border-4 p-6 text-white'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
