import React from "react";
import { Link } from "react-router-dom";

import bordureHead from "../assets/bordureHead.png";
// import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <img src={bordureHead} alt="Bordure Header" />
      <nav>
        <Link to="/maps">Maps</Link>
        <Link to="/history">History</Link>
        <Link to="/heros">Heros</Link>
        <Link to="/encyclopedia">Encyclopedia</Link>
      </nav>
      {/* <NavBar /> */}
    </header>
  );
};

export default Header;
