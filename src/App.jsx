import React from "react";
import "./App.css";
import logo from "./MJH-ds-logo.png"; // Correct path

import Dictionary from "./Dictionary.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <>
      <div className="container">
        <img
          src={logo} // Use the imported variable here
          alt="MJH Design Studios Logo"
          className="logo"
        />
        <div>
          <Dictionary defaultKeyword="dictionary" />
          <Footer />
        </div>
      </div>
    </>
  );
}
