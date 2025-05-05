import React from 'react'

export default function SocialNetworks() {
  return (
    <div className='w-1/3 flex flex-col md:w-1/3 md:text-center md:flex md:justify-end md:flex-col md:items-center'>
    <div className=''>
      <p className='text-white font-bold p-2 w-full'>Follow Us</p>
    </div>
    <div className='flex flex-col gap-2 justify-center md:flex-row md:gap-5'>
      <div className='flex gap-2'>
        <div className='flex h-7 w-7 p-1 bg-white rounded md:h-9 md:w-9'>
          <img src="/facebook.png" alt="fcebook" />
        </div>
        <div> 
        <p className='text-gray-400 md:hidden'>Facebook</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='flex h-7 w-7 p-1 bg-white rounded md:h-9 md:w-9'>
          <img src="/instagram.png" alt="fcebook" />
        </div>
        <div> 
        <p className='text-gray-400 md:hidden'>Instagram</p>
        </div>
      </div>
      <div className='flex gap-2'>
        <div className='flex h-7 w-7 p-1 bg-white rounded md:h-9 md:w-9'>
          <img src="/linkedin.png" alt="fcebook" />
        </div>
        <div> 
        <p className='text-gray-400 md:hidden'>Linkedin</p>
        </div>
      </div>
    </div>
  </div>
  )
}
