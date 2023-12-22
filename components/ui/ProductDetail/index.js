"use client"
import React, { useState, useContext } from 'react';
import { CartContext } from "@/context/CartContext";
import Image from 'next/image';
import QuantityButton from '../QuantiyButton';

const ProductDetail = (props) => {
    const { productId, productTobeDetail } = props
    const [ammountToAdd, setAmmountToAdd] = useState(0)
    const { addItem } = useContext(CartContext);
    let itemPrice = productTobeDetail.hasDiscount ? productTobeDetail.price*0.6 : productTobeDetail.price;
    let numberOfInstallments = (itemPrice / 3).toFixed(2);
    const addToCart = () => {
      addItem(productTobeDetail, ammountToAdd)
  };
  
  return (
    <div>
    <div className="bg-gradient-to-t from-contrast-200 to-contrast-100 border-contrast-400 p-4 shadow-md rounded-md 
      w-3/5 h-screen mx-auto m-10 text-center flex items-center justify-center">
        <div className="flex items-center h-auto max-w-1/8">
          <div className='flex w-1/2 items-center pr-2'>
            <Image src={`/images/template${productId}.png`} alt="image" width={400} height={900} className="object-cover" />
          </div>
          <div className='flex flex-col w-1/2 items-center'>
            <div className=' p-4 bg-contrast-50 rounded-md shadow-md text-center w-full h-fit space-y-10'>
                <h2 className="text-4xl text-left text-contrast-600 ">{productTobeDetail.name}</h2>
                <p className="text-contrast-500">{productTobeDetail.description}</p>
                <div className="flex justify-center items-center gap-2">
                  <div className="text-contrast-500 text-left text-xl font-semibold">$ {itemPrice}</div>
                </div>
                <p className="text-sm text-center text-contrast-800">{`3 cuotas sin interes de $ ${numberOfInstallments}`}</p>
            </div>
            <div className='flex justify-between'>
                <QuantityButton ammountToAdd={ammountToAdd} setAmmountToAdd={setAmmountToAdd}/>
                <button onClick={addToCart} className={`bg-contrast-500 hover:bg-contrast-300 text-contrast-100 m-4 rounded-md w-1/2 
                ${ammountToAdd === 0 && 'cursor-not-allowed opacity-50'}`}>
                    Agregar al carrito
                </button>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
};

export default ProductDetail;