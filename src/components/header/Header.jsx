import React from "react";
import "./header.css";
import Button from "../../containers/button/Button";
import HeaderContent from "../headerContent/HeaderContent";

function Header(props) {
    const classProp = props.classProp
    const buttonVisibility = props.buttonVisibility
    const buttonName = props.buttonName
    const buttonName2 = props.buttonName2
    const classNameButton1 = props.classNameButton1
    const classNameButton2 = props.classNameButton2
    const title = props.title
    const classBlack = props.classBlack
    const p = props.p
    const classHeadingP = props.classHeadingP

  return (
    <div className="header-wrapper">
      <div className={`header-container ${classProp}`} >
        <HeaderContent title={`${title}`} p={`${p}`} classBlack={`${classBlack}`} classHeadingP={`${classHeadingP}`} />
      <div className="header-container-button">
        <Button buttonName={`${buttonName}`} buttonName2={`${buttonName2}`} classNameButton1={`${classNameButton1}`} classNameButton2={`${classNameButton2}`} />
      </div>  
    </div>
    </div>
  );
}

export default Header;


{/* <div className="header-container-button animate__animated animate__fadeIn">
        <a href="#">{anchor}</a>
      </div> */}