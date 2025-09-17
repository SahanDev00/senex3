import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../Components/CartContext";
import ProductDescription from "./ProductDescription";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("specialOffers");
  const [specialOffers, setSpecialOffers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState("");

  // Fetch special offers
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (activeTab === "specialOffers") {
      fetch("https://admin.senex.lk/Api/Item?KeyW=tower&IsSpecial=y", {
        method: "GET",
        headers: {
          APIKey: apiKey,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSpecialOffers(data.data);
          }
        })
        .catch((error) =>
          console.error("Error fetching special offers:", error)
        );
    }
  }, [activeTab]);

  // Fetch new arrivals
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (activeTab === "newArrivals") {
      fetch("https://admin.senex.lk/Api/Item?KeyW=tower&IsNew=y", {
        method: "GET",
        headers: {
          APIKey: apiKey,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setNewArrivals(data.data);
          }
        })
        .catch((error) => console.error("Error fetching new arrivals:", error));
    }
  }, [activeTab]);

  const handleAddToCart = (product) => {
    if (product.stockBalance > 0) {
      addToCart(product);
      setNotification(`${product.itemName} has been added to the cart.`);
      setTimeout(() => {
        setNotification("");
      }, 3000);
    } else {
      setNotification(`${product.itemName} is out of stock.`);
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  return (
    <div className="font-poppins mt-20 mx-auto w-[90%]">
      <div className="flex border-b border-white/20 mb-4">
        <button
          className={`py-2 px-4 text-xl font-semibold ${
            activeTab === "specialOffers"
              ? "border-b-2 border-red-500 text-red-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("specialOffers")}
        >
          Special Offers
        </button>
        <button
          className={`py-2 px-4 text-xl font-semibold ${
            activeTab === "newArrivals"
              ? "border-b-2 border-red-500 text-red-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("newArrivals")}
        >
          New Arrivals
        </button>
      </div>

      <div className="p-4">
        {activeTab === "specialOffers" && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-white">
              Special Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 font-poppins mt-5">
              {specialOffers.map((product) => (
                <div
                  key={product.itemID}
                  className="product-card p-4 shadow-md border rounded hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={
                      `https://admin.senex.lk/Uploads/${product.cacheID}.jpeg` ||
                      "placeholder.jpg"
                    }
                    alt={product.itemName}
                    className="w-full mx-auto"
                  />
                  <h2 className="text-xl font-bold text-white text-center mt-1">
                    {product.itemName}
                  </h2>
                  <p className="text-xl text-white text-center">
                    ${product.retailPrice}
                  </p>
                  <p
                    className={`text-center ${
                      product.stockBalance > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.stockBalance > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                  <button
                    className={`mt-2 text-xs md:text-sm flex mx-auto ${
                      product.stockBalance > 0 ? "bg-red-500" : "bg-gray-500"
                    } text-white py-2 px-4 rounded`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    disabled={!product.stockBalance > 0}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "newArrivals" && (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-white">New Arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 font-poppins mt-5">
              {newArrivals.map((product) => (
                <div
                  key={product.itemID}
                  className="product-card p-4 shadow-md border rounded hover:scale-105 duration-300 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={
                      `https://admin.senex.lk/Uploads/${product.cacheID}.jpeg` ||
                      "placeholder.jpg"
                    }
                    alt={product.itemName}
                    className="w-full mx-auto"
                  />
                  <h2 className="text-xl mt-1 font-bold text-white text-center">
                    {product.itemName}
                  </h2>
                  <p className="text-xl text-white text-center">
                    ${product.retailPrice}
                  </p>
                  <p
                    className={`text-center ${
                      product.stockBalance > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {product.stockBalance > 0 ? "In Stock" : "Out of Stock"}
                  </p>
                  <button
                    className={`mt-2 text-xs md:text-sm flex mx-auto ${
                      product.stockBalance > 0 ? "bg-red-500" : "bg-gray-500"
                    } text-white py-2 px-4 rounded`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    disabled={product.stockBalance <= 0}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white md:py-2 md:px-4 md:text-[16px] text-sm py-1 px-2 rounded shadow-lg z-50">
          {notification}
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

export default Tabs;
