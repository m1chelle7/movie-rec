// lib/omdb.ts
const API_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export async function fetchMovieByTitle(title: string) {
    const encodedTitle = encodeURIComponent(title);
    console.log(`${API_URL}?apikey=${API_KEY}&t=${encodedTitle}`);
    const res = await fetch(`${API_URL}?apikey=${API_KEY}&t=${encodedTitle}`);

    
    
    if (!res.ok) {
      throw new Error('Failed to fetch movie');
    }
  
    const data = await res.json();
    return data;
}

export async function fetchMovieById(imdbID: string) {
    const res = await fetch(`${API_URL}?i=${imdbID}&apikey=${API_KEY}`);
    
    if (!res.ok) {
      throw new Error('Failed to fetch movie');
    }
  
    const data = await res.json();
    return data;
}
