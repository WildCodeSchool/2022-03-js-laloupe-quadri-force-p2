import React from "react";
import "../App.css";
import bordureHead from "../assets/bordureHead.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <img className="header" src={bordureHead} alt="Bordure Header" />
      <NavBar />
    </header>
  );
};

export default Header;
