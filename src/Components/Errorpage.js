import React from "react";
import Navbar from "./Navbar";
import "../CSS/PageLayout.css"
const ErrorPage = () => {
  return (
    <div className="page-container contact-page-size">
      <Navbar />
        <h1 className="section-title"> 404: Page does not Exist</h1>
    </div>
  )
}
export default ErrorPage;