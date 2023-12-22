import React from 'react';
import Link from 'next/link';
import { useAuthContext } from '@/context/AuthContext';

const menuItems = ['Catalogo','Carrito', 'Contacto', 'Nosotros', 'Admin'];

const MenuItem = ({ label }) => (
  <li className="mx-2 sm:mx-4"> 
    <Link href={`/${label}`}>
      <div className=" p-1 text-contrast-500 hover:text-contrast-950 rounded-md hover:bg-contrast-300 text-xl">{label}</div>
    </Link>
  </li>
);

const Menu = () => {
  const { user } = useAuthContext();
  return (
    <nav className="bg-contrast-100 p-4">
      <ul className="flex justify-center items-center space-x-2 sm:space-x-4">
        {menuItems.map((item, index) =>  (item === 'Admin' && user.logged) ? null : <MenuItem key={index} label={item} />)}
      </ul>
    </nav>
  );
};

export default Menu;