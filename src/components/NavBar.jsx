import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/maps">Maps</Link>
      <Link to="/history">History</Link>
      <Link to="/heros">Heros</Link>
      <Link to="/encyclopedia">Encyclopedia</Link>
    </div>
  );
}

export default NavBar;
