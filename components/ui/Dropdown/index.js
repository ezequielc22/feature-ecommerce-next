"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Dropdown = (props) => {
  const { label, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="flex flex-col gap-5">
      <div
        onClick={toggleDropdown}
        className="flex justify-between items-center text-contrast-400"
      >
        <span>{label}</span>
        <Image
          src="/icons/chevron.svg"
          alt="icon"
          width={16}
          height={16}
          className={`object-cover transition-transform transform duration-500 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>
      {isOpen && (
        <div className="bg-white p-2 flex justify-center">
          {React.cloneElement(children, { ...props })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;