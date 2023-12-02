import React from 'react';

const QuantityButton = (props) => {
  const {ammountToAdd, setAmmountToAdd} = props;

  const increment = () => {
    setAmmountToAdd((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (ammountToAdd > 1) {
      setAmmountToAdd((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <button
        onClick={decrement}
        className="bg-contrast-100 text-contrast-700 w-8 h-8 rounded-md outline-contrast-700 cursor-pointer"
        disabled={ammountToAdd === 1}
      >
        -
      </button>
      <span className="mx-2">{ammountToAdd}</span>
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