import React from "react";
import Navbar from "./Navbar";
import "../CSS/PageLayout.css"
const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <h1> 404: Page does not Exist</h1>
      </div>
    </div>
  )
}
export default ErrorPage;