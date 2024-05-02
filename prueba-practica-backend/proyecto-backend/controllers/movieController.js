// controllers/movieController.js

const Movie = require('../models/movie');

// Obtener todas las películas
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva película
exports.createMovie = async (req, res) => {
  // Implementa la lógica para crear una nueva película aquí
};

// Obtener una película por su ID
exports.getMovieById = async (req, res) => {
  // Implementa la lógica para obtener una película por su ID aquí
};

// Actualizar una película por su ID
exports.updateMovie = async (req, res) => {
  // Implementa la lógica para actualizar una película por su ID aquí
};

// Eliminar una película por su ID
exports.deleteMovie = async (req, res) => {
  // Implementa la lóg
}