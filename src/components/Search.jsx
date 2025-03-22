import React from 'react'

export default function Search() {
  return (
    <div className='flex w-95 bg-white h-16 place-self-center m-5'>
      <input type="search" className='p-5 bg-white w-3/4' placeholder='Search by city'/>
      <button className='w-1/4 bg-gray-900'></button>
    </div>
  )
}
