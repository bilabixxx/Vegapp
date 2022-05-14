import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header p-4 m-auto d-flex align-items-center'>
      <p className='logo'>VEG<span className='big'>A</span><span>PP</span></p>
      <Link className="ms-5 h3 menu-item" to="/">HOME</Link>
    </div>
  )
}

export default Header