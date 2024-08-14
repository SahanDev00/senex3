import React, { useState } from 'react';
import computer from "../Assets/Images/PCpng.webp";
import monitor from "../Assets/Images/monitor.webp";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('specialOffers');

  const offers = [
    {
      id: 1,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: computer
    },
    {
      id: 2,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: computer
    },
    {
      id: 3,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: computer
    },
    {
      id: 4,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: computer
    },
    {
      id: 5,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: computer
    },
  ]

  const arrivals = [
    {
      id: 1,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: monitor
    },
    {
      id: 2,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: monitor
    },
    {
      id: 3,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: monitor
    },
    {
      id: 4,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: computer
    },
    {
      id: 5,
      name: 'Computer',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, laudantium.",
      price: 1200,
      pic: computer
    },
  ]

  return (
    <div className='font-poppins mt-20 mx-auto w-[90%]'>
      {/* Tab Buttons */}
      <div className='flex border-b border-red-500 mb-4'>
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
            {/* Add more content related to Special Offers */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-poppins mt-5">
                {offers.map(product => (
                    <div key={product.id} className="product-card p-4 shadow-md border rounded">
                        <img src={product.pic} alt="" className='h-[200px] mx-auto' />
                        <h2 className="text-xl font-bold text-white">{product.name}</h2>
                        <p className='text-white/80 my-2'>{product.description}</p>
                        <p className="text-xl font-bold text-white">${product.price}</p>
                    </div>
                ))}
            </div>
          </div>
        )}
        {activeTab === 'newArrivals' && (
          <div>
            <h2 className='text-2xl font-bold mb-2 text-white'>New Arrivals</h2>
            <p className='text-white'>Check out the new arrivals in our store.</p>
            {/* Add more content related to New Arrivals */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-poppins mt-5">
                {arrivals.map(product => (
                    <div key={product.id} className="product-card p-4 shadow-md border rounded">
                        <img src={product.pic} alt="" className='h-[200px] mx-auto' />
                        <h2 className="text-xl font-bold text-white">{product.name}</h2>
                        <p className='text-white/80 my-2'>{product.description}</p>
                        <p className="text-xl font-bold text-white">${product.price}</p>
                    </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
