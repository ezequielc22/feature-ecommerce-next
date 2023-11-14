import React from 'react';
import { products } from '@/data/mocks/MockProducts';

const AdminPanel = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-contrast-600">Panel de Administración</h1>
      
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-contrast-600">ID</th>
            <th className="py-2 px-4 border-b text-contrast-600">NOMBRE</th>
            <th className="py-2 px-4 border-b text-contrast-600">PRECIO</th>
            <th className="py-2 px-4 border-b text-contrast-600">PRECIO_CON_DESCUENTO</th>
            <th className="py-2 px-4 border-b text-contrast-600">DESCRIPCION</th>
            <th className="py-2 px-4 border-b  text-contrast-400">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b text-contrast-400">{product.name}</td>
              <td className="py-2 px-4 border-b text-contrast-400">{product.price}</td>
              <td className="py-2 px-4 border-b text-contrast-400">{product.stock}</td>
              <td className="py-2 px-4 border-b text-contrast-400">{product.slug}</td>
              <td className="py-2 px-4 border-b text-contrast-400">{product.description}</td>
              <td className="py-2 px-4 border-b space-y-3">
                <button className="bg-contrast-400 text-white py-1 px-2 mr-2 rounded-md">Editar</button>
                <button className="bg-contrast-200 text-contrast-700 py-1 px-2 rounded-md">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        <button className="bg-contrast-500 hover:bg-contrast-300 text-contrast-100 p-3 rounded-md mt-4 w-1/4">
        Agregar Producto
        </button>
    </div>
  );
};

export default AdminPanel;