import React from 'react';
import contactBackground from '../../../../public/images/contactBackground.png'
import Image from 'next/image';
import { products } from '@/data/mocks/MockProducts';

export const metadata = {
  title: 'Detalle',
  description: 'detalle de tu producto',
}

const productDetail = ({params}) => {
  const { productId } = params;
  const productList = products;
  const productTobeDetail = productList.find(product => product.id === productId)

    return (
      <div className="relative overflow-hidden">
        <div className="fixed inset-0 z-[-1]">
          <Image
            src={contactBackground}
            alt="Landing-image"
            className="sticky inset-0 w-screen z-0"
            objectFit="cover"
          />
        </div>
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
                        <div className="text-contrast-500 text-left text-xl font-semibold">{productTobeDetail.price}</div>
                      </div>
                      <p className="text-sm text-center text-contrast-800">{productTobeDetail.numberOfInstallments}</p>
                  </div>
                  <button className="bg-contrast-500 hover:bg-contrast-300 text-contrast-100 p-3 rounded-md mt-4 w-1/4">
                    Agregar al carrito
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
};

export default productDetail;