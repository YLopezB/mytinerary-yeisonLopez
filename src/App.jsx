import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StandardLayout from './layouts/StandardLayoud'
import Home from './pages/Home'
import Cities from './pages/Cities'
import NotFound from './pages/NotFound'
import City from './pages/City'


const router = createBrowserRouter([
  {
    path: "/",
    element: <StandardLayout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/cities",
        element: <Cities/>
      },
      {
        path: "/city/:id",
        element: <City />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
