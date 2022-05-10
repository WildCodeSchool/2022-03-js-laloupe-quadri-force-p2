import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="link">
        <Link to="/maps">
          <button type="button">
            <img src="/src/assets/images/maps.png" alt="Maps" />
          </button>
        </Link>

        <Link to="/history">
          <button type="button">
            <img src="/src/assets/images/logoHistoire.png" alt="History" />
          </button>
        </Link>

        <Link to="/heros">
          <button type="button">
            <img src="/src/assets/images/prodige.png" alt="Heros" />
          </button>
        </Link>

        <Link to="/encyclopedia">
          <button type="button">
            <img
              src="/src/assets/images/logoEncyclopedia.png"
              alt="Encyclopedia"
            />
          </button>
        </Link>
        <Link to="/welcome" id="LinkTo404">
          404
          {/* <button type="button"> */}
          {/* <img src="src/assets/images/logoEncyclopedia.png" alt="Encyclopedia" /> */}
          {/* </button> */}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
