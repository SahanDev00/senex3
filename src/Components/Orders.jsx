import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order data from API
    const fetchOrders = async () => {
      const api = 'https://extremeadmin.worldpos.biz/Api/Order?CustomerID=CUS_00001';
      
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const response = await fetch(api,  {
          method: 'GET',
          headers: {
            'APIKey': apiKey,
          },});
        const result = await response.json();
        
        if (response.ok && result.success) {
          setOrders(result.data);
        } else {
          console.error('Error fetching orders:', result.errorMessage);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrders();
  }, []);

  if (orders.length === 0) {
    return <div className='text-white h-[85vh] w-[80%] mx-auto relative'>
      <h1 className='font-semibold mt-5'>You Don't Have Orders Yet!!!</h1>
    </div>
  }

  return (
    <div className='w-[90%] md:min-h-[700px] lg:min-h-[650px] xl:min-h-[700px] 2xl:min-h-[800px] relative mx-auto px-4 py-8 mb-5'>
      <h1 className='text-2xl font-bold mb-5 text-white font-poppins'>Track My Orders</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-black/70 text-white border border-gray-200'>
          <thead>
            <tr>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Order ID</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Address</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Date</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Total</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Status</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Paid Status</th>
              <th className='px-4 py-2 border-b border-gray-200 font-poppins'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.orderID}>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.orderID}</td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.addressDisplay}</td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.orderDateDisplay}</td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.itemTotalDisplay}</td>
                <td className={`px-4 py-2 border-b border-gray-200 font-poppins ${order.orderStatusClass === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.orderStatusText}
                </td>
                <td className={`px-4 py-2 border-b border-gray-200 font-poppins ${order.paidStatusClass === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.paidStatusText}
                </td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>
                    <Link to='/order-details'>
                        <button className='bg-blue-500 font-poppins text-white px-4 py-2 rounded hover:bg-blue-600'>
                            View
                        </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
