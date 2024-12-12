import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function BasicDemo({ product }) {
    const [images, setImages] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        if (product) {
            setImages(product.map((subImage, index) => ({
                itemID: index, // Using index as a unique identifier
                itemImageSrc: 'http://senex.exesmart.com/Uploads/ITM_00021.jpg', // Static image URL
                thumbnailImageSrc: 'http://senex.exesmart.com/Uploads/ITM_00021.jpg', // Static image URL
                alt: subImage.alt || 'Image' // Default alt text if none provided
            })));
        }
    }, [product]);

    const itemTemplate = (item) => (
        <img className='bg-white' src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    );

    const thumbnailTemplate = (item) => (
        <img className='md:block hidden' src={item.thumbnailImageSrc} alt={item.alt} />
    );
    
    return (
        <div className="card bg-white">
            <Galleria
                value={images} 
                responsiveOptions={responsiveOptions} 
                numVisible={5} 
                style={{ maxWidth: '640px' }} 
                item={itemTemplate} 
                thumbnail={thumbnailTemplate} 
                circular
                autoPlay
                transitionInterval={4000}
                showItemNavigators
                showThumbnails
            />
        </div>
    );
}
