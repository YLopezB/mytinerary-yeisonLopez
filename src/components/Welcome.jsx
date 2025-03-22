import React from 'react'
import { NavLink } from 'react-router-dom'

export default function welcome() {
  return (
  <div className='bg-black relative'>
    <div className="w-full h-180 p-0 flex items-center justify-center sm:h-200 sm:px-5">
      <img className=" inset-0 h-full object-cover" src="../public/viaje_mundo.gif" alt="Welcome" />
      <div className="absolute inset-0 bottom-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl font-bold drop-shadow-[3px_3px_1px_rgba(0,0,0,0.9)]">
          My Tinerary
        </h1>
        <p className="text-white text-2xl mt-2 drop-shadow-[3px_3px_1px_rgba(0,0,0,0.9)]">
        Find your perfect trip, designed by insiders who know and love their cities!
        </p>
        <NavLink to="/cities" className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 hover:text-white">
          Explore now!
        </NavLink>
      </div>
    </div>
  </div>
  )
}
