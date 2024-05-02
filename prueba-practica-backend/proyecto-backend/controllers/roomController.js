const Room = require('../models/room');

// Obtener todas las salas
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva sala
exports.createRoom = async (req, res) => {
  // Implementa la lógica para crear una nueva sala aquí
};

// Obtener una sala por su ID
exports.getRoomById = async (req, res) => {
  // Implementa la lógica para obtener una sala por su ID aquí
};

// Actualizar una sala por su ID
exports.updateRoom = async (req, res) => {
  // Implementa la lógica para actualizar una sala por su ID aquí
};

// Eliminar una sala por su ID
exports.deleteRoom = async (req, res) => {
  // Implementa la lógica para eliminar una sala por su ID aquí
};
