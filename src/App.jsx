import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StandardLayout from './layouts/StandardLayoud'
import Home from './pages/Home'
import Cities from './pages/Cities'
import NotFound from './pages/NotFound'
import City from './pages/City'
import Signin from './pages/Signin.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCities } from './redux/actions/cityActions'
import axios from 'axios'
import { setUser } from './redux/actions/authActions.js'
import PrivateRoute from './components/PrivateRoute.jsx'
import AuthRoute from './components/AuthRoute.jsx'


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
        element: <PrivateRoute><City/></PrivateRoute>
      },
      {
        path: "/signin",
        element: <AuthRoute><Signin/></AuthRoute>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);

const loginWithToken = async (token) => {
  try {
    const response = await axios.get('http://localhost:8080/api/users/validateToken', {
      headers: {
        Authorization: `Bearer ${token}` ,
      }
    })
    return response.data;
  } catch (error) {
    
  }
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
      const initAuth = async () => {
      if (token) {
        try {
          const user = await loginWithToken(token);
          dispatch(setUser({ user, token }));
        } catch (error) {
          console.error('Token inválido o expirado:', error.message);
          localStorage.removeItem('token');
        }
      }
      dispatch(getCities());
    };
    initAuth();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
