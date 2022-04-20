import React from "react";
import "../App.css";

import bordureFoot from "../assets/bordureFoot.png";

const Footer = () => {
  return (
    <footer>
      <img className="footer" src={bordureFoot} alt="Bordure Footer" />
    </footer>
  );
};

export default Footer;
