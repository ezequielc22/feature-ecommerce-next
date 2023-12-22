import ProductTable from '@/components/ui/ProductTable';
import React from 'react';
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/config";

export const metadata = {
    title: 'Admin',
  }
  const getProducts = async () => {
    const productsRef = collection(db, "products");
    const querySnapshot = await getDocs(productsRef)
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
  }
const AdminPanel = async() => {
  const products = await getProducts();
  return (
    <ProductTable products={products} />
  );
};

export default AdminPanel;