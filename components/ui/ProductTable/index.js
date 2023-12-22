"use client"
import React,{ useState } from 'react';
import ProductForm from '../ProductForm';
import Image from 'next/image';

const ProductTable = (props) => {
    const { products } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [isEdition, setIsEdition] = useState(null);
    const openEditModal = (product) => {
        setIsEdition(true);
        setEditingProduct(product);
        setIsModalOpen(true);
      };
    
      const openAddModal = () => {
        setIsEdition(false);
        setEditingProduct(null);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsEdition(true);
        setEditingProduct(null);
        setIsModalOpen(false);
      };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-contrast-600">Panel de Administración</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-contrast-600">ID</th>
            <th className="py-2 px-4 border-b text-contrast-600">NOMBRE</th>
            <th className="py-2 px-4 border-b text-contrast-600">PRECIO</th>
            <th className="py-2 px-4 border-b text-contrast-600">IMAGEN</th>
            <th className="py-2 px-4 border-b text-contrast-600">STOCK</th>
            <th className="py-2 px-4 border-b text-contrast-600">DESCRIPCION</th>
            <th className="py-2 px-4 border-b  text-contrast-400">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b text-contrast-400">{product.id}</td>
              <td className="py-2 px-4 border-b text-contrast-400">{product.name}</td>
              <td className="py-2 px-4 border-b text-contrast-400">{product.hasDiscount ? (product.price*0.6).toFixed(2) : product.price}</td>
              <td className="py-2 px-4 border-b">
                <Image src={product.image} alt="image" width={8} height={8} className="mr-2 w-auto object-cover" />
              </td>
              <td className="py-2 px-4 border-b text-contrast-400">{product.stock}</td>
              <td className="py-2 px-4 border-b text-contrast-400">{product.description}</td>
              <td className="py-2 px-4 border-b space-y-3">
                <button 
                onClick={() => openEditModal(product)}
                className="bg-contrast-400 text-white py-1 px-2 mr-2 rounded-md">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <button 
        onClick={openAddModal}
        className="bg-contrast-500 hover:bg-contrast-300 text-contrast-100 p-3 rounded-md mt-4 w-1/4">
        Agregar Producto
        </button>
        {isModalOpen && (
        <ProductForm
          isEdition={isEdition}
          initialProduct={editingProduct}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProductTable;