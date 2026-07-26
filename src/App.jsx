import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import MovieDetails from "./pages/MovieDetails";
import NavBar from "./components/Navbar";
import Search from "./pages/Search";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./AuthContext";

import Fire from "./assets/fire.png";
import Star from "./assets/star.png";
import Party from "./assets/partying-face.png";


function App() {

  return (
    <AuthProvider>
      <Router>
        <NavBar       />
        <Routes>
          <Route path="/" element={<Home type="popular" title="Popular" emoji={Fire}  />} />
          <Route path="/top_rated" element={<Home type="top_rated" title="Top Rated" emoji={Star}  />} />
          <Route path="/upcoming" element={<Home type="upcoming" title="Upcoming" emoji={Party}  />} />
          <Route path="/search" element={<Search />} />
          <Route path="/auth" element={<Auth />} />
          
          <Route path="/add" element={
            <ProtectedRoute>
              <AddMovie />
            </ProtectedRoute>
          } />
          
          <Route path="/film/:id" element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
