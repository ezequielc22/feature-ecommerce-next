"use client"
import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import QuantityButton from '../QuantiyButton';
import { CartContext } from "@/context/CartContext"

const ProductCard = (props) => {
    const { product } = props;
    const [ammountToAdd, setAmmountToAdd] = useState(0)
    let numberOfInstallments = product.discountedPrice? (product.discountedPrice / 3).toFixed(2) : (product.price / 3).toFixed(2);
    const { addItem } = useContext(CartContext);

    const addToCart = () => {
        addItem(product,ammountToAdd)
    };

  return (
    <div className="bg-gradient-to-t from-contrast-200 to-contrast-100 border-contrast-400 p-4 shadow-md rounded-md 
    w-50 m-10 text-center">
        <div className='flex justify-center items-center p-2'>
            <Image src={`/images/template${product.id}.png`} alt="image" width={200} height={600} className="mr-2 w-auto object-cover" />
        </div>
        <Link href={`/Catalogo/Detalle/${product.id}`}>
            <div className=' p-4 bg-contrast-50 rounded-md shadow-md text-center max-w-xs h-50 hover:bg-contrast-200'>
                <h2 className="text-lg text-contrast-600 line-clamp-1 overflow-hidden">{product.name}</h2>
                {product.discountedPrice ?
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-contrast-300 line-through">$ {product.price}</div>
                        <div className="text-contrast-500 text-xl font-semibold">$ {product.discountedPrice}</div>
                    </div>
                    :
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-contrast-500 text-xl font-semibold">$ {product.price}</div>
                    </div>
                }
                <p className="text-sm text-contrast-800">{`3 cuotas sin interes de $ ${numberOfInstallments}`}</p>
            </div>
        </Link>
        <div className='flex justify-between'>
            <QuantityButton ammountToAdd={ammountToAdd} setAmmountToAdd={setAmmountToAdd}/>
            <button onClick={addToCart} className={`bg-contrast-500 hover:bg-contrast-300 text-contrast-100 m-4 rounded-md w-1/2 
            ${ammountToAdd === 0 && 'cursor-not-allowed opacity-50'}`}>
                Agregar al carrito
            </button>
        </div>
       
    </div>
  );
};

export default ProductCard;