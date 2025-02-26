import { NavLink } from 'react-router-dom'
import Contact from './Contact'
import SocialNetworks from './SocialNetworks'


const routes = [
  {
    path: "/", name: "Home"
  }, 
  {
    path: "/cities", name: "Cities"
  }
]
export default function Footer() {
  return (
    <div className='bottom-0 w-full flex justify-between p-3 bg-gray-800 flex-wrap'>
      <ul className={`flex flex-col items-start  gap-2 w-2/3 overflow-hidden transition-all duration-500 sm:mt-0 sm:max-h-none sm:flex sm:w-1/3`}>
        {routes.map((route) => (
          <li className='text-gray-400 p-2 hover:cursor-pointer hover:bg-gray-500 w-1/2 rounded hover:text-black' key={route.path}>
            <NavLink to={route.path} className={({ isActive }) => (isActive ? "font-bold text-white" : "")}>
            {route.name}
            </NavLink>
          </li>
          ))}
          <li className='text-gray-400 p-2 hover:cursor-pointer hover:bg-gray-500 w-1/2 rounded hover:text-black'>
            <div>
              <p className=''>Login</p>
            </div>
          </li>
      </ul>
      <SocialNetworks />
      <Contact />
    </div>
  )
}
