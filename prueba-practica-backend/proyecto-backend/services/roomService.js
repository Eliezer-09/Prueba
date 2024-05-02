const Room = require('../models/room');

// Obtener todas las salas
exports.getAllRooms = async () => {
  try {
    return await Room.findAll();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Crear una nueva sala
exports.createRoom = async (roomData) => {
  try {
    return await Room.create(roomData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtener una sala por su ID
exports.getRoomById = async (roomId) => {
  try {
    return await Room.findByPk(roomId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Actualizar una sala por su ID
exports.updateRoom = async (roomId, roomData) => {
  try {
    const room = await Room.findByPk(roomId);
    if (!room) {
      throw new Error('Room not found');
    }
    return await room.update(roomData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar una sala por su ID
exports.deleteRoom = async (roomId) => {
  try {
    const room = await Room.findByPk(roomId);
    if (!room) {
      throw new Error('Room not found');
    }
    return await room.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};
