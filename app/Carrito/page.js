import React from 'react';
import CardRow from '../../components/ui/CartRow/index';
import Dropdown from '@/components/ui/Dropdown';
import SearchBox from '@/components/ui/Navbar/SearchBox';
import { wordingsLayout } from '../../data/mocks/MockWordings';
import { cartItems } from '../../data/mocks/MockProducts';
import Link from 'next/link';

export const metadata = {
  title: 'Carrito',
  description: 'Suma tus opciones al carrito',
}

const CartPage = () => {
  const { searchShipping, cartWordings } = wordingsLayout;
  return (
    <div className="max-w-3xl mx-auto p-4">
      <hr className="my-4 border-t border-contrast-300" />
      <h2 className="text-2xl font-semibold mb-4 flex justify-center text-contrast-500">MI CARRITO</h2>
      {cartItems ?
        (cartItems.map((productInCard, index)=>
          <CardRow key={index} productInCard={productInCard} />
        ))
      : null
      }
      <hr className="my-4 border-t border-contrast-300" />
      <div className="flex justify-between items-center text-contrast-400">
        <span>{cartWordings.subtotal}</span>
        <span>{cartWordings.subtotalValue}</span>
      </div>
      <hr className="my-4 border-t border-contrast-300" />
        <Dropdown label={searchShipping.label} textSearch={searchShipping}>
          <SearchBox/>
        </Dropdown>
      <hr className="my-4 border-t border-contrast-300" />
      <div className="flex justify-between items-center text-contrast-600">
        <span>{cartWordings.total}</span>
        <span>{cartWordings.totalValue}</span>
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