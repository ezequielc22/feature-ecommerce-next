"use client"
import React from 'react';
import Image from 'next/image';
import QuantityButton from '../QuantiyButton';

const CardRow = (props) => {
  const { productInCard } = props;
  return (
    <div className="flex justify-between items-center p-4">
      <div className='flex justify-between items-start space-x-8'>
        <Image src={`/images/template${productInCard.id}.png`} alt="Product" width={70} height={180} className="object-cover" />
        <div className="flex-shrink-0 mr-4">
          <span className="font-bold">{productInCard.name}</span>
          <QuantityButton/>
        </div>
      </div>
      <div className="ml-4 flex items-center space-x-2">
      <p className="text-contrast-400 font-bold">{productInCard.discountedPrice ? productInCard.discountedPrice : productInCard.price}</p>
      <Image src="/icons/trash.svg" alt="icon" width={16} height={16} className=" object-cover" />
      </div>
    </div>
  );
};

export default CardRow;


