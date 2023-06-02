import React from 'react'
import './navbar.css'
import logo from '../../assets/tesla-logo2.png'


function Navbar(props) {
  const classAnchorStyle = props.classAnchorStyle
  const classProp2 = props.classProp2
  const classProp = props.classProp
  const classLogo = props.classLogo

  return (
   <div className='navbar-wrapper'>
    <div className={`navbar-container ${classProp2}`}>
        <div className='navbar-container-logo animate__animated animate__fadeIn' >
          <a href='#'>
            <img src={`${classLogo}`} alt='tesla-logo' />
          </a>
        </div>
        <div className={`navbar-container-models ${classAnchorStyle}`}>
          <div className='navbar-container-models-model model'><a href='#' >Model S</a></div>
          <div className='navbar-container-models-model model'><a href='#' >Model 3</a></div>
          <div className='navbar-container-models-model'><a href='#'>Model X</a></div>
          <div className='navbar-container-models-model'><a href='#'>Model Y</a></div>
          <div className='navbar-container-models-model'><a href='#'>Şarj</a></div>
        </div>
        <div className={`navbar-container-menu ${classAnchorStyle}`}>
          <div><a href='#'>Hesap</a></div>
          <div><a href='#'>Menü</a></div>
        </div>
    </div>
   </div> 
    
  )
}

export default Navbar