import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className=" flex items-center justify-center h-screen flex-col space-y-4 bg-contrast-100 ">
      <h1 className="text-4xl font-bold text-contrast-500">404 - Página no encontrada</h1>
      <div className='w-16 h-16 '>
        <Image src="/icons/leaf.svg" alt="Logo de A MATE" width={40} height={40} className="mr-2 w-full h-full object-cover" />
      </div>
      <p className="text-contrast-400">Lo sentimos, la página que estás buscando no existe.</p>
      <Link href="/">
        <div className="text-contrast-500 underline hover:text-contrast-300">Volver a la página principal</div>
      </Link>
    </div>
  );
};

export default NotFound;