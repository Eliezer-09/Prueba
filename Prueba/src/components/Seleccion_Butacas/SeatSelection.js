import React, { useState } from 'react';
import './SeatSelection.css';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    setSelectedSeats(prevSeats => {
      if (prevSeats.includes(seat)) {
        return prevSeats.filter(s => s !== seat); // Deselecciona el asiento si ya está seleccionado
      } else {
        return [...prevSeats, seat]; // Selecciona el asiento si no está seleccionado
      }
    });
  };

  return (
    <div className="seat-selection-container">
      <h2>Seleccionar Butacas</h2>
      <div className="seat-grid">
        {/* Genera la cuadrícula de asientos */}
        {Array.from({ length: 5 }, (_, row) => (
          <div key={row} className="seat-row">
            {Array.from({ length: 10 }, (_, col) => {
              const seat = String.fromCharCode(65 + row) + (col + 1); // Genera el nombre del asiento (por ejemplo, "A1")
              const isSelected = selectedSeats.includes(seat);
              return (
                <button
                  key={seat}
                  className={`seat ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSeatSelect(seat)}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div>
        {/* Muestra los asientos seleccionados */}
        <p>Butacas seleccionadas: {selectedSeats.join(', ')}</p>
      </div>
    </div>
  );
};

export default SeatSelection;
