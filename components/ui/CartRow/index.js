"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import QuantityButton from '../QuantiyButton';

const CardRow = (props) => {
  const { item, removeItem, addItem } = props;
  const { product, quantity } = item
  const [ammountToAdd, setAmmountToAdd] = useState(quantity);
  let itemPrice = product.discountedPrice || product.price;
  let totalInRow = (itemPrice * ammountToAdd.toFixed(2));

  const handleRemove = () =>{
    removeItem(product);
  }
  useEffect(() => {
    addItem(product,ammountToAdd)
  }, [ammountToAdd])

  return (
    <div className="flex justify-between items-center p-4">
      <div className='flex justify-between items-start space-x-8 max-w-[50%]'>
        <Image src={`/images/template${product.id}.png`} alt="Product" width={70} height={180} className="object-cover" />
        <div className="flex-shrink-0 mr-4">
          <span className="font-bold truncate flex">{product.name}</span>
          <QuantityButton ammountToAdd={ammountToAdd} setAmmountToAdd={setAmmountToAdd}/>
        </div>
      </div>
      <div className="ml-4 flex items-center space-x-2">
      <p className="text-contrast-400 font-bold">$ {totalInRow}</p>
      <Image onClick={handleRemove} src="/icons/trash.svg" alt="icon" width={16} height={16} className=" object-cover"/>
      </div>
    </div>
  );
};

export default CardRow;


