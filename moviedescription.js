import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = () => {
  // Get the movie id from the URL params
  const { id } = useParams();

  // Movie data (for simplicity, using static data in this example)
  const movies = [
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
  ];

  // Find the movie by id
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        title={movie.title}
        width="560"
        height="315"
        src={movie.trailer}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default MovieDescription;