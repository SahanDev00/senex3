import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  // Sample order data
  const orders = [
    {
      id: '123456',
      address: '123 Main St, City, Country',
      date: '2024-07-19',
      total: '$150.00',
      status: 'Pending',
      paidStatus: 'Not Paid'
    },
    {
      id: '789012',
      address: '456 Elm St, City, Country',
      date: '2024-07-18',
      total: '$250.00',
      status: 'Completed',
      paidStatus: 'Paid'
    },
    {
      id: '345678',
      address: '789 Oak St, City, Country',
      date: '2024-07-17',
      total: '$75.00',
      status: 'Rejected',
      paidStatus: 'Not Paid'
    },
  ];

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
              <tr key={order.id}>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.id}</td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.address}</td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.date}</td>
                <td className='px-4 py-2 border-b border-gray-200 font-poppins'>{order.total}</td>
                <td className={`px-4 py-2 border-b border-gray-200 font-poppins ${order.status === 'Pending' ? 'text-yellow-500' : order.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.status}
                </td>
                <td className={`px-4 font-poppins py-2 border-b border-gray-200 ${order.paidStatus === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                  {order.paidStatus}
                </td>
                <td className='px-4 font-poppins py-2 border-b border-gray-200'>
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
