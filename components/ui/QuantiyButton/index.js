"use client"
import React, { useState } from 'react';

const QuantityButton = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <button
        onClick={decrement}
        className="bg-contrast-100 text-contrast-700 w-8 h-8 rounded-md outline-contrast-700 cursor-pointer"
        disabled={count === 1}
      >
        -
      </button>
      <span className="mx-2">{count}</span>
      <button
        onClick={increment}
        className="bg-contrast-100 text-contrast-700 w-8 h-8 rounded-md outline-contrast-700 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;