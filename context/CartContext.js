"use client"
// CartProvider.js
import React, { createContext, useReducer, useState, useEffect } from 'react';

 export const CartContext = createContext();
    const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const newItem = action.payload;
        const existingItemIndex = state.findIndex(item => item.product.id === newItem.product.id);
  
        if (existingItemIndex !== -1) {
          state[existingItemIndex].quantity = newItem.quantity;
          return [...state];
        } else {
          return [newItem, ...state];
        }
  
      case 'REMOVE_ITEM':
        const itemIdToRemove = action.payload.product.id;
        return state.filter(item => item.product.id !== itemIdToRemove);
  
      default:
        return state;
    }
  };

const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(handleTotal())
    }, [cartItems])

    const addItem = (product, quantity) => {
        dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
    };

    const removeItem = (product) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { product } });
    };
    const handleTotal = () => {  
    let aux = 0
    return (
        cartItems && cartItems.reduce((accumulator, currentValue) => {          
          return accumulator + ((currentValue.product.discountedPrice || currentValue.product.price)*currentValue.quantity)                         
        },
        aux
      )    
    )
    }
  const contextValue = {
    cartItems,
    addItem,
    removeItem,
    total,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };