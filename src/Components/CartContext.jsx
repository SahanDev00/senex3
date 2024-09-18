import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const clearCart = () => setCartItems([]);

  useEffect(() => {
    // Save cartItems to localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(item => item.itemID === product.itemID);
  
      if (existingProductIndex !== -1) {
        // If the product is already in the cart, increase the quantity
        const updatedCartItems = [...prevItems];
        updatedCartItems[existingProductIndex].quantity = (updatedCartItems[existingProductIndex].quantity || 1) + 1;
        return updatedCartItems;
      } else {
        // Add new product to the cart with default quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  
  

  const removeFromCart = (itemID) => {
    setCartItems(prevItems => prevItems.filter(item => item.itemID !== itemID));
  };

  const updateQuantity = (itemID, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map(item => 
        item.itemID === itemID ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotalItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
