import { NavLink } from 'react-router-dom'
import IconMenu from './IconMenu'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/authActions'
import Perfil from './Perfil'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/cities', name: 'Cities' },
  ]

  return (
    <nav className='sticky top-0 z-10 px-4 py-2 bg-gray-900/70 sm:flex sm:items-center sm:justify-between'>
      <div className='flex justify-between items-center'>
        <h1 className='text-gray-400 font-bold text-3xl italic sm:text-4xl'>My Tinerary</h1>
        <IconMenu menuOpen={menuOpen} handleMenuClick={handleMenuClick} />
      </div>

      <ul className={`flex flex-col items-start mt-3 gap-2 overflow-hidden transition-all duration-500 sm:flex-row sm:mt-0 ${menuOpen ? 'max-h-[200px]' : 'max-h-0'} sm:max-h-none sm:flex`}>
        {routes.map((route) => (
          <li className='text-gray-400 p-2 hover:cursor-pointer hover:bg-gray-500 w-full sm:w-auto rounded hover:text-black' key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? 'font-bold text-white' : '')}
              onClick={handleMenuClick}
            >
              {route.name}
            </NavLink>
          </li>
        ))}

        {token ? (
          <li className='flex items-center gap-3 text-white p-2 bg-red-500 w-full sm:w-auto rounded'>
            <Perfil />
            <NavLink onClick={() => dispatch(logout(token))}>Logout</NavLink>
          </li>
        ) : (
          <li className='flex items-center gap-3 text-white p-2 bg-blue-500 w-full sm:w-auto rounded'>
            <img
              className='w-7 h-7 object-cover rounded-full border-1 border-white shadow-md'
              src='/Login_gray.png'
              alt='Login icon'
            />
            <NavLink to='/signin' className={({ isActive }) => (isActive ? 'font-bold text-white' : '')}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}
