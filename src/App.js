import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Video from "./components/video/Video";
import Header from "./components/header/Header";
import ModelY from "./components/modelY/ModelY";
import { useInView } from "react-intersection-observer";
import "./App.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    console.log(position);
    setScrollPosition(position);
    if(position == 0) {
      setOpacity(0)
    }
    else if (position == 100) {
      setOpacity(0);
    } else if (position == 200) {
      setOpacity(1);
    }
    else if (position == 300) {
      setOpacity(2);
    }
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
        <Navbar />
        <>
          {!isVisible && (
            <Header
              classProp={opacity==0 ? 'full' : opacity==1 ? 'middle' : 'hide'}  
                        
              title="Tesla'yı Deneyimleyin"
              p="Bugün Bir Test Sürüşü Planla"
              anchor="Test Sürüşü"
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
