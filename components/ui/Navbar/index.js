import AnnouncementNavbar from "./Announcements";
import Menu from "./Menu";
import SearchBox from "./SearchBox";
import { wordingsLayout } from '../../../data/mocks/MockWordings'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const { searchProducts } = wordingsLayout;

    return (
        <>
            <AnnouncementNavbar/>
            <header className="h-48 bg-contrast-100 flex items-center justify-center gap-24 m-auto z-9">
                <SearchBox textSearch={searchProducts}/>
                <div className="flex items-center justify-center items-baseline">
                    <Image src="/icons/leaf.svg" alt="Logo de A MATE" width={40} height={40} className="mr-2" />
                    <Link href="/">
                        <div className="text-4xl lg:text-7xl font-bold kanit text-contrast-500">
                            almate
                        </div>
                    </Link>
                    
                </div>
                <div className="hidden sm:flex gap-8 items-center justify-center ">
                    <Link href="/crear-cuenta">
                        <div className="text-black text-xs hover:text-contrast-400">CREAR CUENTA</div>
                    </Link>
                    |
                    <Link href="/iniciar-sesion">
                        <div className="text-black text-xs hover:text-contrast-400">INICIAR SESIÓN</div>
                    </Link>
                </div>
            </header>
            <Menu/>
        </>
    )
}
export default Navbar;