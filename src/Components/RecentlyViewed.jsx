import React, { useEffect, useState, useContext } from 'react';
import Slider from 'react-slick';
import { Categories } from '../products';
import ProductDescription from './ProductDescription';
import { CartContext } from '../Components/CartContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomDots = ({ dots }) => {
  const totalDots = dots.length;
  const currentIndex = dots.findIndex(dot => dot.props.className.includes('slick-active'));
  const startIndex = Math.max(0, currentIndex - 1);
  const endIndex = Math.min(totalDots, startIndex + 3);
  
  return (
    <ul className="slick-dots">
      {dots.slice(startIndex, endIndex).map((dot, index) => (
        <li key={index} className={dot.props.className}>
          {dot}
        </li>
      ))}
    </ul>
  );
};

const RecentlyViewed = () => {

  const [bestSellingItems, setBestSellingItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const allProducts = Categories.flatMap(category =>
      category.subCat.flatMap(subCategory => subCategory.products)
    );

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const randomProducts = shuffleArray(allProducts).slice(0, 10);
    setBestSellingItems(randomProducts);
  }, []);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    if (product.stock > 0) {
      addToCart(product);
      setMessage(`${product.name} has been added to the cart.`);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 2,
    appendDots: dots => <CustomDots dots={dots} />,
    responsive: [
      {
        breakpoint: 1890,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1235,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <div className='w-[95%] bg-black/30 flex mx-auto mt-16 relative border-gray-500 items-center rounded-xl justify-center mb-16'>
      <div className='w-[95%] h-[95%]'>
        <p className='flex justify-center uppercase text-sm font-semibold text-white mt-5 font-mono'>Recemended for you</p>
        <h1 className='font-semibold text-2xl sm:text-3xl text-center text-white font-poppins'>RECENTLY VIEWED ITEMS</h1>

        <div className='mt-4 w-[80%] mx-auto sm:w-full h-[370px]'>
          <Slider {...settings}>
            {bestSellingItems.map((product) => (
              <div key={product.id} className='p-4'>
                <div
                  className='sm:w-[260px]  bg-black/60 hover:scale-105 duration-300 rounded-xl mx-auto p-4 shadow hover:shadow-md border border-gray-500 flex-shrink-0 cursor-pointer'
                  onClick={() => setSelectedProduct(product)}
                >
                  <img className='w-full h-40 object-cover mb-4 rounded-xl border-white' src={product.image} alt={product.name} />
                  <h1 className='text-xl text-center mt-2 font-poppins font-semibold text-white'>{product.name}</h1>
                  <p className='text-white text-center font-poppins'>${product.price}</p>
                  <p className={`text-center font-poppins mb-2 ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </p>
                  <button
                    className={`py-2 font-poppins flex mx-auto px-4 rounded mt-2 ${product.stock > 0 ? 'bg-red-500 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={product.stock <= 0}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {showMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50">
          {message}
        </div>
      )}

      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-3/4 max-w-4xl relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <ProductDescription product={selectedProduct} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentlyViewed;
