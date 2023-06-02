import React, {useEffect, useState} from "react";
import "./modelY.css";
import Navbar from "../navbar/Navbar";
import Video from "../video/Video";
import Header from "../header/Header";
import modely from '../../assets/modely2.avif'
import Button from "../../containers/button/Button";
import logo2 from '../../assets/tesla-logo.png'

function ModelY() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [opacity2, setOpacity2] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if(position < 500) {
      setOpacity(2)
      setOpacity2(2);
    }
    else if (position == 500) {
      setOpacity(1)
    }
    else if (position > 700) {
      setOpacity(0);
      setOpacity2(0)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="modely-container">

      <Navbar classProp2={
          opacity2 === 0
            ? "full"
            : opacity2 === 1
            ? "middle"
            : opacity2 === 2
            ? "hidden"
            : ""
        }
        classAnchorStyle = 'anchor'
        classLogo={logo2} />
        
      <Header
        classProp={
          opacity === 0
            ? "full"
            : opacity === 1
            ? "middle"
            : opacity === 2
            ? "hidden"
            : ""
        }
        title="Model Y"
        p="Test Sürüşü Planla"
        buttonVisibility = 'visible'
        buttonName = 'Özel Sipariş'
        buttonName2 = 'Ek bilgi'
        classBlack='a1'
        classNameButton1 = 'modely-button'
        classNameButton2 = 'modely-button2'
        classHeadingP = 'border-bottom'
      />
      <img src={modely} />
    </div>
  );
}

export default ModelY;
