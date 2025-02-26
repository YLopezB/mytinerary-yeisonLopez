import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function StandardLayoud() {
  return (
    <div className='relative box-border p-0 m-0 bg-black'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )  
}
