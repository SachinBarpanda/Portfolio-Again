import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter, Route, RouterProvider, Routes, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Admin from '../pages/Admin/Admin.jsx'
import Login from '../pages/Admin/Login.jsx'

const router = createHashRouter([
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
    {/* <HashRouter>
      <Routes>

        <Route path='/' element={<Home/>} exact/>
        <Route path='/admin' element={<Admin/>} exact/>
        <Route path='/admin-login' element={<Login/>} exact/>
      </Routes>
    
    </HashRouter> */}
  </React.StrictMode>
)
