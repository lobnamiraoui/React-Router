
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetails from './components/MovieDetails';

const App = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      description: "Un film de science-fiction où les rêves sont utilisés pour manipuler les pensées.",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
        poster: "Inception.jpg",
    },
    {
      id: 2,
      title: "The Matrix",
      description: "Un hacker découvre que la réalité qu'il connaît est une simulation.",
      trailer: "https://www.youtube.com/embed/m8e-FF8MsqU",
      poster: "The Matrix.jpg",
    },
    {
      id: 3,
      title: "Avatar",
      description: "Un ancien marine part dans un monde exotique où les humains et les Na'vi sont en conflit.",
      trailer: "https://www.youtube.com/embed/5PSNL1qE6VY",
      poster: "Avatar.jpg",
    },
    // Ajoute plus de films si nécessaire
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;