"use client"
import React, {useState } from 'react';
import {useAuthContext } from "@/context/AuthContext"
const AuthForm = ({isLoggin, onClose}) => {
    const { createUser, loginUser } = useAuthContext();
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
  const handleChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
    }
    const handleClick = ()=>{
        isLoggin ? loginUser(values) : createUser(values);
        window.location.reload();
    }

  return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md">
        <form className="bg-white p-6 rounded-md max-w-2xl w-full max-h-70vh overflow-auto">
        <div className="grid grid-cols-1 gap-4">
            <div>
            <label htmlFor="nombre" className="text-contrast-600">
                { isLoggin ? 'INICIAR SESION' : 'CREAR CUENTA'}
            </label>
            <input
                name="email"
                type="email"
                value={values.email}
                required
                placeholder="Tu email"
                onChange={handleChange}
                className="w-full p-2 border"
            />
            </div>
            <div>
            <input
                name="password"
                type="password"
                value={values.password}
                required
                placeholder="Tu password"
                onChange={handleChange}
                className="w-full p-2 border"
            />
            </div>
        </div>
        <div className='flex gap-5'>
            <button
                type="button"
                onClick={handleClick}
                className="bg-contrast-500 hover:bg-contrast-300 text-contrast-100 p-3 rounded-md mt-4 w-1/3">
                Continuar
            </button>
            <button
                type="button"
                onClick={onClose}
                className="bg-contrast-500 hover:bg-contrast-300 text-contrast-100 p-3 rounded-md mt-4 w-1/3">
                Cerrar
            </button>
        </div>
        </form>
        </div>
    );
};

export default AuthForm;
