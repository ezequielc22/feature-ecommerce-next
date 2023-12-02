import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-75 bg-gray-800">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-r-2 border-b-2 border-contrast-500 ">
        <Image src="/icons/leaf.svg" alt="Logo de A MATE" width={40} height={40} className="mr-2 w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Loading;