import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const [orderItems, setOrderItems] = useState([]);
  const { orderID } = useParams();

  useEffect(() => {
    const fetchOrderItems = async () => {
      const api = `https://extremeadmin.worldpos.biz/Api/OrderItem?Page=0&OrderID=${orderID}`;
      
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(api, {
          method: 'GET',
          headers: {
            'APIKey': apiKey,
          },
        });
        const result = await response.json();
        
        if (response.ok && result.success) {
          setOrderItems(result.data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrderItems();
  }, [orderID]);

  if (orderItems.length === 0) {
    return <div className='text-white'>No order details available</div>;
  }

  return (
    <div className='w-full min-h-[750px] mb-5 mx-auto relative'>
      <h1 className='text-3xl text-center my-8 font-bold text-white font-poppins'>Order Details: {orderID}</h1>
      <div className='overflow-x-auto container mx-auto'>
        <table className='min-w-full bg-black/70 text-white border border-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Product</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Quantity</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Price</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Discount</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Total</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map(item => (
              <tr key={item.orderItemID}>
                <td className='px-4 py-2 border-b border-gray-200'>
                  <img className='w-[60px] inline-block mr-5' src={`https://extremeadmin.worldpos.biz/Uploads/${item.itemID}.jpg`} alt={item.itemName} />
                  {item.itemName}
                </td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{item.itemQty}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{item.itemPriceDisplay}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{item.itemDiscountDisplay}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{item.lineTotalDisplay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
