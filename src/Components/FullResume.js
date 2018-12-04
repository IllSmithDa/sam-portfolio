import React from "react";
import Navbar from "./Navbar";
import "../CSS/PageLayout.css";

const FullResume = () => {
  return (
    <div className="page-container">
      <Navbar />
      <iframe src="https://drive.google.com/file/d/1BZZoDuWin-CGwhqM1L3jX_PoGeiBidKb/preview" className="pdf-size" height={window.screen.height} title="resume"></iframe>
    </div>
  );
}

export default FullResume;