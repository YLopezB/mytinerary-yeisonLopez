import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSearch } from '../redux/actions/cityActions';
import { useEffect } from 'react';

export default function Search() {
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeSearch(event.target.value));
  };

  useEffect(() => {
    dispatch(changeSearch(""));
  }, [dispatch])

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
