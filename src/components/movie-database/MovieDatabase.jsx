import axios from "axios";
import { useState } from "react";
import './movieDatabase.scss'

function MovieDatabase(props) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const YOUR_API_KEY = "7050e862d3ef956b7d4411a42b1deeae";

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${YOUR_API_KEY}&query=${query}`
      );
      setMovies(response.data.results);
      setError("");
    } catch (error) {
      setMovies([]);
      setError("No movies found. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div>
      <h1>Movie Database</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieDatabase;
