import React from 'react'
import './navbar.css'
import logo from '../../assets/tesla-logo2.png'


function Navbar() {

  return (
   <div className='navbar-wrapper'>
    <div className='navbar-container'>
        <div className='navbar-container-logo animate__animated animate__fadeIn' >
          <a href='#'>
            <img src={logo} alt='tesla-logo' />
          </a>
        </div>
        <div className='navbar-container-models'>
          <div className='navbar-container-models-model model'><a href='#' style={{color:'white'}}>Model S</a></div>
          <div className='navbar-container-models-model model'><a href='#' style={{color:'white'}}>Model 3</a></div>
          <div className='navbar-container-models-model'><a href='#' style={{color:'white'}}>Model X</a></div>
          <div className='navbar-container-models-model'><a href='#' style={{color:'white'}}>Model Y</a></div>
          <div className='navbar-container-models-model'><a href='#' style={{color:'white'}}>Şarj</a></div>
        </div>
        <div className='navbar-container-menu'>
          <div><a href='#' style={{color:'white'}}>Hesap</a></div>
          <div><a href='#' style={{color:'white'}}>Menü</a></div>
        </div>
    </div>
   </div> 
    
  )
}

export default Navbar