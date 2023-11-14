import React from 'react';
import Head from 'next/head';
import ProductsContainer from '@/components/ui/containers/ProductsContainer';
import { products } from '@/data/mocks/MockProducts';
import catalogBackground from '../../public/images/catalogBackground.png';
import Image from 'next/image';

export const metadata = {
  title: 'Catalogo',
  description: 'Listado de mates artesanales de alpaca, hierro, oro, plata. Explora nuestra amplia selección de mates. Encuentra el mate perfecto para ti en nuestra tienda en línea.',
}

const CatalogPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 z-[-1]">
        <Image
          src={catalogBackground}
          alt="Fondo del catálogo de mates"
          className="sticky inset-0 w-screen z-0"
          objectFit="cover"
          layout="fill"
        />
      </div>
      
      <div className="relative z-10">
        <ProductsContainer products={products} />
      </div>
    </div>
  );
};

export default CatalogPage;
