import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!movies || movies.length === 0) {
    return <div>Chargement des films...</div>;
  }

  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Film non trouvé.</div>;
  }

  return (
    <div className="movie-details">
      <button onClick={() => navigate(-1)}>← Retour</button>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.description}</p>
      <h3>Regarder la bande-annonce :</h3>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="Bande-annonce"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDetails;