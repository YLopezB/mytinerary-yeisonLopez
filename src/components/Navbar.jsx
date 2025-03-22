import { NavLink } from 'react-router-dom'
import IconMenu from './IconMenu'
import { useState } from 'react'

const routes = [
  {
    path: "/", name: "Home"
  }, 
  {
    path: "/cities", name: "Cities"
  }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className='sticky top-0 z-10 px-4 py-2 align-center bg-gray-900/70 sm:flex sm:items-center sm:justify-between'>
      <div className='flex justify-between'>
        <h1 className='text-gray-400 font-bold text-3xl italic sm:text-4xl'>My Tinerary</h1>
        <IconMenu menuOpen={menuOpen} handleMenuClick={handleMenuClick} />
      </div>
      
      <ul className={`flex flex-col items-start mt-3 gap-2 overflow-hidden transition-all duration-500 sm:flex-row sm:mt-0 ${menuOpen ? 'max-h-[200px]' : 'max-h-0'} sm:max-h-none sm:flex`}>
        {routes.map((route) => (
          <li className='text-gray-400 p-2 hover:cursor-pointer hover:bg-gray-500 w-1/2 rounded hover:text-black' key={route.path}>
            <NavLink to={route.path} className={({ isActive }) => (isActive ? "font-bold text-white" : "")}  onClick={handleMenuClick}>
              {route.name}
            </NavLink>
          </li>
        ))}
        <li className='text-gray-400 p-2 group hover:cursor-pointer hover:bg-gray-500 w-1/2 rounded hover:text-black'>
          <div className='h-9 w-9 rounded-full flex items-center gap-2'>
            <img className='p-1 object-cover group-hover:bg-gray-800 group-hover:border-1 group-hover:border-gray-400 group-hover:rounded-full' src="/public/Login_gray.png" alt="Login icon" />
            <p className='sm:hidden'>Login</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}
