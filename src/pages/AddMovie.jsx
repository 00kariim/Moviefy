import React, { useState } from "react";
import "./Add.css";

const AddMovie = ({ onAddMovie }) => {
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    releaseDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(movie);
    alert("Movie added successfully!");
    setMovie({ title: "", description: "", releaseDate: "" });
  };

  return (
    <div className="add-movie-container">
      <h2 className="add-movie-title">Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
          placeholder="Movie title"
          className="add-movie-input"
          required
        />
        <textarea
          name="description"
          value={movie.description}
          onChange={handleChange}
          placeholder="Movie description"
          rows={4}
          className="add-movie-textarea"
          required
        />
        <input
          type="date"
          name="releaseDate"
          value={movie.releaseDate}
          onChange={handleChange}
          className="add-movie-input"
          required
        />
        <button type="submit" className="add-movie-button">
          Add Movie
        </button>
      </form>
    </div>

  );
};

export default AddMovie;
