import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Reemplaza esto con la URL de tu backend

export const getAllBookings = async () => {
  try {
    const response = await axios.get(`${API_URL}/bookings`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};


