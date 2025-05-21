'use client';

import { useState } from 'react';
import { fetchMovieByTitle } from '@/lib/omdb';

export default function Movies() {
  const [movie, setMovie] = useState<any>(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMovieByTitle(title);
      setMovie(data);
    } catch (err: unknown) {
      setError('Movie not found or failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">🎥 Search for a Movie</h1>

      <div className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4 mb-8">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter movie title"
          className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSearch}
          disabled={loading || !title.trim()}
          className="px-4 py-2 bg-purple-700 hover:bg-purple-600 disabled:bg-gray-700 rounded-md transition-colors duration-200"
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>

      {error && (
        <p className="text-red-400 mb-6 text-center">{error}</p>
      )}

      {movie && !loading && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-3xl w-full flex flex-col md:flex-row gap-6 animate-fade-in">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : '/no-poster.png'}
            alt={movie.Title}
            className="w-full md:w-1/3 object-cover rounded-md"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-2">{movie.Title}</h2>
            <p className="text-sm text-gray-400 mb-4">{movie.Year} • {movie.Rated} • {movie.Runtime}</p>
            <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
            <p className="mb-2"><strong>Director:</strong> {movie.Director}</p>
            <p className="mb-2"><strong>Actors:</strong> {movie.Actors}</p>
            <p className="text-gray-300">{movie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
}
