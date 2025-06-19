import { useState } from "react";
import { searchMovies } from "../api";
import { Link } from "react-router-dom";
import Star from "../assets/star.png";
import "./Search.css"


const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);


  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    setHasSearched(true);

    try {
      const res = await searchMovies(query);
      setResults(res);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  return (
    <div className="search-page">
      <h2>Search for a movie</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {hasSearched && results.length === 0 && (
        <p className="no-results">There is no film matching your search :/</p>
      )}

      <div className="movie_cards">
                {results.map((movie) => (
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
    </div>
  );
};

export default Search;
