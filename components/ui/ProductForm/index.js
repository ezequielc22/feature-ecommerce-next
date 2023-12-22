"use client"
import React, { useState, useEffect } from 'react';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from "@/firebase/config"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import Loading from '@/app/loading';

const submitProduct = async (values, file) =>{

    const storageRef = ref(storage, values.id)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL( fileSnapshot.ref )

    const docRef = doc(db, "products", values.id)
    return setDoc(docRef, {
        id: values.id,
        price: Number(values.price),
        name: values.name,
        hasDiscount: Boolean(values.hasDiscount),
        stock: Number(values.stock),
        description: values.description,
        image: fileURL
    }).then(() => console.log("Producto creado"))
}
const updateProduct = async (id, values) => {
    const docRef = doc(db, "products", id)
    return updateDoc(docRef, {
        id: values.id,
        price: Number(values.price),
        name: values.name,
        hasDiscount: Boolean(values.hasDiscount),
        stock: Number(values.stock),
        description: values.description,
        image: values.image
    })
        .then(() => console.log("Producto actualizado"))
}

const ProductForm = ({ initialProduct, onClose, isEdition }) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: 0,
    hasDiscount: false,
    stock: 0,
    description: '',
    ...initialProduct,
  });
  const [file, setFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    initialProduct ? setProduct({...initialProduct,}) 
    : setProduct({
        id: '',
        price: 0,
        name: '',
        hasDiscount: false,
        stock: 0,
        description: '',
      });
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if((type === 'checkbox')){
        setProduct({
            ...product,
            [name]: checked
        })
    }
    if((type === 'number')){
        setProduct({
            ...product,
            [name]: Number(value)
        })
    }
    else{
        setProduct({
            ...product,
            [name]: value
        })
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdition) {
        await updateProduct(initialProduct.id, product);
      } else {
        await submitProduct(product, file);
      }
      onClose();
    } catch (error) {
      console.error('Error:', error);
    } finally {
        window.location.reload();
    }
  };

  return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md">
        <form className="bg-white p-6 rounded-md max-w-2xl w-full max-h-70vh overflow-auto">
        <div className="grid grid-cols-1 gap-4">
            {isEdition ? null : <div>
            <label htmlFor="id" className="text-contrast-600">
                ID:
            </label>
            <input
                type="text"
                name="id"
                value={product.id}
                onChange={handleChange}
                className="w-full p-2 border"
            />
            </div>}

            <div>
            <label htmlFor="nombre" className="text-contrast-600">
                NOMBRE:
            </label>
            <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full p-2 border"
            />
            </div>
            {isEdition ? null : <div>
            <label htmlFor="imagen" className="text-contrast-600">
                IMAGEN:
            </label>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="p-2 rounded w-full border border-blue-100 block my-4"
            />
            </div>}
            <div>
            <label htmlFor="precio" className="text-contrast-600">
                PRECIO:
            </label>
            <input
                type="number"
                name="price"
                value={product.hasDiscount == true ? (product.price*0.6).toFixed(2) : product.price}
                onChange={handleChange}
                className="w-full p-2 border"
            />
            </div>
            <div className="flex items-center">
                <input
                type="checkbox"
                id="hasDiscount"
                name="hasDiscount"
                checked={product.hasDiscount}
                onChange={handleChange}
                className="mr-2"
                />
                <label htmlFor="hasDiscount" className="text-contrast-600">
                Descuento (60%)
                </label>
            </div>

            <div>
            <label htmlFor="stock" className="text-contrast-600">
                STOCK:
            </label>
            <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="w-full p-2 border"
            />
            </div>

            <div>
            <label htmlFor="descripcion" className="text-contrast-600">
                DESCRIPCIÓN:
            </label>
            <input
                type="text"
                name="description"
                value={product.description}
                onChange={handleChange}
                className="w-full p-2 border"
            />
            </div>
        </div>
        <div className='flex gap-5'>
            <button
                onClick={handleSubmit}
                className="bg-contrast-500 hover:bg-contrast-300 text-contrast-100 p-3 rounded-md mt-4 w-1/2">
                Enviar
            </button>
            <button
            type="button"
            onClick={onClose}
            className="bg-contrast-500 hover:bg-contrast-300 text-contrast-100 p-3 rounded-md mt-4 w-1/2"
            >
            Cerrar
            </button>
        </div>
        </form>
        </div>
    );
};

export default ProductForm;
