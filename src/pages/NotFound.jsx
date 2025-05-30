import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='bg-gray-700 h-screen flex flex-col items-center '>
    <div className='w-50 h-50 bg-gray-500 border-2 rounded-full p-2 border-gray-400 m-5 sm:w-80 sm:h-80'>
      <img className='w-full h-full rounded-full object-cover' src="/404.jpg" alt="" />
    </div>
    <div className='text-center'>
      <h1 className='text-white text-3xl md:text-5xl font-bold'>Oops! Page not found.</h1>
      <p className='text-white text-lg md:text-2xl mt-2'>The page you are looking for does not exist.</p>
    </div>
    <NavLink to="/home" className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 hover:text-white">
        Home!
    </NavLink>
  </div>
  )
}
