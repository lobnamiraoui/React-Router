import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Recherche du film avec l'ID
  const movie = movies.find((movie) => movie.id === parseInt(id));

  // Si aucun film n'est trouvé
  if (!movie) {
    return <div>Film non trouvé.</div>;
  }

  return (
    <div>
    <button onClick={() => navigate(-1)}>Retour</button>
    <div className="movie-details">
      
      <h1>{movie.title}</h1>
      
      {/* Affichage de l'image */}
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
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
    </div>
  );
};

export default MovieDetails;