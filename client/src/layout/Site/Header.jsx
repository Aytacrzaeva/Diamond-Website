import React from 'react'
import './Header.scss'
const Header = () => {
  return (
    <div className="nav">
    <div className="nav__left">
        <p>Monday-Friday: 08:00 AM - 9:00 PM</p>
    </div>
    <div className="nav__right">
        <ul>
            <li><a href="">About</a></li>
            <li><a href="#section3">Brand</a></li>
            <li><a href="#section4">Contact</a></li>
            
        </ul>
    </div>
</div>
  )
}

export default Header