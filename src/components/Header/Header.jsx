import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header p-4 m-auto d-flex align-items-center'>
     <Link className="logo-image" to="/"><p className='logo'>VEG<span className='big'>A</span><span>PP</span></p></Link> 
      <Link className="ms-5 h3 menu-item" to="/">HOME</Link>
    </div>
  )
}

export default Header