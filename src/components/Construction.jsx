import React from 'react';
import { NavLink } from 'react-router-dom';
import Loading from './Loading';

export default function Construction({ data }) {

  if (!data) {
    return <Loading/>;
  }

  return (
    <div className='bg-gray-700 h-190 flex flex-col items-center'>
      <div className="relative w-full h-100">
        <img src={data.image} alt={data.name} className="rounded-lg object-cover h-full w-full" />
        <div className="absolute top-3 left-3 text-white drop-shadow-[3px_3px_1px_rgba(0,0,0,0.9)] text-2xl">
          <h2 className="font-bold text-6xl">{data.name}</h2>
        </div>
      </div>
      <div className='text-center mt-10'>
        <h1 className='text-white text-3xl md:text-5xl font-bold'>Our Website is Under Construction</h1>
        <p className='text-white text-lg md:text-2xl mt-2'>We’re making some improvements to bring you a better experience. Please check back</p>
      </div>
      <NavLink to="/home" className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 hover:text-white">
        Home!
      </NavLink>
    </div>
  );
}