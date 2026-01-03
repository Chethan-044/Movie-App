import React from 'react'
import { Link } from "react-router-dom"
import '../css/Navbar.css'
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-brand"><Link to="/">Movie app</Link></div>
         <div className="navbar-links">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/favorites">Favorites</Link>
         </div>
    </div>
  )
}

export default NavBar
