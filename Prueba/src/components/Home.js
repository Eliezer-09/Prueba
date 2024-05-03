import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa tu archivo de estilos CSS

const Home = () => {
  return (
    <div className="menu-container">
      <h1>Inicio</h1>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/booking-form" className="nav-link">Reservar Butacas</Link>
          </li>
          <li className="nav-item">
            <Link to="/booking-list" className="nav-link">Listas de Butacas</Link>
          </li>
          <li className="nav-item">
            <Link to="/movie-details" className="nav-link">Detalle de Películas</Link>
          </li>
          <li className="nav-item">
            <Link to="/movie-list" className="nav-link">Lista de Películas</Link>
          </li>
          <li className="nav-item">
            <Link to="/seat-selection" className="nav-link">Selección</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
