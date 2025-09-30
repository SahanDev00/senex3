import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../Components/CartContext"; // Import CartContext

const ProductDescription = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false); // State for showing the message
  const [view, setView] = useState("description"); // State for toggling between description and specifications
  const [selectedImage, setSelectedImage] = useState(
    `https://admin.senex.lk/Uploads/${product.cacheID}.png`
  ); // State for selected image
  const [specifications, setSpecifications] = useState([]); // State for specifications
  const { addToCart } = useContext(CartContext); // Use CartContext
  const [thumbnails, setThumbnails] = useState([]); // State for thumbnails

  useEffect(() => {
    // Fetch image data
    const apiKey = process.env.REACT_APP_API_KEY;
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://admin.senex.lk/Api/ImageData/${product.itemID}`,
          {
            headers: {
              APIKey: apiKey,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          const imageUrls = data.data.map(
            (image) => `https://admin.senex.lk/Uploads/${image.imageID}.png`,
            {
              headers: {
                APIKey: apiKey,
              },
            }
          );
          setThumbnails(imageUrls);
          setSelectedImage(imageUrls[0]); // Set the first image as the selected image
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [product.itemID]);

  useEffect(() => {
    // Fetch specifications data
    const fetchSpecifications = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      try {
        const response = await fetch(
          "https://admin.senex.lk/Api/Specification?ItemID=" + product.itemID,
          {
            headers: {
              APIKey: apiKey,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setSpecifications(data.data);
        }
      } catch (error) {
        console.error("Error fetching specifications:", error);
      }
    };

    fetchSpecifications();
  }, [product.itemID]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity); // Pass product and quantity to the cart
    setShowMessage(true); // Show success message
    setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
  };

  // Ensure product.price is a number
  const formatPrice = (price) => {
    const num = parseFloat(price);
    return isNaN(num) ? "0.00" : num.toFixed(2);
  };

  return (
    <div className="w-full max-h-[80vh] sm:max-h-[70vh] overflow-auto">
      <h1 className="text-2xl font-bold mb-3 font-poppins">
        {product.itemName}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {/* Main Image */}
          <img
            src={selectedImage}
            alt={product.itemName}
            className="w-full mb-4"
          />

          {/* Thumbnails */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {thumbnails.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover mx-auto cursor-pointer ${
                  selectedImage === image ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 font-poppins">
            {product.itemName}
          </h2>
          <p className="text-gray-600 mb-4 font-poppins">
            Rs.{formatPrice(product.retailPrice)}
          </p>

          {/* Stock Status */}
          <p
            className={`mb-4 ${
              product.stockBalance > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {product.stockBalance > 0 ? "In Stock" : "Out of Stock"}
          </p>

          {/* Toggle Buttons */}
          <div className="flex mb-4">
            <button
              onClick={() => setView("description")}
              className={`md:py-2 md:px-4 md:text-[16px] text-sm py-1 px-2 font-poppins ${
                view === "description"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded-l focus:outline-none`}
            >
              Description
            </button>
            <button
              onClick={() => setView("specifications")}
              className={`md:py-2 md:px-4 md:text-[16px] text-sm py-1 px-2 font-poppins ${
                view === "specifications"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded-r focus:outline-none`}
            >
              Specifications
            </button>
          </div>

          {/* Content Area */}
          <div className="mb-4">
            {view === "description" ? (
              <p className="md:text-[16px] text-sm">
                {product.itemDescription}
              </p>
            ) : (
              <ul>
                {specifications.length > 0 ? (
                  specifications.map((spec, index) => (
                    <li key={index} className="mb-2">
                      <span className="font-semibold font-poppins md:text-[16px] text-sm">
                        {spec.caption}:
                      </span>{" "}
                      {spec.description}
                    </li>
                  ))
                ) : (
                  <p className="md:text-[16px] text-sm">
                    No specifications available.
                  </p>
                )}
              </ul>
            )}
          </div>

          {/* Quantity Adjustment */}
          <div className="flex items-center mb-4">
            <button
              onClick={handleDecrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l focus:outline-none"
              disabled={product.stockBalance <= 0} // Disable if out of stock
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border-t border-b border-gray-200 focus:outline-none"
            />
            <button
              onClick={handleIncrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r focus:outline-none"
              disabled={product.stockBalance <= 0} // Disable if out of stock
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className={`bg-blue-500 font-poppins text-white py-2 px-4 rounded ${
              product.stockBalance <= 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={product.stockBalance <= 0} // Disable if out of stock
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Notification Message */}
      {showMessage && (
        <div className="fixed top-4 font-poppins left-4 bg-green-500 text-white md:py-2 md:px-4 md:text-[16px] text-sm py-1 px-2 rounded shadow-lg">
          Added to Cart
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
