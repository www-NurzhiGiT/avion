import axios from "../axios/indext.js";
import React, { createContext, useContext, useEffect, useState } from "react";

export const DataUser = createContext();

export const createUser = async (user) => {
  const { data } = await axios.post("users/", user);
  return data;
};

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const DataContext = createContext();

const AppContext = ({ children }) => {
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const getProducts = async () => {
    try {
      const { data } = await axios.get();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = (item) => {
    setCart((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };
  // const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const value = {
    user,
    products,
    cart,
    addToCart,
    clearCart,
    // cartCount,
    calculateTotal,
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products, "teats");
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default AppContext;
