import React from 'react';

export default function IconMenu({ menuOpen, handleMenuClick }) {
  return (
    <div 
      className='h-12 w-12 flex items-center justify-center cursor-pointer transform group hover:scale-110 sm:hidden' 
      onClick={handleMenuClick}
    >
      {menuOpen ? (
        <div className='relative w-6 h-6 flex items-center justify-center'>
          <div className='absolute w-6 h-1 bg-white rounded transform rotate-45 group-hover:bg-gray-400'></div>
          <div className='absolute w-6 h-1 bg-white rounded transform -rotate-45 group-hover:bg-gray-400'></div>
        </div>
      ) : (
        <div className='flex flex-col gap-1'>
          <div className='flex gap-1'>
            <div className='bg-gray-400 h-1 w-1 rounded-full group-hover:bg-white'></div>
            <div className='bg-gray-400 h-1 w-6 rounded-xl group-hover:bg-white'></div>
          </div>
          <div className='flex gap-1'>
            <div className='bg-gray-400 h-1 w-1 rounded-full group-hover:bg-white'></div>
            <div className='bg-gray-400 h-1 w-6 rounded-xl group-hover:bg-white'></div>
          </div>
          <div className='flex gap-1'>
            <div className='bg-gray-400 h-1 w-1 rounded-full group-hover:bg-white'></div>
            <div className='bg-gray-400 h-1 w-6 rounded-xl group-hover:bg-white'></div>
          </div>
        </div>
      )}
    </div>
  )
}