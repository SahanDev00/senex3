import React from 'react'
import pic from '../Assets/Images/computer.webp'

const OrderDetails = () => {

    const orders = [
        {
            product: 'RGB Keyboard',
            pic: pic,
            quantity: '4',
            price: '$150.00',
            discount: '0',
            total: '$150.00'
          },
          {
            product: 'RGB Keyboard',
            pic: pic,
            quantity: '4',
            price: '$150.00',
            discount: '0',
            total: '$150.00'
          },
          {
            product: 'RGB Keyboard',
            pic: pic,
            quantity: '4',
            price: '$150.00',
            discount: '0',
            total: '$150.00'
          },
        {
          product: 'RGB Keyboard',
          pic: pic,
          quantity: '4',
          price: '$150.00',
          discount: '0',
          total: '$150.00'
        },
      ];

  return (
    <div className='w-full min-h-[820px] mb-5 mx-auto relative'>
        <h1 className='text-3xl text-center my-8 font-bold text-white font-poppins'>Order Details : 0987643</h1>
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
            {orders.map(order => (
              <tr key={order.id}>
                <td className='px-4 py-2 border-b border-gray-200'><img className='w-[60px] inline-block mr-5' src={order.pic} alt="" />{order.product}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{order.quantity}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{order.price}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{order.discount}</td>
                <td className='px-4 py-2 border-b border-gray-200 text-center font-poppins'>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderDetails