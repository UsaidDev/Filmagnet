import React from 'react'
import './Navbar.css'
import Logo from '../../Image/Filmagnet_logo.png'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <h2 className='logo'><img src={Logo} alt="Logo" />Filmagnet</h2>
        <ul className='desktop-list'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li className='Signin'>Sign in</li>
        </ul>
        <ul className="mobile-list">
          <li><i className="fa fa-home"></i></li>
          <li><i className="fa fa-cogs"></i></li>
          <li><i className="fa fa-user"></i></li>
          <li><i className='fa fa-bars'></i></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;