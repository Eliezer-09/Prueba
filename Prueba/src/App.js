import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import BookingForm from './components/formulario/BookingForm';
import BookingList from './components/Lista_butacas/BookingList';
import MovieDetails from './components/Detalle_peliculas/MovieDetails';
import MovieList from './components/Lista_peliculas/MovieList';
import SeatSelection from './components/Seleccion_Butacas/SeatSelection';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/booking-list" element={<BookingList />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
