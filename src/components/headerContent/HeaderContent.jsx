import React from 'react'
import './headerContent.css'

function HeaderContent(props) {
    const title = props.title
    const p = props.p
    const classBlack = props.classBlack
    const classHeadingP = props.classHeadingP
    return (
        <div className='header-container-content'>
            <h1 className={`animate__animated animate__fadeInUp ${classBlack}`}>{title}</h1>
            <p className={`animate__animated animate__fadeInUp ${classBlack} ${classHeadingP}`}>{p}</p>
        </div>
      )
}

export default HeaderContent