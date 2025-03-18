import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies] = useState([
    {
      id: 1,
      title: 'Movie 1',
      description: 'This is the description for Movie 1.',
      trailer: 'https://www.youtube.com/embed/example1', // Embed video link
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'This is the description for Movie 2.',
      trailer: 'https://www.youtube.com/embed/example2', // Embed video link
    },
    // Add more movies as needed
  ]);

  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-cards">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>
              <button>View Description</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;