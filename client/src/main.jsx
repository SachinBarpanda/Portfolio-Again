import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Admin from '../pages/Admin/Admin.jsx'
import Login from '../pages/Admin/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:
      [
        {
          path: '/',
          element: <Home />,

        },
        {
          path: '/admin',
          element: <Admin />,
          errorElement:<h1>Admin ke paas nahi jaa paa raha hai yeh</h1>
        },
        {
          path: '/admin-login',
          element: <Login />
        },
      ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
