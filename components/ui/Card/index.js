import React from 'react';

const Card = (props) => {
    const { wordings } = props
  return (
    <div className="bg-gradient-to-t from-contrast-200 to-contrast-100 border-contrast-400 p-4 shadow-md rounded-md 
    w-1/2 mx-auto m-10 text-center">
        <h2 className="text-lg font-bold text-contrast-600 mb-2">{wordings.title}</h2>
        <p className="text-contrast-500">{wordings.description}</p>
    </div>
  );
};

export default Card;