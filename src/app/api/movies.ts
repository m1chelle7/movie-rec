// pages/api/movies.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchMovieByTitle, fetchMovieById } from '../../lib/omdb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, imdbID } = req.query;
    
    if (imdbID) {
        // Fetch movie by IMDb ID
        try {
            const movieData = await fetchMovieById(imdbID as string);
            res.status(200).json(movieData);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch movie data' });
        }
    } else if (title) {
        // Fetch movie by title
        try {
            const movieData = await fetchMovieByTitle(title as string);
            res.status(200).json(movieData);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch movie data' });
        }
    } else {
        res.status(400).json({ error: 'Missing title or imdbID' });
    }
}
