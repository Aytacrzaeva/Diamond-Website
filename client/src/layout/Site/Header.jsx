import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="nav">
    <div className="nav__left">
        <p>Monday-Friday: 08:00 AM - 9:00 PM</p>
    </div>
    <div className="nav__right">
        <ul>

            <li><Link to="/about">About</Link></li>
            <li><Link>Brand</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
        </ul>
    </div>
</div>
  )
}

export default Header