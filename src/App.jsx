import React from "react";
import "./App.css";
import "../public/MJH-ds-logo.png";
import Dictionary from "./Dictionary.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <>
      <div className="container">
        <img
          src="../public/MJH-ds-logo.png"
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
