import React from 'react'

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center sm:w-1/3 sm:items-end mt-4 sm:mt-3 ">
    <div className='flex flex-col gap-2'>
      <p className="text-white font-bold">Contact Us</p>
      <div className="flex gap-2">
          <img className="h-7 w-7 object-cover p-0.5 bg-white rounded" src="/public/hogar.png" alt="ubication" />
          <p className="text-gray-400">123 Street, City</p>
      </div>
      <div className="flex gap-2">
        <img className="h-7 w-7 object-cover p-0.5 bg-white rounded" src="/public/correo.png" alt="mail" />
        <p className="text-gray-400">contact@mytinerary.com</p>
      </div>
      <div className="flex gap-2">
        <img className="h-7 w-7 object-cover p-0.5 bg-white rounded" src="/public/whatsapp.png" alt="whatsapp" />
        <p className="text-gray-400">Phone: (123) 456-7890</p>
      </div>
    </div>
  </div>
  )
}
