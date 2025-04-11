
import React from 'react';
import MovieCard from '../components/MovieCard'; 

const Home = ({ movies }) => {
  return (
    <div className="home">
      <h1>Bienvenue sur l'App des Films</h1>
      <div className="movie-list">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Aucun film disponible.</p>
        )}
      </div>
    </div>
  );
};

export default Home;