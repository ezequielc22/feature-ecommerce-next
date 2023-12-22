import ProductTable from '@/components/ui/ProductTable';
import React from 'react';

export const metadata = {
    title: 'Admin',
  }
const AdminPanel = async() => {
  const products = await fetch('http://localhost:3000/api/products',
  {cache: "no-store"}
  ).then(r => r.json());
  return (
    <ProductTable products={products} />
  );
};

export default AdminPanel;