import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      This app is coded by{" "}
      <a
        href="https://github.com/mjhdesignstudio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Melissa Hundley
      </a>
      , is open-source on{" "}
      <a
        href="https://github.com/mjhdesignstudio/react-dictionary-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      , and hosted on{" "}
      <a
        href="https://react-dictionary-project-pearl.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vercel.
      </a>
      <br />
      <a
        href="https://www.pexels.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Photos provided by Pexels
      </a>
    </footer>
  );
}
