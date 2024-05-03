import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP

const MovieList = () => {
  // Estado para almacenar la lista de películas
  const [movies, setMovies] = useState([]);

  // Función para cargar la lista de películas desde el backend
  const loadMovies = async () => {
    try {
      const response = await axios.get('/api/movies'); // Suponiendo que el endpoint para obtener las películas es '/api/movies'
      setMovies(response.data); // Actualiza el estado con las películas obtenidas del backend
    } catch (error) {
      console.error('Error al cargar las películas:', error);
    }
  };

  // Carga la lista de películas cuando el componente se monta
  useEffect(() => {
    loadMovies();
  }, []); // El segundo argumento del useEffect indica que solo se debe ejecutar una vez al montar el componente

  return (
    <div>
      <h2>Cartelera de Películas</h2>
      <ul>
        {/* Mapea las películas y muestra cada una en una lista */}
        {movies.map(movie => (
          <li key={movie.id}>
            {/* Aquí puedes mostrar los detalles de cada película */}
            {movie.name} - {movie.genre} - {movie.allowedAge} - {movie.lengthMinutes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
