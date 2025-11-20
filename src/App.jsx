import React from "react";
import "./App.css";
import "../src/assets/MJH Design Studios Logo small.png";
import Dictionary from "./Dictionary.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <>
      <div className="container">
        <img
          src="../src/assets/MJH Design Studios Logo small.png"
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
