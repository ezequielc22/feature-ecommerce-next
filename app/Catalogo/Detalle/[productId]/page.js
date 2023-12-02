import React from 'react';
import contactBackground from '../../../../public/images/contactBackground.png'
import Image from 'next/image';
import ProductDetail from '@/components/ui/ProductDetail';


const productDetailPage = async({params}) => {
  const { productId } = params;
  const productTobeDetail = await fetch(`http://localhost:3000/api/products/${productId}`,
  {cache: "no-store"}
  ).then(r => r.json());
  
    return (
      <div className="relative overflow-hidden">
        <div className="fixed inset-0 z-[-1]">
          <Image
            src={contactBackground}
            alt="Landing-image"
            className="sticky inset-0 w-screen z-0 object-cover"
          />
        </div>
        <ProductDetail productId={productId} productTobeDetail={productTobeDetail}/>
      </div>
    );
};

export default productDetailPage;