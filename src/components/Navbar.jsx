import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { supabase } from "../supabaseClient";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

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
          <li><button onClick={handleLogout} className="cursor-pointer font-bold bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all border-none outline-none">Logout</button></li>
        ) : !isAuthPage && (
          <li><NavLink to="/auth" className="font-bold bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all inline-block no-underline">Login</NavLink></li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
