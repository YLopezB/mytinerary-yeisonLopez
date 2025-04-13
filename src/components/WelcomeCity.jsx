import React from 'react';
import Loading from './Loading';
import { useSelector } from 'react-redux';

export default function WelcomeCity() {
  const { city } = useSelector((state) => state.citiesStore)

  if (!city) {
    return <Loading/>;
  }

  return (
    <div className='bg-gray-700 flex flex-col items-center'>
      <div className="relative w-full h-180">
        <img src={city.image} alt={city.name} className="rounded-lg object-cover h-full w-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-[3px_3px_1px_rgba(0,0,0,0.9)] text-2xl">
          <h2 className="font-bold text-6xl">{city.name}</h2>
        </div>
      </div>
    </div>
  );
}