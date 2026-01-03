import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'


const Favorites = () => {
  const { favorites } = useMovieContext();
  if (favorites.length > 0) {
    return (
        <div className='movies-grid'>
          {favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
    );
  }

  return (
    <div className='favorites-empty'>
        <h2>No favorites yet</h2>
        <p>Add movies to your favorites list to see them here.</p>

        
    </div>
  )
}

export default Favorites