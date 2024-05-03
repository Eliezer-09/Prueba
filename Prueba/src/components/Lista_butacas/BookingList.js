import React, { useEffect, useState } from 'react';
import { getAllBookings } from '../api';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsData = await getAllBookings();
        setBookings(bookingsData);
      } catch (error) {
        console.error('Error fetching bookings:', error.message);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>{/* Renderiza la información de la reserva aquí */}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
