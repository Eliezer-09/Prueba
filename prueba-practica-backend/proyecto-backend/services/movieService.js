const Movie = require('../models/movie');

// Obtener todas las películas
exports.getAllMovies = async () => {
  try {
    return await Movie.findAll();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Crear una nueva película
exports.createMovie = async (movieData) => {
  try {
    return await Movie.create(movieData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtener una película por su ID
exports.getMovieById = async (movieId) => {
  try {
    return await Movie.findByPk(movieId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Actualizar una película por su ID
exports.updateMovie = async (movieId, movieData) => {
  try {
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      throw new Error('Movie not found');
    }
    return await movie.update(movieData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar una película por su ID
exports.deleteMovie = async (movieId) => {
  try {
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      throw new Error('Movie not found');
    }
    return await movie.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};
