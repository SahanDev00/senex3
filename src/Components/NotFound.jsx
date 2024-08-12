import React from 'react';

const NotFound = ({ searchTerm }) => {
    return (
        <div className='h-screen p-4'>
            <h2 className='text-lg ml-10 font-poppins text-white'>Sorry, the item "{searchTerm}" is not available !!!</h2>
        </div>
    );
};

export default NotFound;
