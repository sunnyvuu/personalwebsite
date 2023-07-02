import "../style/navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/"> Madi Yi </Link>
      </div>
      <div className="navlinks">
        <ul>
          <li className="links">
            <Link to="/"> Home </Link>
          </li>
          <li className="links">
            <Link to="/projects"> Projects </Link>
          </li>
          <li className="links">
            <Link to="/gallery"> Gallery </Link>
          </li>
          <li className="links">
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </div>
      <div className="resume">
        <Link
          to="https://drive.google.com/file/d/1WyQQb3A1-kH2eJ0l_zqFiPVohkZXNojM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
