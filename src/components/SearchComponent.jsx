import React from 'react';

export default function Search({ setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='flex w-95 rounded-lg border-1 border-amber-50 mt-10 mb-10'>
      <input
        type="search"
        className='pl-4 bg-gray-800 rounded-l-lg w-6/7 text-neutral-50'
        placeholder='Search by city'
        onChange={handleSearchChange}
      />
      <div className='bg-blue-500 w-1/7 rounded-r-lg p-2'>
        <img src="/public/lupa.png" alt="lupa icon" />
      </div>
    </div>
  );
}
