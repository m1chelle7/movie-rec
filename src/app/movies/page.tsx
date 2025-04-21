'use client'

import { useState } from 'react';
import { fetchMovieByTitle } from '@/lib/omdb'; // Make sure the path is correct

export default function Movies() {
  const [movie, setMovie] = useState<any>(null); // Adjust type based on movie data
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to handle movie search
  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMovieByTitle(title);
      setMovie(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: unknown) {
      setError('Movie not found or failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="movies-container">
      <h1>Search for a Movie</h1>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie title"
        className="movie-input"
      />

      <button onClick={handleSearch} disabled={loading} className="search-button">
        {loading ? 'Loading...' : 'Search'}
      </button>

      {error && <p className="error-message">{error}</p>}

      {movie && !loading && (
        <div className="movie-details">
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      )}
    </div>
  );
}
