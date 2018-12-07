import React from "react";
import Navbar from "./Navbar";
import "../CSS/PageLayout.css";

const FullResume = () => {
  return (
    <div className="page-container">
      <Navbar />
      <iframe src="https://drive.google.com/file/d/1H--ublfxmZvZShE0wHoU_PwF1RCU81AK/preview" className="pdf-size" height={window.screen.height} title="resume"></iframe>
    </div>
  );
}

export default FullResume;