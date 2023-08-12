import React from 'react'
import './App.css';
import { ReservationForm } from './components/ReservationForm/ReservationForm';
import { HomePage } from './components/HomePage/HomePage';
// import { HotelList } from './components/HotelList/HotelList';

function App() {
  return (
    <>
      <HomePage />
      <ReservationForm />
      {/* <HotelList /> */}
      
      <button type="submit">Book The Rooms</button>
    </>
  )
}

export default App
