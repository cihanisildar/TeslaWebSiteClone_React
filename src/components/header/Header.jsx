import React from "react";
import "./header.css";

function Header(props) {
    const title = props.title
    const p = props.p
    const anchor = props.anchor
    const classProp = props.classProp
  return (
    <div className="header-wrapper">
      <div className={`header-container ${classProp}`} >
      <div className="header-container-content">
        <h1 className="animate__animated animate__fadeInUp">{title}</h1>
        <p className="animate__animated animate__fadeInUp">{p}</p>
      </div>
      <div className="header-container-button animate__animated animate__fadeIn">
        <a href="#">{anchor}</a>
      </div>
    </div>
    </div>
    
  );
}

export default Header;
