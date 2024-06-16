import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  return (
    <>
  <div>

    <Link to={"/admin"}>
      Admin
    </Link>
    <Link to={"/admin-login"}>
      Login
    </Link>
  </div>
      <Outlet />
    </>
  )
}

export default App
