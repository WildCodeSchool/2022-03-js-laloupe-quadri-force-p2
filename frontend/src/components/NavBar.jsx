import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="link">
        <Link to="/maps">
          <button type="button">
            <img src="src/assets/maps.png" alt="map" />
          </button>
        </Link>

        <Link to="/history">
          <button type="button">History</button>
        </Link>

        <Link to="/heros">
          <button type="button">Heros</button>
        </Link>

        <Link to="/encyclopedia">
          <button type="button">Encyclopedia</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
