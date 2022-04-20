import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="link">
        <Link to="/maps">Maps</Link>
        <Link to="/history">History</Link>
        <Link to="/heros">Heros</Link>
        <Link to="/encyclopedia">Encyclopedia</Link>
      </div>
    </div>
  );
}

export default NavBar;
