import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MovieDetails.css"; 

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const API_KEY = "1a58ea3f5202aabc008213ecfea294d2";
        const BASE_URL = "https://api.themoviedb.org/3";
        const res = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-EN`
        );
        setMovie(res.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    console.log(id);

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie_details_page">
      <div className="movie_details_container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie_details_poster"
        />
        <div className="movie_details_info">
          <h1>{movie.title}</h1>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          {movie.genres && (
            <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
          )}
        </div>
      </div>
      <div>
        <h2> PLEASE USE AN ADDBLOCKER TO WATCH ADD FREE !!!</h2>
        <iframe
          src={`https://vidsrc.icu/embed/movie/${id}`}
          className="movie_details_player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;
