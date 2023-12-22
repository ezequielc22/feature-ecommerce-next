"use client"
import React, { useState } from "react";
import AnnouncementNavbar from "./Announcements";
import Menu from "./Menu";
import Image from 'next/image';
import Link from 'next/link';
import AuthForm from "../AuthForm";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoggin, setIsLoggin] = useState(false);

    const openRegisterModal = () => {
        setIsLoggin(false);
        setIsModalOpen(true);
      };
    
      const openLogginModal = () => {
        setIsLoggin(true);
        setIsModalOpen(true);
      };
      const closeModal = () => {
        setIsModalOpen(false);
      };

    return (
        <>
            <AnnouncementNavbar/>
            <header className="h-48 bg-contrast-100 flex items-center justify-center gap-24 m-auto z-9">
                <div className="flex items-center justify-center items-baseline">
                    <Image src="/icons/leaf.svg" alt="Logo de A MATE" width={40} height={40} className="mr-2" />
                    <Link href="/">
                        <div className="text-4xl lg:text-7xl font-bold kanit text-contrast-500">
                            almate
                        </div>
                    </Link>
                    
                </div>
                <div className="hidden sm:flex gap-8 items-center justify-center ">
                    { isLoggin ? null : <button onClick={openRegisterModal}>
                        <div className="text-black text-xs hover:text-contrast-400">CREAR CUENTA</div>
                    </button>}
                    <button onClick={openLogginModal}>
                        <div className="text-black text-xs hover:text-contrast-400">INICIAR SESIÓN</div>
                    </button>
                </div>
            </header>
            <Menu/>
            {isModalOpen && (<AuthForm
                isLoggin={isLoggin}
                onClose={closeModal}
            />)}
        </>
    )
}
export default Navbar;