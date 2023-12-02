"use client"
import React, { useContext } from 'react';
import CardRow from '../../components/ui/CartRow/index';
import { wordingsLayout } from '../../data/mocks/MockWordings';
import Link from 'next/link';
import { CartContext } from "@/context/CartContext"


const CartPage = () => {
  const { cartWordings } = wordingsLayout;
  const { cartItems, removeItem, addItem, total } = useContext(CartContext);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <hr className="my-4 border-t border-contrast-300" />
      <h2 className="text-2xl font-semibold mb-4 flex justify-center text-contrast-500">MI CARRITO</h2>
      {cartItems ?
        (cartItems.map((item, index)=>
          <CardRow key={index} item={item} removeItem={removeItem} addItem={addItem} />
        ))
      : null
      }
      <hr className="my-4 border-t border-contrast-300" />
      <div className="flex justify-between items-center text-contrast-600">
        <span>{cartWordings.total}</span>
        <span>$ {total}</span>
      </div>
      <div className='flex flex-col items-center'>
        <button className="bg-contrast-500 hover:bg-contrast-300 text-contrast-100 p-3 rounded-md mt-4 w-1/4">
          COMPRAR
        </button>
        <Link href="/">
          <div className="text-contrast-500 text-sm underline hover:text-contrast-300">Seguir Viendo</div>
        </Link>
      </div>

    </div>
  );
};

export default CartPage;