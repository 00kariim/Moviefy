import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="logo">
        Moviefy
      </NavLink>
      <ul className="nav-menu">
        <li><NavLink to="/">Popular</NavLink></li>
        <li><NavLink to="/top_rated">Top Rated</NavLink></li>
        <li><NavLink to="/upcoming">Upcoming</NavLink></li>
        <li><NavLink to="/add">Add Movie</NavLink></li>
        <li><NavLink to="/Search">Search</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
