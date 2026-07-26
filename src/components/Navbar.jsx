import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { supabase } from "../supabaseClient";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

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
        <li><NavLink to="/search">Search</NavLink></li>
        {user ? (
          <li><button onClick={handleLogout} className="cursor-pointer font-bold text-red-500 hover:text-red-400">Logout</button></li>
        ) : (
          <li><NavLink to="/auth" className="font-bold text-red-500 hover:text-red-400">Login</NavLink></li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
