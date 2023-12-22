import React from 'react';
import ProductsContainer from '@/components/ui/containers/ProductsContainer';
import catalogBackground from '../../public/images/catalogBackground.png';
import Image from 'next/image';

export const metadata = {
  title: 'Catalogo',
  description: 'Listado de mates artesanales de alpaca, hierro, oro, plata. Explora nuestra amplia selección de mates. Encuentra el mate perfecto para ti en nuestra tienda en línea.',
}

const CatalogPage = async() => {
  const products = await fetch('http://localhost:3000/api/products',
  {cache: "no-store"}
    ).then(r => r.json());
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 z-[-1]">
        <Image
          src={catalogBackground}
          alt="Fondo del catálogo de mates"
          className="sticky inset-0 w-screen z-0"
        />
      </div>
      
      <div className="relative z-10">
        <ProductsContainer products={products}/>
      </div>
    </div>
  );
};

export default CatalogPage;
