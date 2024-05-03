import React, { useState } from 'react';
import './BookingForm.css'; // Importa el archivo de estilos CSS

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    movie: '',
    date: '',
    seatNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al backend
    console.log(formData);
  };

  return (
    <div className="booking-container">
      <h2>Reserva de Butacas de Cine</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Repite lo mismo para el resto de los campos del formulario */}
        <button type="submit" className="submit-btn">Reservar</button>
      </form>
    </div>
  );
};

export default BookingForm;
