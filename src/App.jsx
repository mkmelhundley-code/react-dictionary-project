import React from "react";
import "./App.css";
import Dictionary from "./Dictionary.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <>
      <div className="container">
        <div>
          <h1>React Dictionary Project</h1>
          <Dictionary defaultKeyword="dictionary" />
          <Footer />
        </div>
      </div>
    </>
  );
}
