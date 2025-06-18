import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import MovieDetails from "./pages/MovieDetails";
import NavBar from "./components/Navbar";
import Search from "./pages/Search";

import Fire from "./assets/fire.png";
import Star from "./assets/star.png";
import Party from "./assets/partying-face.png";


function App() {


  return (
    <Router>
      <NavBar       />
      <Routes>
        <Route path="/" element={<Home type="popular" title="Popular" emoji={Fire}  />} />
        <Route path="/top_rated" element={<Home type="top_rated" title="Top Rated" emoji={Star}  />} />
        <Route path="/upcoming" element={<Home type="upcoming" title="Upcoming" emoji={Party}  />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/search" element={<Search />} />
        <Route path="/film/:id" element={<MovieDetails />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
