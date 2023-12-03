import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar-Container'>
        <nav className='navItems'>
          <div>
            <ul id='nav-ul'>
              <li>
                <Link to="/" className='nav-links'>Home</Link>
              </li>
              <li>
                <Link to="/rent" className='nav-links'>Mieten</Link>
              </li>
              <li>
                <Link to="/about" className='nav-links'>Über uns</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className='navProfile'>
              <button className='loginbutton'>
                <Link to="/login" className='nav-buttons'>Login</Link>
              </button>
              <button className='signbutton'>
                <Link to="/signIn" className='nav-buttons'>Sign In</Link>
              </button>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar