import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <Link to={`/movie/${movie.id}`}>
        <button>Voir les détails</button>
      </Link>
    </div>
  );
};

export default MovieCard;