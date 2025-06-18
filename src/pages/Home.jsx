import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import "./Home.css";
import FilterGroup from "./FilterGroup";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api";

import Fire from "../assets/fire.png";
import Star from "../assets/star.png";
import Party from "../assets/partying-face.png";



const Home = ({ type, title, emoji }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  //fetching from api based on type ------------------------------------
  const fetchMovies = async () => {
    let data = [];
    try {
      switch (type) {
        case "popular":
          data = await getPopularMovies();
          break;
        case "top_rated":
          data = await getTopRatedMovies();
          break;
        case "upcoming":
          data = await getUpcomingMovies();
          break;
        default:
          data = [];
      }
  
      setMovies(data);
      setFilterMovies(data);
    } catch (err) {
      console.error("Failed to fetch movies", err);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [type]);


  //sorting ----------------------------------------------------------------
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  //filtering movies ---------------------------------------------------------
  useEffect(() => {
    let filtered = movies;
    if (minRating > 0) {
      filtered = filtered.filter((movie) => movie.vote_average >= minRating);
    }
  
    if (sort.by !== "default") {
      filtered = _.orderBy(filtered, [sort.by], [sort.order]);
    }
  
    setFilterMovies(filtered);
  }, [ movies, minRating, sort]);

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  //display -----------------------------------------------------------------------

    return (
        <section className="movie_list" id={type}>
            <header className="align_center movie_list_header">
                <h2 className="align_center movie_list_heading">
                {title}
                <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
                </h2>

                <div className="align_center movie_list_fs">
                <FilterGroup
                    minRating={minRating}
                    onRatingClick={handleFilter}
                    ratings={[8, 7, 6]}
                />

                <select
                    name="by"
                    id=""
                    onChange={handleSort}
                    value={sort.by}
                    className="movie_sorting"
                >
                    <option value="release_date">Sort By Date</option>
                    <option value="vote_average">Sort By Rating</option>
                </select>
                <select
                    name="order"
                    id=""
                    onChange={handleSort}
                    value={sort.order}
                    className="movie_sorting"
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                </div>
            </header>




            <div className="movie_cards">
                {filterMovies.map((movie) => (
                <Link
                    key={movie.id}
                    to={`/film/${movie.id}`}
                    className='movie_card'
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt='movie poster'
                      className='movie_poster'
                    />
                  
                    <div className='movie_details'>
                      <h3 className='movie_details_heading'>
                        {movie.original_title}
                      </h3>
                      <div className='align_center movie_date_rate'>
                        <p>{movie.release_date}</p>
                        <p className='align_center'>
                          {movie.vote_average}
                          <img
                            src={Star}
                            alt='rating icon'
                            className='card_emoji'
                          />
                        </p>
                      </div>
                      <p className='movie_description'>
                        {movie.overview.slice(0, 100) + "..."}
                      </p>
                    </div>                  
                </Link>               
                ))}
            </div>
        </section>

    );
};

export default Home;