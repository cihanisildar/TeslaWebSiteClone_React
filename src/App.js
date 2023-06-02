import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Video from "./components/video/Video";
import Header from "./components/header/Header";
import ModelY from "./components/modelY/ModelY";
import { useInView } from "react-intersection-observer";
import logo from '../src/assets/tesla-logo2.png'
import "./App.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [opacity2, setOpacity2] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    setScrollPosition(position);
    if (position <= 200) {
      setOpacity(0);
      setOpacity2(0);
    }
    else if (position <= 300) {
      setOpacity(1);
    }
    else if (position > 400) {
      setOpacity(2);
      setOpacity2(2);
    }
    else if ( position >= 748) {
      setOpacity(2);
      setOpacity2(2);
    }




    console.log(opacity2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <div className="main">
        <Navbar classProp2={
                opacity2 === 0
                  ? "full"
                  : opacity2 === 1
                  ? "middle"
                  : opacity2 === 2
                  ? "hidden"
                  : ""
              }
              classAnchorStyle = 'anchor2'
              classLogo ={logo}
               />
        <>
          {!isVisible && (
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
              buttonName = 'Test Sürüşü'
              classNameButton1 = 'home-button'
              classNameButton2 = 'hidden'
              title = "Tesla'yı Deneyimleyin"
              p = "Bugün Bir Test Sürüşü Planla"
              
            />
          )}
        </>

        <Video />
      </div>
      <div className="main2">
        <ModelY />
      </div>
    </>
  );
}

export default App;
