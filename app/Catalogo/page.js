import React from 'react';
import ProductsContainer from '@/components/ui/containers/ProductsContainer';
import catalogBackground from '../../public/images/catalogBackground.png';
import Image from 'next/image';
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/config";

export const metadata = {
  title: 'Catalogo',
  description: 'Listado de mates artesanales de alpaca, hierro, oro, plata. Explora nuestra amplia selección de mates. Encuentra el mate perfecto para ti en nuestra tienda en línea.',
}
const getProducts = async () => {
  const productsRef = collection(db, "products");
  const querySnapshot = await getDocs(productsRef)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

const CatalogPage = async() => {
  const products = await getProducts();
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
