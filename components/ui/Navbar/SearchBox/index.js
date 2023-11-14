"use client"
import React from 'react';

const SearchBox = (props) => {
  const { textSearch } = props;
  return (
    <div className="items-center hidden lg:flex">
      <input
        type="text"
        placeholder={textSearch.placeholder}
        className="py-2 px-4 border border-gray-300 rounded-l focus:outline-contrast-300"
      />
      <button className="bg-contrast-500 text-contrast-100 py-2 px-4 rounded-r hover:text-contrast-100 hover:bg-contrast-300">
        {textSearch.title}
      </button>
    </div>
  );
};

export default SearchBox;