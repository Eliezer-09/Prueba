const Booking = require('../models/booking');

// Obtener todas las reservas
exports.getAllBookings = async () => {
  try {
    return await Booking.findAll();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Crear una nueva reserva
exports.createBooking = async (bookingData) => {
  try {
    return await Booking.create(bookingData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtener una reserva por su ID
exports.getBookingById = async (bookingId) => {
  try {
    return await Booking.findByPk(bookingId);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Actualizar una reserva por su ID
exports.updateBooking = async (bookingId, bookingData) => {
  try {
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      throw new Error('Booking not found');
    }
    return await booking.update(bookingData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar una reserva por su ID
exports.deleteBooking = async (bookingId) => {
  try {
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      throw new Error('Booking not found');
    }
    return await booking.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};
