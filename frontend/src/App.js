import React from 'react'
import './App.css';
import { ReservationForm } from './components/ReservationForm/ReservationForm';
import { HomePage } from './components/HomePage/HomePage';
import { HotelList } from './components/HotelList/HotelList';

function App() {
  return (
    <div className="App">
      <HomePage />
      <HotelList />
      {/* Put reservation at the bottom so it displays last KK */}
      <ReservationForm /> 
    </div>
  )
}

export default App
