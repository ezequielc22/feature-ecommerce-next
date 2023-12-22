import React from 'react';
import contactBackground from '../../../../public/images/contactBackground.png'
import Image from 'next/image';
import ProductDetail from '@/components/ui/ProductDetail';
import { getDoc,doc } from "firebase/firestore";
import { db } from "@/firebase/config";

const getProduct = async (productId) => {
  const productRef = doc(db, 'products', productId);
    const querySnapshot = await getDoc(productRef);
  return querySnapshot.data();
}

const productDetailPage = async({params}) => {
  const { productId } = params;
  const productTobeDetail = await getProduct(productId);
  
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