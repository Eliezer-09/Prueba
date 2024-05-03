import React from 'react';

const MovieDetails = ({ movie }) => {
  // Supongamos que la variable "movie" contiene los detalles de la película seleccionada
  const { name, genre, allowedAge, lengthMinutes } = movie;

  return (
    <div>
      <h2>Detalles de la Película</h2>
      <div>
        <strong>Nombre:</strong> {name}
      </div>
      <div>
        <strong>Género:</strong> {genre}
      </div>
      <div>
        <strong>Edad Permitida:</strong> {allowedAge}
      </div>
      <div>
        <strong>Duración:</strong> {lengthMinutes} minutos
      </div>
    </div>
  );
};

export default MovieDetails;
