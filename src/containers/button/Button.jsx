import React from 'react'
import './button.css'
function Button(props) {
    const buttonName = props.buttonName
    const buttonName2 = props.buttonName2
    const classNameButton1 = props.classNameButton1
    const classNameButton2 = props.classNameButton2
  return (
    <div className={`button-container`}>
        <button className={`btn ${classNameButton1}`}>{buttonName}</button>
        <button className={`btn ${classNameButton2}`}>{buttonName2}</button>
    </div>
  )
}

export default Button