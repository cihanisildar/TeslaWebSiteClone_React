import React from "react";
import "./modelY.css";
import Navbar from "../navbar/Navbar";
import Video from "../video/Video";
import Header from "../header/Header";

function ModelY() {
  return (
    <>
      <Header
        title="Tesla'yı Deneyimleyin"
        p="Bugün Bir Test Sürüşü Planla"
        anchor="Test Sürüşü"
      />
      <Video />
    </>
  );
}

export default ModelY;
